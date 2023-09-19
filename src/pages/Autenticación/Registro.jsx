import react, {useState} from 'react'
import Container from "@mui/material/Container";
import {Card, CardContent, CardHeader, Grid, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


export default function Registro(){

    let [nombre,setNombre] = useState('')
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    let [confirmPassword,setConfirmPassword] = useState('')

    let [errorNombre,setErrorNombre] = useState(false)
    let [errorEmail,setErrorEmail] = useState(false)
    let [errorPassword,setErrorPassword] = useState(false)
    let [errorConfirmPassword,setErrorConfirmPassword] = useState(false)


    let handleOnNombreChange = (e) => {
    let valor = e.target.value;
    setNombre(valor)
    let errorNombre = valor.length > 0 && valor.length < 6;
    setErrorNombre(errorNombre)
    }

    let handleOnEmailChange = (e) => {setEmail(e.target.value)}


    let handleOnPasswordChange = (e) =>{
        let valor = e.target.value
        setPassword(valor)
        setErrorPassword(valor.length > 0 && valor.length < 6)

    }

    let handleOnConfirmPasswordChange = (e) =>{
        let valor = e.target.value
        setConfirmPassword(valor)
        //si contraseñas don't match
        let passwordsMatch = valor === password
        setErrorConfirmPassword(!passwordsMatch)
    }


    let crearCuenta = () =>{

        
    }

    return <>

    <Container >
        <Card sx={{'margin-top':'10%'}} variant={'outlined'}>

                <Typography variant={'h4'} align='center'>
                    Registrate
                </Typography>

            <CardContent>
                <Grid container
                      spacing={4}
                      justifyContent={'center'}
                      alignContent={'center'}
                      direction={'column'}>


                    <Grid item md={12} >
                        <TextField label={'Nombre completo'}
                                   value={nombre}
                                   error={errorNombre}
                                   onChange={handleOnNombreChange}
                                   helperText={errorNombre ? 'El nombre debe tener mas de 6 caracteres': ''}
                                   fullWidth/>
                    </Grid>

                    <Grid item md={12} >
                        <TextField label={'Correo electronico'}
                                   type={'email'}
                                   onChange={handleOnEmailChange}
                                   value={email}

                                   fullWidth/>
                    </Grid>

                    <Grid item md={12}>
                        <TextField label={'Contraseña'}
                                   type={'password'}
                                   onChange={handleOnPasswordChange}
                                   error={errorPassword}
                                   helperText={errorPassword ? 'La contraseña debe tener más de 6 caracteres.':''}
                                   value={password}
                                   fullWidth/>
                    </Grid>

                    <Grid item md={12}>
                        <TextField label={'Confirmar contraseña'}
                                   type={'password'}
                                   onChange={handleOnConfirmPasswordChange}
                                   helperText={errorConfirmPassword ? 'Las contraseñas no coinciden': ''}
                                   error={errorConfirmPassword}
                                   value={confirmPassword}
                                   fullWidth/>
                    </Grid>

                    <Grid item>
                        <Grid container justifyContent={'center'} spacing={2}>

                            <Grid item >
                                <Button color={'success'} variant={'contained'}>Registrarse.</Button>
                            </Grid>

                            <Grid item>
                                <Button variant={'contained'}>Iniciar sesion</Button>
                            </Grid>

                        </Grid>

                    </Grid>

                </Grid>
            </CardContent>
        </Card>

    </Container>
    </>
}