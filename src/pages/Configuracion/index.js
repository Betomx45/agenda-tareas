import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Switch } from '@mui/material';
import { Typography } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import DashboardContent from '../../components/layout';


const Setting = () => {
    return (
        <React.Fragment>
            <DashboardContent>
            <CssBaseline />
            <Container maxWidth="sm" sx={{minHeight: 530,}}>
                <Typography sx={{ textAlign: 'center', fontSize: 30, fontFamily: 'Arial' }}>Configuración</Typography>
                <Box sx={{marginTop:10}}>
                <ListItem >
                <ListItemText primary="Activar Recordatorio" />
                <Switch />
                </ListItem>
                <ListItem >
                <ListItemText primary="Notificar tareas finalizadas" />
                <Switch />
                </ListItem>
                </Box>
            </Container>
            </DashboardContent>
        </React.Fragment>
    );
};

export default Setting;