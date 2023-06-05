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

function ListaColaboraciones({ rows}) {

    const handleEliminarColaboraciones = () => {
        //metodo para eliminar colaboraciones de proyectos

    };
    
  return (
    <Box sx={{ bgcolor: '#e8eaf6', height: '100%' }} >
    <h1 className='Cproyectos'>Colaboraciones</h1>
    <TableContainer id='ColaboracionesProyect' component={Paper}>
        <Table id='TableColaboraciones' sx={{ minWidth: 650 }} aria-label="colaboraciones">

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
            <TableBody id='BodyColaboraciones'>
                {rows.map((row) => (
                    <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row.nombre}
                        </TableCell>
                        <TableCell align="right">{row.descripcion}</TableCell>
                        <TableCell align="right">{row.propietario}</TableCell>
                        <TableCell align="right">{row.estado_Proyecto}</TableCell>
                        <TableCell align="right">{row.create_date}</TableCell>
                        <TableCell align="right">{row.colaboradores.map((colaborador) => colaborador.nombre)}</TableCell>
                        <TableCell align="right">{row.ending_date}</TableCell>
                        <TableCell align="right">
                            <IconButton
                                id='deleteColaboraciones'
                                onClick={handleEliminarColaboraciones}
                                color="inherit">
                                <DeleteIcon></DeleteIcon>

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

export default ListaColaboraciones;
