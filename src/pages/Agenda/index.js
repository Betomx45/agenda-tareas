import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { onValue, ref, remove } from "@firebase/database";
import database from "../../Config/firebaseConfig";
import { DataGrid } from "@mui/x-data-grid";
import DashboardContent from '../../components/layout';

const deleteWork = (id) => {
    remove(ref(database, `/tareas/${id}`))
        .then(() => {
            alert("Tarea eliminada");
        });
}

const columns = [
    {
        field: 'fullName',
        headerName: 'Tarea',
        sortable: false,
        width: 250,
        valueGetter: (params) =>
            `${params.getValue(params.id, 'work') || ''} ${params.getValue(params.id, 'lastname') || ''
            }`,
    },
    {
        field: 'fInicio',
        headerName: 'Fecha de Inicio',
        width: 220,
    },
    {
        field: 'fFinal',
        headerName: 'Fecha Final',
        width: 220,
    },
    {
        field: "id", headerName: "Opciones", with: 150,
        renderCell: (data) => (
            <IconButton onClick={() => { deleteWork(data.row.id); }} color="primary" aria-label="Eliminar" component="span">
                <DeleteIcon />
            </IconButton>
        )
    }
];
const Schedule = () => {
    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        let isMounted = true;

        onValue(
            ref(database, "tareas/"),
            (snapshot) => {
                const tareasList = [];

                snapshot.forEach(item => {
                    const tareasItem = {
                        id: item.key,
                        ...item.val()
                    };

                    tareasList.push(tareasItem);
                });

                setTareas(tareasList);
            },
            (error) => {
                console.log(error);
            }
        );

        return () => {
            isMounted = false;
        };

    }, []);
    return (
        <React.Fragment>
            <DashboardContent>
        <Paper
            sx={{
                p: 2,
            }}
        >
            <Grid container spacing={3}>
                <Grid item xs={10}>
                    <h3 sx={{ m: 0, }}> Tareas registradas</h3>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="outlined" LinkComponent={Link} to="/agendar" startIcon={<AddCircleOutlineOutlinedIcon />}>
                        Agregar
                    </Button>
                </Grid>
                <Grid item xs={12}>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={tareas}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                    />
                    </div>
                </Grid>
            </Grid>
        </Paper>
        </DashboardContent>
        </React.Fragment>
    );
};
export default Schedule;