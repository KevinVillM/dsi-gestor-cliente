import React from 'react'
import ResponsiveAppBar from "../Componentes/ResponsiveAppBar.jsx";
import {Card, CardContent, Grid} from "@mui/material";
import OpcionCard from "..//Componentes/OpcionCard.jsx"
import {useNavigate} from "react-router-dom";
import {Navigate} from "react-router";
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ConstructionIcon from '@mui/icons-material/Construction';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import AvatarGroup from '@mui/material/AvatarGroup';
import { CardActionArea } from '@mui/material';
import { CardActions } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { yellow } from '@mui/material/colors';

function Inicio(){

    let navigate = useNavigate()

    return (
        <>
        <Grid container spacing={1} justifyContent="center">
                <Grid item md={4} >
                <Card sx={{ maxWidth: 345, maxHeight: 500}}>
                    <CardActionArea>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item md={4}>
                                <CardContent>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 100, height: 100 }} />
                                </CardContent>
                            </Grid>
                            <Grid item md={8}>
                            <h5>Usuario</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, repudiandae quaerat eaque maiores.</p>
                            </Grid>
                        </Grid>
                        <CardContent>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar>
                                    <CheckCircleOutlineIcon color="success"/>
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Proyectos Finalizados" secondary="Jan 9, 2014" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar>
                                    <ConstructionIcon  />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Proyectos en proceso" secondary="Jan 7, 2014" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar>
                                    <EventBusyIcon  sx={{ color: yellow[500] }}/>
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Proyectos no iniciados" secondary="July 20, 2014" />
                            </ListItem>
                        </List>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Container maxWidth="sm" >
                        <AvatarGroup max={4}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                        </AvatarGroup>
                    </Container>
                    </CardActions>
                </Card>            
                </Grid>

                <Grid item md={8}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item md={6}>
 
                            <Card sm={{ maxWidth: 345, Height: 400}} >
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://res.cloudinary.com/dykkzngwd/image/upload/v1695006757/ImagenesGestor/administrador-de-tarea-vs-gestor-de-proyectos_oac1mk.jpg"
                                    alt="green iguana"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Mis proyectos
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    En esta interfaz se realiza la creación, modificación y eliminación de proyectos, así como también la asignación de las tareas a cada proyecto.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea >
                            </Card>
                        </Grid>
                        <Grid item md={6}>
                            <Card sm={{ maxWidth: 345, maxHeight: 350}} handler={()=>{navigate('/misproyectos')}}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://res.cloudinary.com/dykkzngwd/image/upload/v1695007523/ImagenesGestor/gestion_de_tareas_2_quqwlr.jpg"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Tareas
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    En esta interfaz se realiza la creación, modificación y eliminación de una tarea, además de realizar un filtrado de tareas respecto al avance de cada tarea.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea >
                            </Card>
                        </Grid>
                        <Grid item md={6}>
                        <Card sm={{ maxWidth: 345}} >
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://res.cloudinary.com/dykkzngwd/image/upload/v1695007522/ImagenesGestor/Administrador-de-tareas-gratis-header_c2gmj9.png"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Informes
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    En esta interfaz se generarán los informes necesarios sobre los proyectos, gráficos, porcentajes de avance de tareas, etc.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea >
                            </Card>
                        </Grid>
                        <Grid item md={6}>

                            <Card sm={{ maxWidth: 345}} >
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://res.cloudinary.com/dykkzngwd/image/upload/v1695008807/ImagenesGestor/61d5e1b6ae8db76cba5ac2fe_Coming-Soon-Page_arkuna.jpg"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Proximamente
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Podras tener acceso a nuevas funcionalidades pronto.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea >
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
        </Grid>
        </>
    )
}
export default Inicio;



