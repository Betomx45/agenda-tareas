import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { CssBaseline } from '@mui/material';
import { TextField } from '@mui/material';
import { Link } from '@mui/material';
import { Link as route} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import Alert from '../../components/Alert';
import ButtonFacebook from './ButtonFacebook';
import Buttons from './Buttons';
import { Divider } from '@mui/material';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import Header from '../../components/Header';



const UseStyles = makeStyles(theme =>({
  '@global': {
    borderStyle:{
      backgroundColor: 'secondary'
    },
  },
  paper: {
    spacing:8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: 40,
  },
  submit: {
    margin:(3,0,2)
  },
}));


const Login = (props) => {
  const auth = getAuth();
  const classes = UseStyles();

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
   };

   const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage('');

    signInWithEmailAndPassword(auth, user. email, user.password)
    .then(response => {
      navigate('/inicio');
    })
    .catch(error => {
      console.log(error);
      //alert(error.message);
      setErrorMessage(error.message);
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
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Agenda Plus
          </Typography>
        </Toolbar>
      </AppBar>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" sx={{marginTop:8}}>
          Ingresar a Agenda Plus
        </Typography>
        <form className={classes.form} onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            defaultValue={user.email}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            defaultValue={user.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Ingresar
          </Button>
          <Grid container>
              <Grid item sx={{marginTop:2}}>
                <Link to={'/signup'} component={route} variant="body2">
                  {"No tienes una cuenta? Registrate aqui"}
                </Link>
              </Grid>
          </Grid>
        </form>
      </div>
      <Divider sx={{marginTop:3}}><CircleRoundedIcon sx={{fontSize:8}}/></Divider>
      <ButtonFacebook/>
      <Buttons/>
      {errorMessage &&
        <Alert type="error" message={errorMessage} autoclose={5000} />
      }
    </Container>
    </React.Fragment>
  );
};
export default Login;