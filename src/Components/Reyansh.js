import React from 'react';
import {
  GlobalStyles,
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import { keyframes } from '@emotion/react';

const announcement = [
  'LADIES AND GENTLEMENNNNN… ARE YOU READYYYYY?! 🎤',
  'THE WAIT IS OVER! ⏳',
  'A NEW SUPERSTAR HAS ENTERED THE RING! 🥊',
  'Born straight outta ROSEVILLE, CALIFORNIAAAA! 🌴',
  'The little brother of the reigning champion… VEEKSHAAAA! 👑',
  'MAKING HIS GRAND DEBUT… 🎬',
  'THE ONE… THE ONLY…',
];

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const serif = '"Cormorant Garamond", Georgia, serif';
const sans = 'Montserrat, Arial, sans-serif';

function Reyansh() {
  return (
    <Box component='main' sx={{ minHeight: '100vh', bgcolor: '#fbf7f1', color: '#493a31', fontFamily: sans }}>
      <GlobalStyles styles={'@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,500&family=Montserrat:wght@400;500;600&display=swap");'} />

      <Box
        component='header'
        sx={{
          height: { xs: 78, sm: 104 },
          display: 'grid',
          placeItems: 'center',
          bgcolor: '#fbf7f1',
        }}
      >
        <Box
          aria-label='Reyansh'
          sx={{
            display: 'grid',
            placeItems: 'center',
            width: { xs: 40, sm: 48 },
            height: { xs: 40, sm: 48 },
            border: '1px solid #b89a74',
            borderRadius: '50%',
            color: '#604a3b',
            fontFamily: serif,
            fontSize: { xs: '1.65rem', sm: '1.85rem' },
            fontStyle: 'italic',
            fontWeight: 500,
            lineHeight: 1,
          }}
        >
          R
        </Box>
      </Box>

      <Card component='article' elevation={0} square sx={{ bgcolor: '#fbf7f1', color: '#493a31' }}>
        <Box
          component='section'
          aria-label='Newborn portrait of Reyansh'
          sx={{
            position: 'relative',
            height: { xs: 'calc(100svh - 78px)', sm: 'min(65vw, 660px)' },
            minHeight: { xs: 420, sm: 430 },
            maxHeight: { xs: 720, sm: 660 },
            overflow: 'hidden',
            bgcolor: '#e8ded0',
          }}
        >
          <CardMedia
            component='img'
            image='/reyan-profile.jpg'
            alt='A close portrait of baby Reyansh resting on a soft cream blanket'
            sx={{
              width: '100%',
              height: '100%',
              display: 'block',
              objectFit: 'cover',
              objectPosition: { xs: 'center 42%', sm: 'center 44%' },
            }}
          />
        </Box>

        <CardContent sx={{ p: '0 !important' }}>
          <Container
        component='section'
        id='announcement'
        aria-labelledby='reyansh-title'
        maxWidth={false}
        sx={{
          width: { xs: 'calc(100% - 32px)', sm: 'min(790px, calc(100% - 44px))' },
          pt: { xs: 7, sm: 'clamp(72px, 10vw, 128px)' },
          pb: { xs: 9, sm: 'clamp(86px, 12vw, 150px)' },
          px: 0,
          textAlign: 'center',
        }}
          >
        <Typography sx={{ mb: '18px', color: '#7d8b78', fontFamily: sans, fontSize: '.62rem', letterSpacing: '.34em', textTransform: 'uppercase', animation: `${fadeIn} 700ms 120ms ease both` }}>
          Our newest little love
        </Typography>
        <Typography id='reyansh-title' component='h1' sx={{ m: 0, color: '#514035', fontFamily: serif, fontSize: { xs: 'clamp(3rem, 15vw, 4rem)', sm: 'clamp(3.8rem, 8vw, 7rem)' }, fontStyle: 'italic', fontWeight: 500, lineHeight: .95, overflowWrap: 'anywhere', animation: `${fadeIn} 700ms 120ms ease both` }}>
          Meet Reyansh
        </Typography>

        <Stack direction='row' alignItems='center' spacing='15px' aria-hidden='true' sx={{ width: { xs: 128, sm: 160 }, mx: 'auto', mt: { xs: '24px', sm: '30px' }, mb: { xs: '34px', sm: '42px' }, color: '#b89a74', fontSize: '.6rem', '&::before, &::after': { content: '""', flex: 1, height: '1px', bgcolor: '#e4d8c9' } }}>
          <Box component='span'>✦</Box>
        </Stack>

        <Stack spacing={{ xs: '20px', sm: '17px' }}>
          {announcement.map((line) => (
            <Typography key={line} sx={{ color: '#74655b', fontFamily: sans, fontSize: { xs: '.74rem', sm: 'clamp(.73rem, 1.2vw, .88rem)' }, fontWeight: 500, letterSpacing: { xs: '.06em', sm: '.105em' }, lineHeight: { xs: 1.75, sm: 1.7 }, overflowWrap: 'anywhere' }}>
              {line}
            </Typography>
          ))}
        </Stack>

        <Typography sx={{ mt: { xs: '38px', sm: '44px' }, mb: '12px', color: '#584336', fontFamily: serif, fontSize: { xs: 'clamp(2.15rem, 11vw, 3rem)', sm: 'clamp(2.6rem, 6vw, 5rem)' }, fontWeight: 500, letterSpacing: '.015em', lineHeight: 1, overflowWrap: 'anywhere' }}>
          REYANSHHHHH! <span aria-hidden='true'>🔥</span>
        </Typography>
        <Typography sx={{ m: 0, color: '#85756a', fontFamily: sans, fontSize: { xs: '.66rem', sm: '.72rem' }, letterSpacing: { xs: '.11em', sm: '.18em' }, lineHeight: 1.8, textTransform: 'uppercase', overflowWrap: 'anywhere', '& strong': { color: '#5a4436' } }}>
          Small in size. <strong>BIG on attitude.</strong> 💪
        </Typography>
          </Container>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Reyansh;
