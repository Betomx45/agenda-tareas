import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import { Link as route} from 'react-router-dom';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

const Index = () => {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color='secondary'
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Agenda Plus
          </Typography>
          <Link to="/login" component={route}>
          <Button variant="outlined" color="inherit" sx={{ my: 1, mx: 1.5, color:'white',  }}>
            Iniciar sesión
          </Button>
          </Link>
          <Link to="/signup" component={route}>
          <Button variant="outlined" color="inherit" sx={{ my: 1, mx: 1.5, color:'white',  }}>
            Registrate
          </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 6, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Prueba Agenda plus
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          una sencilla agenda, que te ayuda a registrar tus tareas.
          <br/>
          <br/>
          !Pruebala ya...Es gratis!
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main" sx={{textAlign:'center'}}>
        <Grid container spacing={5} >
            <Grid
              item
              ml={16}
              md={2}
            >
                <img src='https://revistadigital.inesem.es/gestion-empresarial/files/2016/05/lista-de-tareas-pendientes-1020x680.jpg'
                height={'350px'}
                width={'600px'}   
                />
            </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Index;