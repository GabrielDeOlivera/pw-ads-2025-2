import React from "react"
import Typography from "@mui/material/Typography"
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function CustomersList(){

    

    
const columns = [
  { 
    field: '_id', 
    headerName: 'Cód.', 
    width: 90 
  },
  {
    field: 'brand_model',
    headerName: 'Marca / Modelo',
    width: 200,
    valueGetter: (value, row) => `${row.brand} / ${row.model}`,
  },
  {
    field: 'color',
    headerName: 'Cor',
    width: 130
  },
  {
    field: 'year_manufacture',
    headerName: 'Ano Fab.',
    width: 100,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'imported',
    headerName: 'Importado',
    width: 120,
    align: 'center',
    headerAlign: 'center',
    renderCell: (params) => (params.value === 1 ? 'Sim' : ''),
  },
  {
    field: 'plates',
    headerName: 'Placas',
    width: 120,
  },
  {
    field: 'selling_price',
    headerName: 'Preço Venda',
    width: 150,
    align: 'right',
    headerAlign: 'right',
    valueFormatter: (value) => {
      if (value) {
        return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
      }
      return '';
    },
  },
  {
    field: 'selling_date',
    headerName: 'Data Venda',
    width: 130,
    align: 'center',
    headerAlign: 'center',
    valueFormatter: (value) => {
      if (value) {
        const date = new Date(value);
        return date.toLocaleDateString('pt-br');
      }
      return '';
    },
  },
];

    const [customers, setCustomers] = React.useState([])

    async function loadData(){
        try {
            // Conectamos ao servidor remoto e esperamos uma resposta 
            const response=await
            fetch('https://api.faustocintra.com.br/v2/cars')
            // Extraimos da resposta os dados em formato JSON 
            const data = await response.json()
            // Armazenamos os dados na variavel de estado 
            setCustomers(data)
        }
        catch(error) {
            // Exibimos o erro no console, para efeitos de depuraçao 
            console.error(error)
            // Informamos o erro ao usuario 
            alert('ERRO:' + error.message)
        }
    }

    React.useEffect(() => {
        loadData() 
    },[])
    
    return <>
    <Typography variant="h1" gutterBottom>
        Listagem de Carros
    </Typography>
     <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={customers}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  
    </>
}