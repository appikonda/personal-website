

import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';





import CssBaseline from '@mui/material/CssBaseline';



function About() {
 // const classes = useStyles();
  return (

    <div>
    
       
        <Card sx={{ maxWidth: 1000 }}>
        
        <CardContent
        sx={{ height:300 }}>
          <Typography gutterBottom variant="h2" component="div">
          <span >Sandeep Appikonda</span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Experienced Software Engineer with a passion for solving complex problems and designing simple and efficient
          solutions. Excellent ability to grasp emerging technologies and interact smoothly and effectively with peers,
          management, and clients.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">About</Button>
          <Button size="small">Projects</Button>
          
        </CardActions>
      </Card>
      
      </div>
    
  );
}

export default About;
