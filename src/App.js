import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Rutas from './Routes';

import { CssBaseline } from '@mui/material';
import { getAuth,  } from "firebase/auth";
import { loadUser } from './utils/dbUtils';
import Header from './components/Header';
import Login from './pages/Login';
import Layout from './components/layout';
import Index from './pages/index';





function App() {
  const auth = getAuth();
  const [user, setUser] = useState(null);

  const onLogout = () => {
    setUser(null);
  };

  useEffect(() => {
    auth.onAuthStateChanged(response => {
      if (response) {
        // leer datos del usuario
        loadUser(response.uid)
        .then(data => { setUser(data); });
      }
    });
  }, []);
  return (
    <Router>
      <CssBaseline />
     {user && <Rutas user={user} onLogout={onLogout} /> ? user : <Rutas/>}  
    </Router>
  );
}
export default App;