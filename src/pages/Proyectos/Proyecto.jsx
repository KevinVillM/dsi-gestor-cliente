import react, {useEffect, useState} from 'react'
import {Autocomplete, Chip, Grid, Paper, styled, TextField} from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";



function Proyecto(){

    const ListItem = styled('li')(({ theme }) => ({
        margin: theme.spacing(0.5),
    }));

    const [modalOpened,setModalOpened] = useState(false)
    //ELIMINAR LUEGO
    const [usuarios, setUsuarios] = useState()
    const [options,setOptions] = useState()
    useEffect(()=>{
        const header = new Headers

        header.set("x-token", sessionStorage.getItem("token"))

       fetch('http://localhost:8080/api/usuarios',{
           method:'get',
           headers:header
       }).then(rawResponse => rawResponse.json()).then(response =>setUsuarios(response.usuarios))

    },[])

    const deleteCollaborator = () =>{

    }

    return <>
        <Container>
            <Typography variant={'h3'} className={'mb-4'}>Crear proyecto.</Typography>
            <Grid container alignItems={'center'} spacing={4} className={'mb-4'}>
                <Grid item xs={12} >
                    <TextField
                        required
                        label={'Nombre del proyecto'}
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        required
                        multiline
                        fullWidth
                        rows={6}
                        maxRows={6}
                        label={'Descripción'}/>
                </Grid>

                <Grid item >
                    <TextField
                        label={'Estado'}
                        required
                        fullWidth
                        defaultValue={'No iniciado'}
                        select>
                        <MenuItem key={'No iniciado'} value={'No iniciado'}>No iniciado</MenuItem>
                        <MenuItem key={'En proceso'} value={'En proceso'}>En proceso</MenuItem>
                        <MenuItem key ={'Finalizado'} value={3}>Finalizado</MenuItem>
                    </TextField>
                </Grid>

                <Grid item>
                    <DatePicker label={'Fecha de inicio'} disablePast onChange={(e)=> console.log(e.$d)} />
                </Grid>

                <Grid item>
                    <DatePicker label={'Fecha de finalizacion'} disabledPast></DatePicker>
                </Grid>


                <Grid item xs={6}>
                    { usuarios?
                    <Autocomplete
                        getOptionLabel={(option) => option.nombre}
                        options={usuarios}
                        includeInputInList
                        isOptionEqualToValue={(option,value) => option.uid === value.uid }
                        autoComplete={true}
                        filterOptions={(x,y) => {
                            const filteredOptions = x.filter(option => option.nombre.search(y.inputValue) != -1 )
                            return filteredOptions
                            }
                        }
                        onChange={(e,value,r,d) =>{
                            
                        }}
                        renderInput={(params) => <TextField {...params} label={'Añadir colaboradores'} />}/>
                    :<></>
                    }
                </Grid>


                <Grid item xs={12}>
                    <Paper  sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        listStyle: 'none',
                        p: 0.5,
                        m: 0,
                    }} component={'ul'}
                    >
                        { usuarios ?
                            usuarios.map(valor => {
                                return <ListItem>
                                    <Chip label={valor.nombre} onDelete={deleteCollaborator}></Chip>
                                </ListItem>
                            })
                            :<TextField
                                disabled
                                label={'Sin colaboradores'}
                                fullWidth />
                        }
                    </Paper>
                </Grid>



            </Grid>

            <Grid container spacing={2} alignItems={'center'} justifyContent={'center'}>
                <Grid item >
                    <Button variant={'contained'} color={'primary'}>Crear</Button>
                </Grid>
                <Grid item>
                    <Button variant={'contained'} color={'error'}>Cancelar</Button>
                </Grid>
            </Grid>

        </Container>

    </>
}

export default Proyecto;