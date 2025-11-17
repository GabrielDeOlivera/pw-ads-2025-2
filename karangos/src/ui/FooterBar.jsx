import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CoffeeIcon from '@mui/icons-material/Coffee';
export default function FooterBar() {
    return <>
    <Box 
    component="footer"
    sx={{
        backgroundColor: 'action.disabledBackground',
        display: 'flex',
        justifyContent: 'center',
        position: 'fixed', //posiçao fixa 
        bottom: 0, //na parte de baixo da pagina 
        width: '100vw'
    }}
    >
        <Typography variant="caption"
        sx={{' & a ': {//altera a cor do link (A) dentro de typography(&)
            color: 'secondary.light'
            }
            }}
            >
        Desenvolvido e mantido com <CoffeeIcon fontSize='small'/><a href="mailto:Kinai.top@hotmail.com">Gabriel de Oliveira</a>
        </Typography>
    </Box>
    </>
}