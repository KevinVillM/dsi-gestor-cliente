import React from 'react';
import Box from '@mui/material/Box';
import {IconButton} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';

function ListaProyectos({ proyectos, eliminarProyecto}) {
  
 
    
 
    
  return (

    <Box sx={{ bgcolor: '#e8eaf6', height: '100%' }} >
    <h1 className='Cproyectos'>Mis Proyectos</h1>
    <TableContainer id='MyProyects' component={Paper}>
        <Table id='MyProyect' sx={{ minWidth: 650 }} aria-label="MisProyectos">

            <TableHead>
                <TableRow>
                    <TableCell>Nombre del Proyecto</TableCell>
                    <TableCell align="right">Descripción</TableCell>
                    <TableCell align="right">Propietario</TableCell>
                    <TableCell align="right">Estado del proyecto</TableCell>
                    <TableCell align="right">Fecha de Inicio</TableCell>
                    <TableCell align="right">Colaboradores</TableCell>
                    <TableCell align="right">Fecha Final</TableCell>
                    <TableCell align="right"></TableCell>

                </TableRow>
            </TableHead>
            <TableBody id='BodyMyProyect'>
                {proyectos.map((proyecto) => (
                    <TableRow key={proyecto.uid}>
                        <TableCell component="th" scope="row">
                            {proyecto.nombre}
                        </TableCell>
                        <TableCell align="right">{proyecto.descripcion}</TableCell>
                        <TableCell align="right">{localStorage.getItem("nombreUsuario")}</TableCell>
                        <TableCell align="right">{proyecto.estado_Proyecto}</TableCell>
                        <TableCell align="right">{proyecto.create_date}</TableCell>
                        <TableCell align="right">{proyecto.colaboradores.map((colab)=> colab.nombre+",") }</TableCell>
                        <TableCell align="right">{proyecto.ending_date}</TableCell>
                        <TableCell align="right"> <IconButton
                            id='deleteMyProyect'
                            onClick={() => eliminarProyecto(proyecto.uid)}
                            color="inherit">
                            <DeleteIcon />

                        </IconButton>
                        </TableCell>

                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    <br />

</Box>
  );
}

export default ListaProyectos;
