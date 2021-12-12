import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { Logout, Settings } from '@mui/icons-material';
import { Box } from '@mui/system';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';


export const menuItems = (
  <div >
    <Box sx={{marginTop:3}}>
    <ListItem to="/inicio" component={Link}>
      <ListItemIcon>
        <HomeOutlinedIcon  />
      </ListItemIcon>
      <ListItemText primary="Inicio" />
    </ListItem>

    <ListItem to="/calendario" component={Link}>
      <ListItemIcon>
        <EventNoteRoundedIcon/>
      </ListItemIcon>
      <ListItemText primary="Calendario de Tareas" />
    </ListItem>

    <ListItem to="/configuracion" component={Link}>
      <ListItemIcon>
        <Settings />
      </ListItemIcon>
      <ListItemText primary="Configuración" />
    </ListItem>

    <ListItem to="/" component={Link}>
      <ListItemIcon>
        <Logout />
      </ListItemIcon>
      <ListItemText primary="Salir" />
    </ListItem>

    </Box>
  </div>
);
