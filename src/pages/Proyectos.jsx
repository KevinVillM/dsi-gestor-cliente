import React from 'react'
import ResponsiveAppBar from '../Componentes/ResponsiveAppBar'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { IconButton, TextField } from '@mui/material';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';










function Proyectos() {

    function createData(nombreproyecto, descripción, fechaInicio, fechaFinal, eliminar) {
        return { nombreproyecto, descripción, fechaInicio, fechaFinal,eliminar };
    }

    const rows = [//metodo para agregar contenido a las tablas 
        createData('Prueba', 'hola', 'inicio', 'final'),

    ];
    const handleEliminarMyProyect = () => {
        //metodo para eliminar proyectos
        
    };
    const handleEliminarColaboraciones = () => {
        //metodo para eliminar colaboraciones de proyectos
        
    };

   
    const  AgregarPoryecto = () => {
        //metodo para agregar proyecto
        
    };

    return (
        <>
            <ResponsiveAppBar />
            <h1 className='Cproyecto'>Proyectos </h1>
            <React.Fragment>
                <CssBaseline />

                <Container fixed>
                    <Box sx={{ bgcolor: '#e8eaf6', height: '100%', alignItems: 'center','& > :not(style)': { m: 3 } }} >
                        <h2 className='Cproyectos'>Crear proyecto</h2>

                        

                        <TextField
                            required
                            id="NombreProyecto"
                            label="Nombre del Proyecto"
                            margin='normal'

                        />
                        <br />

                        <TextField
                            id="DescripcionProyecto"
                            label="Descripción"
                            multiline
                            rows={4}
                            margin='normal'
                            
                        />

                        <br />

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                                components={['DatePicker']}
                            >
                                <DemoItem  label="Fecha de Inicio">
                                    <DatePicker id='Inicio' defaultValue={dayjs('2022-04-17')} />
                                </DemoItem>

                                <DemoItem label="Fecha Final">
                                    <DatePicker id='Final' defaultValue={dayjs('2022-04-17')} />
                                </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>

                        <br />

                        <TextField
                            required
                            id="BuscarColaborador"
                            label="Agregar Colaboradores"
                            margin='normal'
                        />
                        <Stack spacing={1} direction="row">

                            <Button  id='BtnAgregar' onClick={AgregarPoryecto} variant="contained">Agregar</Button>

                        </Stack>
                        <br />


                    </Box>
                    <br />

                    <Box sx={{ bgcolor: '#e8eaf6', height: '100%' }} >
                        <h1 className='Cproyectos'>Mis Proyectos</h1>
                        <TableContainer id='MyProyects' component={Paper}>
                            <Table id='MyProyect' sx={{ minWidth: 650 }} aria-label="MisProyectos">
                                
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Nombre del Proyecto</TableCell>
                                        <TableCell align="right">Descripción</TableCell>
                                        <TableCell align="right">Fecha de Inicio</TableCell>
                                        <TableCell align="right">Fecha Final</TableCell>
                                        <TableCell align="right"></TableCell>
                                        
                                    </TableRow>
                                </TableHead>
                                <TableBody id='BodyMyProyect'>
                                    {rows.map((row) => (
                                        <TableRow key={row.name}>
                                            <TableCell component="th" scope="row">
                                                {row.nombreproyecto}
                                            </TableCell>
                                            <TableCell align="right">{row.descripción}</TableCell>
                                            <TableCell align="right">{row.fechaInicio}</TableCell>
                                            <TableCell align="right">{row.fechaFinal}</TableCell>
                                            <TableCell align="right"> <IconButton
                                            id='deleteMyProyect'
                                             onClick={handleEliminarMyProyect}
                                             color="inherit">
                                                <DeleteIcon/>

                                            </IconButton>
                                            </TableCell>
                                          
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br />

                    </Box>
                    <br />
                    <Box sx={{ bgcolor: '#e8eaf6', height: '100%'}} >
                        <h1 className='Cproyectos'>Colaboraciones</h1>
                        <TableContainer id='ColaboracionesProyect' component={Paper}>
                            <Table id='TableColaboraciones' sx={{ minWidth: 650 }} aria-label="colaboraciones">
                              
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Nombre del Proyecto</TableCell>
                                        <TableCell align="right">Descripción</TableCell>
                                        <TableCell align="right">Fecha de Inicio</TableCell>
                                        <TableCell align="right">Fecha Final</TableCell>
                                        <TableCell align="right"></TableCell>
                                        
                                    </TableRow>
                                </TableHead>
                                <TableBody id='BodyColaboraciones'>
                                    {rows.map((row) => (
                                        <TableRow key={row.name}>
                                            <TableCell component="th" scope="row">
                                                {row.nombreproyecto}
                                            </TableCell>
                                            <TableCell align="right">{row.descripción}</TableCell>
                                            <TableCell align="right">{row.fechaInicio}</TableCell>
                                            <TableCell align="right">{row.fechaFinal}</TableCell>
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


                </Container>
            </React.Fragment>


        </>



    )
}

export default Proyectos;