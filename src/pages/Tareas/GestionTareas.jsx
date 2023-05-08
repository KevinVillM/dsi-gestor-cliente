import React, {useState} from "react";
import {CssBaseline, TextField, MenuItem, Box, Container, Stack, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Paper, Icon} from "@mui/material";
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DeleteIcon from '@mui/icons-material/Delete'

import ResponsiveAppBar from "../../Componentes/ResponsiveAppBar";


function GestionTareas(){
    function createData(nombreTarea, descripcionTarea, proyecto, fechaInicio, fechaFinal, eliminar){
        return { nombreTarea, descripcionTarea, proyecto, fechaInicio, fechaFinal, eliminar}
    }

    const rows =[
        createData("Prueba", "Descripcion","Proyecto", "Inicio", "Final"),
    ];

    const AgregarTarea = ()=>{

    }

    const handleEliminarTarea = ()=>{

    }

    const [estado, setEstado]=useState("");
    const [proyecto, setProyecto]=useState("");


    return(
        <>

            <h1 className={"text-center"}>Gestionar Tareas</h1>
            <React.Fragment>
                <CssBaseline/>
                <Container fixed>
                    <Box sx={{ bgcolor: '#e8eaf6', height: '100%', alignItems: 'center','& > :not(style)': { m : 1 } }} >
                        <h2 className={"px-4 py-2"}>Agregar Tarea</h2>
                        <TextField
                            required
                            id="NombreTarea"
                            label="Nombre de la Tarea"
                        />
                        <br/>
                        <TextField
                            sx={{
                                width: { sm: 300, md: 700 },
                                "& .MuiInputBase-root": {
                                    height: 100
                                }
                            }}
                            id="DescripcionTarea"
                            label="Descripcion de la Tarea"
                            multiline
                            rows={4}
                            margin="normal"
                        />
                        <br/>
                        <TextField
                            style={{width:"20%"}}
                            variant="outlined"
                            value={estado}
                            onChange={(e)=> setEstado(e.target.value)}
                            select
                            label="Estado"
                        >
                            <MenuItem key={1} value="Hacer">
                                Por hacer
                            </MenuItem>
                            <MenuItem key={2} value="Haciendo">
                                Haciendo
                            </MenuItem>
                            <MenuItem key={3} value="Hecho">
                                Hecho
                            </MenuItem>
                        </TextField>
                        <TextField
                            style={{width:"20%"}}
                            variant="outlined"
                            value={proyecto}
                            onChange={(e)=> setProyecto(e.target.value)}
                            select
                            label="Proyecto"
                        >
                            <MenuItem key={1} value="Proyecto1">
                                Proyecto 1
                            </MenuItem>
                            <MenuItem key={2} value="Proyecto2">
                                Proyecto 2
                            </MenuItem>
                            <MenuItem key={3} value="Proyecto 3">
                                Proyecto 3
                            </MenuItem>
                        </TextField>
                        <br/>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                                components={['DatePicker']}
                            >
                                <DemoItem  label="Fecha de Inicio">
                                    <DatePicker id='Inicio' defaultValue={dayjs('2023-05-03')} />
                                </DemoItem>

                                <DemoItem label="Fecha Final">
                                    <DatePicker id='Final' defaultValue={dayjs('2023-05-03')} />
                                </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                        <br/>
                        <Stack direction="row" style={{justifyContent: 'center'}}>
                            <Button id="btnAgregarTarea" onClick={AgregarTarea} variant="contained">Agregar Tarea</Button>
                        </Stack>
                        <br/>
                    </Box>
                    <br/>
                    <Box sx={{ bgcolor: '#e8eaf6', height: '100%', alignItems: 'center','& > :not(style)': { m : 1} }} >
                        <h2 className={"px-4 py-2 text-center"}>Mis Tareas</h2>
                        <h4 className={"px-4 py-2"}>Por Hacer</h4>
                        <TableContainer id="ContHacer" component={Paper}>
                            <Table id="TableHacer" sx={{ minWidth: 650 }} >
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Nombre</TableCell>
                                        <TableCell align="left">Descripcion</TableCell>
                                        <TableCell align="right">Proyecto</TableCell>
                                        <TableCell align="right">Fecha Inicio</TableCell>
                                        <TableCell align="right">Fecha Final</TableCell>
                                        <TableCell align="right"></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody id="BodyHacer">
                                    {rows.map((row) =>(
                                        <TableRow key={row.nombreTarea}>
                                            <TableCell component="th" scope="row">
                                                {row.nombreTarea}
                                            </TableCell>
                                            <TableCell align="left">{row.descripcionTarea}</TableCell>
                                            <TableCell align="right">{row.proyecto}</TableCell>
                                            <TableCell align="right">{row.fechaInicio}</TableCell>
                                            <TableCell align="right">{row.fechaFinal}</TableCell>
                                            <TableCell align="right">
                                                <IconButton
                                                    id="deleteTarea"
                                                    onClick={handleEliminarTarea}
                                                    color="inherit">
                                                    <DeleteIcon></DeleteIcon>
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>

                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                        <h4 className={"px-4 py-2"}>Haciendo</h4>
                        <TableContainer id="ContHacer" component={Paper}>
                            <Table id="TableHacer" sx={{ minWidth: 650 }} >
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Nombre</TableCell>
                                        <TableCell align="left">Descripcion</TableCell>
                                        <TableCell align="right">Proyecto</TableCell>
                                        <TableCell align="right">Fecha Inicio</TableCell>
                                        <TableCell align="right">Fecha Final</TableCell>
                                        <TableCell align="right"></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody id="BodyHacer">
                                    {rows.map((row) =>(
                                        <TableRow key={row.nombreTarea}>
                                            <TableCell component="th" scope="row">
                                                {row.nombreTarea}
                                            </TableCell>
                                            <TableCell align="left">{row.descripcionTarea}</TableCell>
                                            <TableCell align="right">{row.proyecto}</TableCell>
                                            <TableCell align="right">{row.fechaInicio}</TableCell>
                                            <TableCell align="right">{row.fechaFinal}</TableCell>
                                            <TableCell align="right">
                                                <IconButton
                                                    id="deleteTarea"
                                                    onClick={handleEliminarTarea}
                                                    color="inherit">
                                                    <DeleteIcon></DeleteIcon>
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>

                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                        <h4 className={"px-4 py-2"}>Hecho</h4>
                        <TableContainer id="ContHacer" component={Paper}>
                            <Table id="TableHacer" sx={{ minWidth: 650 }} >
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Nombre</TableCell>
                                        <TableCell align="left">Descripcion</TableCell>
                                        <TableCell align="right">Proyecto</TableCell>
                                        <TableCell align="right">Fecha Inicio</TableCell>
                                        <TableCell align="right">Fecha Final</TableCell>
                                        <TableCell align="right"></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody id="BodyHacer">
                                    {rows.map((row) =>(
                                        <TableRow key={row.nombreTarea}>
                                            <TableCell component="th" scope="row">
                                                {row.nombreTarea}
                                            </TableCell>
                                            <TableCell align="left">{row.descripcionTarea}</TableCell>
                                            <TableCell align="right">{row.proyecto}</TableCell>
                                            <TableCell align="right">{row.fechaInicio}</TableCell>
                                            <TableCell align="right">{row.fechaFinal}</TableCell>
                                            <TableCell align="right">
                                                <IconButton
                                                    id="deleteTarea"
                                                    onClick={handleEliminarTarea}
                                                    color="inherit">
                                                    <DeleteIcon></DeleteIcon>
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>

                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                    </Box>
                </Container>
            </React.Fragment>
        </>
    )

}
export default GestionTareas;