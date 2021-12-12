import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import { ref, push } from "firebase/database";
import { set } from 'firebase/database';
import { useNavigate } from "react-router-dom";
import database from '../../Config/firebaseConfig';
import DashboardContent from '../../components/layout';



const ScheduleForm = () => {
  ///
  const navigate = useNavigate();
  const [tareas, setTareas] = useState ({
    work: '',
    fInicio:'',
    fFinal:'',
    select:'',
});

const handleChange = (e) => {
    setTareas({
        ...tareas,
        [e.target.name]: e.target.value,
    });
};

const handleSubmit = (e) => {
  if (e && e.preventDefault) { e.preventDefault(); }

    push(ref(database, "/tareas"), tareas)
    .then(() => {
        //redireccionar a /clientes
        navigate("/inicio");
    })
    .catch((error) => {
        console.log(error);
    });
};
  return (
    <React.Fragment>
      <DashboardContent>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography sx={{ textAlign: 'center', fontSize: 30, fontFamily: 'Arial' }}>Agendar</Typography>
        <Box sx={{ marginTop: 10 }}>
          <Stack component="form" spacing={3} onSubmit={handleSubmit}>
            <TextField 
            fullWidth 
            name='work'
            label="Nombre de la tarea:" 
            id="fullWidth" 
            value={tareas.work}
            onChange={handleChange}
            />
            <TextField
              id="date"
              name='fInicio'
              label="Fecha de inicio:"
              type="date"
              sx={{ width: 550 }}
              InputLabelProps={{
                shrink: true,
              }}
              value={tareas.fInicio}
              onChange={handleChange}
            />
            <TextField
              id="date"
              name='fFinal'
              label="Finalizar:"
              type="date"
              sx={{ width: 550 }}
              InputLabelProps={{
                shrink: true,
              }}
              value={tareas.fFinal}
              onChange={handleChange}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Seleccionar</InputLabel>
              <Select
                fullWidth
                name='select'
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={tareas.select}
                label="Seleccionar"
                onChange={handleChange}
              >
                <MenuItem value={'Siempre'}>Siempre</MenuItem>
                <MenuItem value={'Nunca'}>Nunca</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Box sx={{ marginTop: 5, display: 'flex', justifyContent: 'space-between' }}>
            <Button
              type="submit"
              variant="contained"
              color="inherit"
              startIcon={<CancelIcon />}
            >
              Cancelar
            </Button>
            <Button 
              type="submit"
              color="secondary"
              startIcon={<SaveIcon />}
              variant="contained"
              onClick={()=>handleSubmit()}
              >
                Guardar
            </Button>
          </Box>
        </Box>
      </Container>
      </DashboardContent>
    </React.Fragment>
  );
};

export default ScheduleForm;