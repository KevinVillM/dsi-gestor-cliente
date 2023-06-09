import react, {useEffect, useState} from 'react'
import Typography from "@mui/material/Typography";
import {Grid, Skeleton, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {Add, Edit} from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import {Link, useNavigate} from "react-router-dom";


function ListaMisProyectos(){

    let [listaProyectos,setListaProyectos] = useState()

    let navigate = useNavigate()
    //TO-DO implementar logica para borrar en la bd
    const deleteProject = (uid)=>{

        const newListProjects = listaProyectos.filter(proyecto => proyecto.uid !== uid)

        setListaProyectos(newListProjects)

    }

    useEffect(() =>{
        const header = new Headers
        header.set("x-token", sessionStorage.getItem("token"))
        fetch('http://localhost:8080/api/proyectos',{
            method:'get',
            headers:header
        }).then(rawResponse => rawResponse.json())
            .then(response => {setListaProyectos(response.proyectos)
            console.log(response.proyectos)})

    },[])

    return <>

        <div className={'container'}>

            <Grid container alignItems={'center'}  className={'mb-4'}>
                <Grid item xs={8}>
                    <Typography variant={'h3'}>Mis Proyectos.</Typography>
                </Grid >
                <Grid item xs={4} >
                    <Button
                        onClick={()=> navigate('/misproyectos/proyecto')}
                        variant={'contained'}
                        endIcon={<Add/>}>Nuevo proyecto</Button>
                </Grid>
            </Grid>



            {listaProyectos ?

                    <TableContainer className={'mb-4'} sx={{maxHeight:500}}>
                        <Table stickyHeader size={'small'}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nombre del proyecto.</TableCell>
                                    <TableCell>Descripción.</TableCell>
                                    <TableCell className={'sm'}>Estado.</TableCell>
                                    <TableCell align={'center'}>Acciones.</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    listaProyectos.map(proyecto => {

                                        return <TableRow key={proyecto.uid}>
                                            <TableCell>{proyecto.nombre}</TableCell>
                                            <TableCell>{proyecto.descripcion}</TableCell>
                                            <TableCell>{proyecto.estado_Proyecto}</TableCell>
                                            <TableCell align={'center'}>
                                               <Tooltip title={'Agregar tarea'}>
                                                   <IconButton color={'success'}>
                                                       <Add/>
                                                   </IconButton>
                                               </Tooltip>
                                                <Tooltip title={'Editar proyecto'}>
                                                    <IconButton color={'primary'} onClick={() => {
                                                        navigate(`/misproyectos/proyecto/${proyecto.uid}/editar`)
                                                    }}>
                                                        <Edit/>

                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title={'Borrar proyecto'}>
                                                    <IconButton color={'error'} onClick={() => {deleteProject(proyecto.uid)}}>
                                                        <DeleteIcon/>
                                                    </IconButton>
                                                </Tooltip>

                                            </TableCell>
                                        </TableRow>
                                    })

                                }
                            </TableBody>
                        </Table>
                    </TableContainer>


                :
                [1, 2, 3, 4, 5, 6, 7, 8, 9].map((valor) => {

                    return <h1 className={'mb-1'}><Skeleton/></h1>
                })
            }

        </div>
    </>;
}

export default ListaMisProyectos;