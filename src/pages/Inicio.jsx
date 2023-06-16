import React from 'react'
import ResponsiveAppBar from "../Componentes/ResponsiveAppBar.jsx";
import {Card, CardContent, Grid, Paper, styled} from "@mui/material";
import OpcionCard from "..//Componentes/OpcionCard.jsx"
import Box from "@mui/material/Box";
import ConstructionIcon from '@mui/icons-material/Construction';
import {Navigate} from "react-router";
import {useNavigate} from "react-router-dom";

function Inicio(){

    let navigate = useNavigate()

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <OpcionCard titulo={"Mis proyectos"} desc={"En esta interfaz se realiza la creación, modificación y eliminación de proyectos, así como también la asignación de las tareas correspondientes a cada proyecto."} handler={()=>{
                       navigate('/misproyectos')
                    }}/>
                </Grid>
                <Grid item xs={6}>
                    <OpcionCard titulo={"Tareas"} desc={"En esta interfaz se realiza la creación, modificación y eliminación de una tarea, además de realizar un filtrado de tareas entre las que no han iniciado, las que están en proceso y las que ya han sido finalizadas."} handler={()=>{
                        navigate('/mistareas')
                    }}/>
                </Grid>
                <Grid item xs={6}>
                    <OpcionCard titulo={"Recursos"} desc={"En esta interfaz se realiza la creación, modificación y eliminación de un recurso de tipo material, además de asignar los recursos a una tarea en específico."}/>
                </Grid>
                <Grid item xs={6}>
                    <OpcionCard titulo={"Informes"} desc={"En esta interfaz se generarán los informes necesarios sobre los proyectos, gráficos, porcentajes de avance de tareas, etc."}/>
                </Grid>

            </Grid>

        </>
    )

}

export default Inicio;