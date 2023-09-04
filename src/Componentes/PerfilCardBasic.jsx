import react from 'react'
import {Card, CardActions, CardContent, CardHeader, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";


export default function PerfilCardBasic({info,openDialogEliminarCuenta,openDialogActualizarInfo}){


    console.log(info)

    return <>
            <Card>
                <CardHeader title={'Informacion personal.'} >
                </CardHeader>

                <CardContent>
                    <Grid container rowSpacing={5}>
                        <Grid item container justifyContent={'center'} sm={12} md={6}>
                            <Grid item>
                                <img alt={'perfil'}/>
                            </Grid>
                        </Grid>

                        <Grid item sm={12} md={6}>
                            <Typography variant={'h5'}>Nombre:{info.nombre}</Typography>
                            <Typography variant={'h5'}>Correo electronico:{info.email}</Typography>
                            <Typography variant={'h5'}>Numero telefonico: </Typography>
                        </Grid>

                        <Grid item sm={12} md={12} xs={12}>
                                <Stack alignItems={'flex-start'} spacing={2}>
                                    <Typography variant={'h5'}>Seguridad.</Typography>
                                    <Button>Cambiar contraseña.</Button>
                                    <Button>Restablecer contraseña.</Button>
                                </Stack>
                        </Grid>
                    </Grid>
                </CardContent>

                <CardActions>
                    <Button>Editar perfil.</Button>
                    <Button
                        onClick={() => openDialogEliminarCuenta(true)}
                        color={'error'}>Eliminar cuenta.</Button>
                </CardActions>
            </Card>
        </>

}