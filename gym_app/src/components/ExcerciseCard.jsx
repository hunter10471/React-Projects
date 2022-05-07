import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, IconButton } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatshotIcon from '@mui/icons-material/Whatshot';

export const ExcerciseCard = ({img, title, desc, time, cal}) => {
  return (
    <Card  sx={{ maxWidth: {lg:345},minWidth:220,marginX:'1rem',boxShadow:'none' }}>
      <CardActionArea  >
        <CardMedia
          component="img"
          height="150"
          image={img}
          alt="Excercise"
        />
        <CardContent className='text-secondary' >
          <Typography  gutterBottom variant="h5" component="div">
          <div className='relative'><span className='before:absolute before:bg-primary before:w-4 before:h-[2px] before:-bottom-[5px]'>{title}</span> </div>
          </Typography>
         
          <Typography variant="body1" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
        <CardActions className=''>
          <IconButton edge='end' color='primary'>
              <AccessTimeIcon />
              <Typography variant="subtitle2"  ml={1} color="text.secondary">
                  {time}
              </Typography>
          </IconButton>
          <IconButton color='primary'>
              <WhatshotIcon/>
              <Typography variant="subtitle2" ml={1} color="text.secondary">
                  {cal}
              </Typography>
          </IconButton>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
