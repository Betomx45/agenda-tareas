import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { CssBaseline } from '@mui/material';
import { TextField } from '@mui/material';
import { Link } from '@mui/material';
import { Link as route} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from 'firebase/database';
import database from '../../Config/firebaseConfig';
import Alert from '../../components/Alert';
import { Toolbar } from '@mui/material';
import { AppBar } from '@mui/material';


const UseStyles = makeStyles(theme =>({
    '@global': {
      borderStyle:{
        backgroundColor: 'secondary'
      },
    },
    paper: {
      marginTop:8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%',
      marginTop:50,
    },
    submit: {
      margin:(3, 0, 2),
    },
  }));

const SignUp = (props) => {
    const classes =UseStyles();
    const auth = getAuth();
    const navigate = useNavigate();

    const [user, setUset] = useState({
      name: '',
      email: '',
      password: ''
    });

    const [alertMessage, setAlertMessage] = useState(null);

    const handleChange = (e) => {
     setUset({
       ...user,
       [e.target.name]: e.target.value
     });
    };

    const handleSubmit = (e) => {
     e.preventDefault();

     setAlertMessage(null);

     createUserWithEmailAndPassword(auth, user.email, user.password)
     .then(response => {
       // guardar los datos del usuario
       delete user.password;
       set(ref(database, `user/${response.user.uid}`), user); 
        setAlertMessage({
         type: 'success',
         message: 'Bienvenido a Agenda Plus'
       }); 
       navigate('/inicio');
     })
     .catch(error => {
       console.log(error);
       //alert(error.message);
       setAlertMessage({
        type: 'error',
        message: error.message
      }); 
     });
    };

    return (
      <React.Fragment>
        <AppBar
        position="static"
        color='secondary'
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1, }}>
            Agenda Plus
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" sx={{marginTop:10}}>
            Inscribirme a Agenda Plus
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit} >
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="fname"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Nombre"
                  autoFocus
                  value={user.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={user.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={user.password}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              sx={{marginTop:4}}
            >
              Registrarme
            </Button>
            <Grid container justify="flex-end">
              <Grid item sx={{marginTop:2}}>
                <Link to="/login" component={route} variant="body2">
                  {"¿Ya tienes una cuenta? Ingresa aquí"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        {alertMessage && 
          <Alert
            type={alertMessage.type}
            message={alertMessage.message}
            autoclose={5000}
          />
        }
      </Container>
      </React.Fragment>
    );
  };
  export default SignUp;