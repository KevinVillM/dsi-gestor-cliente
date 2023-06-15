import {useEffect, useState} from 'react'
import {Autocomplete, Chip, CircularProgress, Grid, Paper, styled, TextField} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useParams} from "react-router-dom";
import dayjs from "dayjs";
import tareaReducer from "../../js/tareaReducer"
import { useNavigate } from 'react-router-dom';


function EditarTarea(){

    let initialState={}
    let navigate = useNavigate()
    const {id} = useParams()
    const [enviado, setEnviado] = useState(false);

    const ListItem = styled('li')(({ theme }) => ({
        margin: theme.spacing(0.5),
    }));

    const [newTarea,setNewTarea] = useState()
    const [tarea,setTarea] = useState()

    const [usuarios, setUsuarios] = useState()

    const [proyectos, setListaProyectos] = useState()


    useEffect(()=>{

        const header = new Headers

        header.set("x-token", sessionStorage.getItem("token"))

        if(id){
            fetch(`http://localhost:8080/api/tareas/${id}`,{
                headers:header,
                method:'get'
            })
                .then(raw => raw.json())
                .then(respuesta => {
                    const rawTarea = respuesta
                    const tarea = {uid:rawTarea.id,
                    ...rawTarea,
                    asignados: []}
                    console.log("aqui")
                    console.log(tarea)

                    setTarea(tarea)
                })
        }
        fetch('http://localhost:8080/api/usuarios',{
           method:'get',
           headers:header
       }).then(rawResponse => rawResponse.json()).then(response =>{setUsuarios(response.usuarios)
       console.log(response.usuarios)})

       fetch('http://localhost:8080/api/proyectos',{
            method:'get',
            headers:header
        }).then(rawResponse => rawResponse.json())
            .then(response => {setListaProyectos(response.proyectos)
            console.log(response.proyectos)})
        
            const enviarDatos = async () => {
                try {
                  const response = await fetch('https://tu-api.com/endpoint', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ datos: 'valor' })
                  });
                  
                  if (response.ok) {
                    const data = await response.json();
                    console.log(data); // Opcional: muestra la respuesta en la consola
                  } else {
                    throw new Error('Error en la solicitud');
                  }
                } catch (error) {
                  console.error(error);
                }
              };
            
              if (enviado) {
                enviarDatos();
              }    
    },[]);

    const deleteAsignados = () =>{

    }

    const handleTareaNameChange=(e)=>{
        const valor = e.target.value
        const changeInTarea = tareaReducer(tarea,{typo:"SET_NOMBRE_TAREA", payload:valor})
        setTarea(changeInTarea)
    }

    const handleTareaDescrChange=(e)=>{
        const valor = e.target.value
        const changeInTarea = tareaReducer(tarea,{typo:"SET_DESCRIPCION", payload:valor})
        setTarea(changeInTarea)
    }

    const handleTareaEstadoChange=(e)=>{
        const valor = e.target.value
        const changeInTarea = tareaReducer(tarea,{typo:"SET_ESTADO_TAREA", payload:valor})
        setTarea(changeInTarea)
        console.log(tarea)
    }

    const handleStartDateChange=(e)=>{
        const valor = e.target.value
        const changeInTarea = tareaReducer(tarea,{typo:"SET_FECHA_CREACION", payload:valor})
        setTarea(changeInTarea)
    }

    const handleEndDateChange=(e)=>{
        const valor = e.target.value
        const changeInTarea = tareaReducer(tarea,{typo:"SET_FECHA_FINALIZACION", payload:valor})
        setTarea(changeInTarea)
    }

    const handleProyectoChange=(e)=>{
        const valor = e.target.value
        const changeInTarea = tareaReducer(tarea,{typo:"SET_PROYECTO", payload:valor})
        setTarea(changeInTarea)
    }

    const saveTarea = () =>{

        const headers = new Headers
        headers.append("x-token", sessionStorage.getItem("token"));
        headers.append("Content-Type", "application/json");

            fetch('http://localhost:8080/api/tareas',{
            method:'post',
            headers:headers,
            body:newTarea
            })        
    }

    let loading = (id && !tarea)

    return <>

        {
            loading ?

                <>
                    <div>
                        <div className={'d-flex justify-content-center'}>
                            <Typography variant={'h3'}>Cargando...</Typography>
                        </div>

                    </div>
                    <div>
                        <div className={'d-flex justify-content-center'}>
                            <CircularProgress />
                        </div>
                    </div>
                </>

            : <Container>
                    <Typography variant={'h3'} className={'mb-4'}>Tarea</Typography>
                    <Grid container alignItems={'center'} spacing={4} className={'mb-4'}>
                        <Grid item xs={12} >

                            <TextField
                                required
                                value={tarea ? tarea.nombre:''}
                                hiddenLabel={tarea?true:false}
                                label={'Nombre de la tarea'}
                                onChange={handleTareaNameChange}
                            />

                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                required
                                multiline
                                value={tarea ? tarea.descripcion:''}
                                fullWidth
                                rows={6}
                                maxRows={6}
                                onChange={handleTareaDescrChange}
                                label={'Descripción'}/>
                        </Grid>

                        <Grid item >
                            <TextField
                                label={'Estado'}
                                required
                                fullWidth
                                defaultValue={'No iniciado'}
                                value={tarea ? tarea.estado_Tarea:'No iniciado'}
                                onChange={handleTareaEstadoChange}
                                select>
                                <MenuItem key={'No iniciado'} value={'No iniciado'}>No iniciado</MenuItem>
                                <MenuItem key={'En proceso'} value={'En proceso'}>En proceso</MenuItem>
                                <MenuItem key ={'Finalizado'} value={'Finalizado'}>Finalizado</MenuItem>
                            </TextField>
                        </Grid>

                        <Grid item>
                            <DatePicker
                                value={tarea? dayjs(tarea.create_date):null}
                                label={'Fecha de inicio'}
                                disablePast
                                onChange={(e)=> console.log(e.$d)} />
                        </Grid>

                        <Grid item>
                            <DatePicker
                                label={'Fecha de finalizacion'}
                                disablePast
                                onChange={handleEndDateChange}
                                onClick={handleStartDateChange}
                                value={tarea ? dayjs(tarea.ending_date):null}
                                 />
                        </Grid>

                        <Grid item xs={6}>
                           
                           <Autocomplete
                               getOptionLabel={(proyecto) => proyecto.nombre}
                               options={proyectos ? proyectos : []}
                               includeInputInList
                               isOptionEqualToValue={(proyecto,value) => proyecto.uid === proyecto.uid }
                               autoComplete={true}
                               noOptionsText={'Sin resultados'}
                               filterOptions={(proyectos,seleccion) => {
                                   const filteredOptions = proyectos.filter(proyecto => proyecto.nombre.search(seleccion.inputValue) !== -1 )
                                   return filteredOptions
                               }
                               }
                               onChange={(e,v,r,d)=>{
                                    console.log(e.target)
                                    console.log(v)
                                    console.log(r)
                                    console.log(d)
                               }}
                               renderInput={(params) => <TextField {...params} label={'Proyecto'} />}/>
                       </Grid>

                        <Grid item xs={6}>
                           
                            <Autocomplete
                                getOptionLabel={(option) => option.nombre}
                                options={usuarios ? usuarios : []}
                                includeInputInList
                                isOptionEqualToValue={(option,value) => option.uid === value.uid }
                                autoComplete={true}
                                noOptionsText={'Sin resultados'}
                                filterOptions={(opciones,seleccion) => {
                                    const filteredOptions = opciones.filter(option => option.nombre.search(seleccion.inputValue) !== -1 )
                                    return filteredOptions
                                }
                                }
                                onChange={(e,v,r,d)=>{
                                    console.log(e.target)
                                    console.log(v)
                                    console.log(r)
                                    console.log(d)
                                }}
                                renderInput={(params) => <TextField {...params} label={'Asignar tarea'} />}/>
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
                                            <Chip label={valor.nombre} onDelete={deleteAsignados}></Chip>
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
                                <Button
                                variant={'contained'}
                                onClick={()=>setEnviado(true)}
                                color={'primary'}>Crear</Button>                        
                        </Grid>
                        <Grid item>
                            <Button variant={'contained'} color={'error'}
                            onClick={()=> navigate('/mistareas')}>Cancelar</Button>
                        </Grid>
                    </Grid>

                </Container>
        }



    </>

}

export default EditarTarea;