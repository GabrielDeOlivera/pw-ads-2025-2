import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Comp() {
  return <>
      <Typography variant="h1">
         Sobre o Autor
      </Typography>
    <Card sx={{ maxWidth: 450 }}>
      <CardMedia
        sx={{ height: 400 }}
        image="/src/assets/babo.jpg"
        title="Abelha Mecanica"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Bumblebee
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Um grande sonhador que e uma peça chave dos Auto-Bots e luta contra as forças do mal codificando o bem 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Like</Button>
      </CardActions>
    </Card>
  </>
}
