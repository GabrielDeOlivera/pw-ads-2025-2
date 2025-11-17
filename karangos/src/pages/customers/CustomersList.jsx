import React from "react"
import Typography from "@mui/material/Typography"
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function CustomersList(){

    

    
const columns = [
  { 
    field: 'id', 
    headerName: 'Cód.', 
    width: 90 
  },
  {
    field: 'name',
    headerName: 'Nome',
    width: 250
  },
  {
    field: 'bith_date',
    headerName: 'Data_nasc',
    width: 150,
    valueFormatter: value => {
        if(value){
            const date = new Date(value)
            return date.toLocaleDateString('pt-br')
        }
        else return ''
    }
  },
  {
    field: 'municipality',
    headerName: 'Municipio/UF',
    width: 250,
    valueGetter: (value, row) => row.municipality + '/' + row.state
  },
  {
    field: 'phone',
    headerName: 'Celular',
    width: 150,
  },
  {
    field: 'email',
    headerName: 'E-mail',
    width: 250
  }
];


    const [customers, setCustomers] = React.useState([])

    async function loadData(){
        try {
            // Conectamos ao servidor remoto e esperamos uma resposta 
            const response=await
            fetch('https://api.faustocintra.com.br/v2/customers')
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
        Listagem de clientes
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