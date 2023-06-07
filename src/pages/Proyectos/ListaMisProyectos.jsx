import react, {useEffect, useState} from 'react'
import Typography from "@mui/material/Typography";
import {Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {Edit} from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";


function ListaMisProyectos(){

    let [listaProyectos,setListaProyectos] = useState()

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
            .then(response => setListaProyectos(response.proyectos))

    },[])

    return <>

        <div className={'container center-text'}>

            <Typography className={'mb-4'}
                        variant={'h3'}>Mis Proyectos.</Typography>
            {listaProyectos ?

                    <TableContainer clasName={'mb-4'} sx={{maxHeight:500}}>
                        <Table stickyHeader >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nombre del proyecto.</TableCell>
                                    <TableCell>Descripción.</TableCell>
                                    <TableCell className={'sm'}>Estado.</TableCell>
                                    <TableCell>Acciones.</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    listaProyectos.map(proyecto => {

                                        return <TableRow key={proyecto.uid}>
                                            <TableCell>{proyecto.nombre}</TableCell>
                                            <TableCell>{proyecto.descripcion}</TableCell>
                                            <TableCell>{proyecto.estado_Proyecto}</TableCell>
                                            <TableCell>
                                                <Tooltip title={'Borrar proyecto'}>
                                                    <IconButton color={'error'} onClick={() => {deleteProject(proyecto.uid)}}>
                                                        <DeleteIcon/>
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title={'Editar o ver detalles del proyecto'}>
                                                    <IconButton color={'success'}>
                                                        <Edit/>
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