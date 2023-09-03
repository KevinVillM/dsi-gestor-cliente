import react from 'react'
import {Card, CardActions, CardContent, CardHeader, Grid, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";


export default function PerfilCardBasic(info){

    return <>
            <Card>
                <CardHeader title={'Informacion personal.'} >
                </CardHeader>

                <CardContent>
                    <Grid container>
                        <Grid item sm={12} md={5}>
                           <img src={'https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg'} width={100} height={100}/>
                        </Grid>

                        <Grid item >
                            <Grid container sm={12} md={7}>
                                <Grid item xs={12}>
                                    <Typography variant={'h6'}>Nombre</Typography>
                                    <TextField></TextField>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant={'h6'}>Correo electronico</Typography>
                                    <TextField contentEditable={false}></TextField>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Stack alignItems={'flex-start'} spacing={2}>
                            <Typography variant={'h5'}>Seguridad.</Typography>
                            <Button>Cambiar contraseña.</Button>
                            <Button>Restablecer contraseña.</Button>
                        </Stack>
                    </Grid>
                </CardContent>

                <CardActions>
                    <Button>Editar perfil.</Button>
                </CardActions>
            </Card>
        </>

}