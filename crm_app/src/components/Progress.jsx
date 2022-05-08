import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



export const Progress = ({color,value}) => {
  return (  
    <Box sx={{ width: '100%' }}>
         <Box sx={{ display: 'flex', alignItems: 'center'}}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress color='inherit' value={value} sx={{color:color}} variant="determinate"  />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
        value)}%`}</Typography>
      </Box>
    </Box>
    </Box>
  );
}
