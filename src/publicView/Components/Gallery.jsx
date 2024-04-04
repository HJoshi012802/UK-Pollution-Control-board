import * as React from 'react';
import { Grid, Paper, Container, Typography, styled } from '@mui/material';

export default function Gallery() {

  const galleryItems = [
    { title: 'Cleaning Drive', image: './assets/Gallery_1.png' },
    { title: 'Pollution Control', image: './assets/Gallery_2.png' },
    { title: '', image: './assets/Gallery_3.png' },
    { title: 'Mountain', image: './assets/Gallery_4.png' },
    { title: 'Use Case', image: './assets/Gallery_5.png' },
    { title: '', image: './assets/Gallery_6.png' },
    { title: '', image: './assets/Gallery_7.png' },
    { title: '', image: './assets/Gallery_8.png' },
    // Add more items as necessary
  ];

    
  const TitleBox = styled(Typography)(({theme}) => ({
    width:'100%',  
    height:'50px',  
    position:'absolute', 
    bottom:'7px',
    color: "#fff",
    backgroundColor: theme.palette.secondary.light,
    fontWeight:'bolder',
    fontSize:'1.5rem',
    display:'flex',
    alignItems: 'center',
    justifyContent:'center'
}));

  const OverlayBox = styled(Typography)(({theme}) => ({
    width:'100%',  
    height:'97.5%',  
    position:'absolute', 
    top:'0',
    backgroundColor:'rgba(0,0,0,0.3)',
    backgroundImage:"url('./assets/play_button.png')",
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center'
}));

  return (
    <>
      <Container sx={{pb:8, pt:10}} >
        <Typography variant="h5" align='center' sx={{fontWeight: 600, fontSize: '1.8rem', pb: 5, color: 'primary.main'}} >
          Gallery
        </Typography>
        <Grid container spacing={2}> 
            {galleryItems.map(({title, image}) =>(
              <>
                {
                  title ?
                  <Grid item xs={12} sm={6} md={3} lg={3} key={image}>
                    <Paper sx={{boxShadow:'none', position:'relative'}}>
                      <img src={image} alt={title} loading='lazy' style={{ width: '100%', height: '100%' }} />
                      <TitleBox > {title} </TitleBox>
                    </Paper>
                  </Grid>
                  :
                  <Grid item xs={12} sm={6} md={3} lg={3} key={image}>
                    <Paper sx={{boxShadow:'none', position:'relative'}}>
                      <img src={image} alt={title} loading='lazy' style={{ width: '100%', height: '100%' }} />
                      {/* <TitleBox > {title} </TitleBox> */}
                      <OverlayBox />
                      
                    </Paper>
                  </Grid>
                }
              </>

              )
            )}
        </Grid>
      </Container>
    </>
  );
}