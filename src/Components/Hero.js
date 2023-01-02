import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, ButtonGroup } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';


function Hero() {
  return (
    <React.Fragment>
      <CssBaseline />


      <Card sx={{ maxWidth: 1000 }}>
        <CardMedia
          sx={{ height: 420 }}
          image={process.env.PUBLIC_URL + "/sunset2.jpg"}
          title="Hawaii Sunset"
        />
        <CardContent>
          <Typography gutterBottom variant="h2" component="h2" align='center' >
            Sandeep Appikonda
          </Typography>
          <Typography variant="body2" color="text.secondary" align='center'>
            Experienced Software Engineer with a passion for solving complex problems and designing simple and efficient
            solutions. Excellent ability to grasp emerging technologies and interact smoothly and effectively with peers,
            management, and clients.
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>

          <ButtonGroup
            orientation="horizontal"
            aria-label="vertical contained button group"
            variant="text"
            color='primary'
          >

            <a href="https://www.facebook.com/sandeep.appikonda" target="_blank" rel="noreferrer">
              <IconButton component="label" >
                <FacebookOutlinedIcon />
              </IconButton>
            </a>

            <a href="https://www.linkedin.com/in/sandeepappikonda" target="_blank" rel="noreferrer">
              <IconButton component="label" >
                < LinkedInIcon />
              </IconButton>
            </a>
            <a href="https://github.com/appikonda" target="_blank" rel="noreferrer">
              <IconButton component="label" >
                < GitHubIcon />
              </IconButton>
            </a>
            <a href="https://www.instagram.com/appikonda/" target="_blank" rel="noreferrer">
              <IconButton component="label" >
                < InstagramIcon />
              </IconButton>
            </a>
          </ButtonGroup>
        </CardActions>
        <CardActions style={{ justifyContent: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              '& > *': {
                m: 1,
              },
            }}
          >
            <ButtonGroup
              orientation="vertical"
              aria-label="vertical contained button group"
              variant="text"
              color='inherit'
            >
              <Button size='medium'>About</Button>

              <Button size='large' href='/resume.pdf' target='_blank' rel='noopener noreferrer'>Resume</Button>

              <Button size='medium'>Photos</Button>
            </ButtonGroup>
          </Box>
        </CardActions>
      </Card>
    </React.Fragment>

  );
}

export default Hero;


