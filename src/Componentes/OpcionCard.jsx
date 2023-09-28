import React from 'react'
import {Card, CardActionArea, CardContent, Grid, Icon} from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ConstructionIcon from '@mui/icons-material/Construction';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Divider from '@mui/material/Divider';
import Slide from '@mui/material/Slide';
import { Pagination } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

function OpcionCard(props){

    return (<>
        <Card variant={"outlined"}>
            <CardActionArea onClick={props.handler} >
                <CardContent>
                    <Grid container spacing={1}>
                        <Grid item xs={12} textAlign={"center"} >
                            <Typography variant={"h5"}>{props.titulo}</Typography>
                        </Grid>
                    </Grid>
                    <Typography textAlign={"center"} >{props.desc}<AlarmIcon />1</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </>
    )
}

function CardTarea(props){

    return (<>
        <Card variant={"outlined"}>
            <CardActionArea onClick={props.handler} sx={{height: 200}}>
                <CardContent>
                    <Grid container spacing={1}>
                        <Grid item xs={12} textAlign={"center"} >
                            <Typography variant={"h5"}>{props.titulo}</Typography>
                        </Grid>
                    </Grid>
                    <Typography textAlign={"center"} >{props.desc}<AlarmIcon />1</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </>
    )
}

function OpcionCardProgreso(props){

    return (<>
        <Card variant={"outlined"}>
            <CardActionArea onClick={props.handler} >
                <CardContent>
                    <Typography textAlign={"center"} >{props.desc}{props.icono}1</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </>
    )
}

function OpcionCardDetalle(props){

    return (<>
        <Card variant={"outlined"}>
            <CardActionArea onClick={props.handler} sx={{height: 352}}>
                <CardContent>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography textAlign={"center"} variant={"h5"}>{props.titulo}</Typography>
                        </Grid>
                    </Grid>
                    <Typography textAlign={"center"}>{props.desc}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </>
    )
}

function OpcionCardRecursos(props){

    return (<>
    <Card variant={"outlined"}>
            <CardActionArea onClick={props.handler} sx={{height: 352}} >
            <Grid container spacing={1} justifyContent="center">
            <CardContent >
                    <Grid container spacing={1} justifyContent="center">
                            <Grid item sx={3}>
                                <Tooltip title="Usuario">
                                <Avatar/>   
                                </Tooltip>                                              
                            </Grid>
                            <Grid item sx={3}>                                
                                <IconButton aria-label="delete" color='warning'>
                                        <AlarmIcon />11
                                    </IconButton>                                
                            </Grid>
                            <Divider orientation="vertical" flexItem />
                            <Grid item sx={3}>                                
                                <IconButton aria-label="delete" color='warning'>
                                        <ConstructionIcon />11
                                    </IconButton>                                
                            </Grid>
                            <Divider orientation="vertical" flexItem />
                            <Grid item sx={3}> 
                                <IconButton aria-label="delete" color='warning'>
                                        <CheckBoxIcon />11
                                    </IconButton>
                            </Grid>
                    </Grid>
                    <Divider />
                    <Grid container spacing={1} justifyContent="center">
                            <Grid item sx={3}>
                                <Tooltip title="Usuario">
                                <Avatar/>  
                                </Tooltip>                                              
                            </Grid>
                            <Grid item sx={3}>                                
                                <IconButton aria-label="delete" color='warning'>
                                        <AlarmIcon />11
                                    </IconButton>                                
                            </Grid>
                            <Divider orientation="vertical" flexItem />
                            <Grid item sx={3}>                                
                                <IconButton aria-label="delete" color='warning'>
                                        <ConstructionIcon />11
                                    </IconButton>                                
                            </Grid>
                            <Divider orientation="vertical" flexItem />
                            <Grid item sx={3}> 
                                <IconButton aria-label="delete" color='warning'>
                                        <CheckBoxIcon />11
                                    </IconButton>
                            </Grid>
                    </Grid>
                    <Divider />
                    <Grid container spacing={1} justifyContent="center">
                            <Grid item sx={3}>
                                <Tooltip title="Usuario">
                                <Avatar/>  
                                </Tooltip>                                              
                            </Grid>
                            <Grid item sx={3}>                                
                                <IconButton aria-label="delete" color='warning'>
                                        <AlarmIcon />11
                                    </IconButton>                                
                            </Grid>
                            <Divider orientation="vertical" flexItem />
                            <Grid item sx={3}>                                
                                <IconButton aria-label="delete" color='warning'>
                                        <ConstructionIcon />11
                                    </IconButton>                                
                            </Grid>
                            <Divider orientation="vertical" flexItem />
                            <Grid item sx={3}> 
                                <IconButton aria-label="delete" color='warning'>
                                        <CheckBoxIcon />11
                                    </IconButton>
                            </Grid>
                    </Grid>
                    <Divider />
                    <br />
                    <Grid container spacing={1} justifyContent="center">
                    <Pagination count={3} />
                    </Grid>
                </CardContent>
            </Grid>

            </CardActionArea>
        </Card>
    </>
    )
}

function OpcionCardTareas(props){
    console.log("No entro")
    return (<>
        <Card variant={"outlined"} sx={{p: 0.3}}>
            <CardActionArea onClick={props.handler} >
                <CardContent>
                    <Grid container spacing={1}>
                        <Grid item xs={12} textAlign={"center"} >
                            <Typography variant={"h5"}>{props.titulo}</Typography>
                        </Grid>
                    </Grid>
                    <Typography>Fecha de inicio</Typography>
                    <Typography>{props.fechaInicio}</Typography>
                    <br/>
                    <Divider />
                    <Typography>Fecha de Finalizacion</Typography>
                    <Typography>{props.fechaFinal}</Typography>
                    <br/>
                    <br/>
                </CardContent>
            </CardActionArea>
        </Card>
    </>
    )
}

function OpcionCardAvance(props){
    return (<>
        <Card variant={"outlined"} sx={{mb: 2}}>
            <CardActionArea onClick={props.handler} >
                <CardContent>
                    <Grid container>
                        <Grid item xs={12} textAlign={"center"} >
                            <Typography variant={"h5"}>Progreso</Typography>
                        </Grid>
                    </Grid>
                    <div className="set-size charts-container">
                        <div className="pie-wrapper progress-30">
                            <span className="label">{props.porcentaje}<span className="smaller">%</span></span>
                            <div className="pie">
                            <div className="left-side half-circle"></div>
                            <div className="right-side half-circle"></div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    </>
    )
}





export {OpcionCard, OpcionCardTareas, OpcionCardAvance, OpcionCardDetalle, OpcionCardRecursos, OpcionCardProgreso, CardTarea};