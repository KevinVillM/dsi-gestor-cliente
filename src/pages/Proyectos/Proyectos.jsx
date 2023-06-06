import React, { useState,useEffect } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { InputLabel, List, ListItemText, TextField} from '@mui/material';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ListaProyectos from './ListaProyectos';
import Colaboraciones from './Colaboraciones';




function Proyectos() {

    const [proyectos,setProyectos] = useState([])
    const [colaboradores,setColaboradores] = useState([])
    const [colaboradorSeleccionado,setColaboradorSeleccionado] = useState("")
   
    const [estadoProyecto, setestadoProyecto] = useState("Seleccionar Estado");
    const cambioEstado =(e) =>{
        setestadoProyecto(e.target.value)
    };

   const [dateInicio,setdateInicio] = useState("");
   const dateIn =(e) =>{
    setdateInicio(e.format().slice(0,10)+"T01:29:29.643Z")

   };

   const [dateFinal, setdateFinal]= useState("");
   const dateFin=(e) =>{
    setdateFinal(e.format().slice(0,10)+"T01:29:29.643Z")

   };



   const [nombreP,setnombreP] = useState("");
   const nombreProyecto =(e) =>{
      setnombreP(e.target.value)

   };

   const [descripcionP,setdescripcionP] = useState("");
   const descripcionProyecto =(e) =>{
      setdescripcionP(e.target.value)

   };
   const[usuarios,setusuarios] = useState([]);


    const rows = [//metodo para agregar contenido a las tablas 
       

    ];
  
  

    const añadirColaboradores = (e) => {
        setColaboradorSeleccionado(e.target.value)
        colaboradores.push(e.target.value)
        setColaboradores([...new Set(colaboradores)])
    }

    const AgregarPoryecto = () => {
        console.log(CrearProyecto());
        window.location.reload();
    };

   // const usuarios = ObtenerUsuarios();
   // console.log(usuarios);
  
    //obtenerYMostrarUsuarios();

    
 useEffect(()=>{
     obtenerUsuarios().then(respuesta => {
         const usuariosFiltrados = respuesta.usuarios.filter(user => !(user.uid === localStorage.getItem("uid")))
         setusuarios(usuariosFiltrados)
     })
 },[])

 useEffect(()=>{
    obtenerProyectos().then(respuesta => {
        const proyectos = respuesta.proyectos
        const proyectosPersonales = proyectos.filter( (proyecto) => proyecto.propietario === localStorage.getItem("uid") )
        console.log(respuesta.proyectos)
        setProyectos(proyectosPersonales)
    })
},[])

  
  

    const CrearProyecto = async() => {
        //metodo para crear proyecto
        var myHeaders = new Headers();
    myHeaders.append("x-token", sessionStorage.getItem("token"));
    myHeaders.append("Content-Type", "application/json");
    
    //Obtener los datos del formulario
    var raw = JSON.stringify({
        "nombre": nombreP,
        "descripcion": descripcionP,
        "propietario": localStorage.getItem("uid"),
        "estado_Proyecto":estadoProyecto,
        "create_date": dateInicio,
        "ending_date": dateFinal ,
        "colaboradores": [
          "64500a36140b2e6f85fd87d0",
          "644ffa6c27d474ca5aa764d5"
        ]
    });
    
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    const proyecto = fetch("http://localhost:8080/api/proyectos", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    
      return proyecto;
    }

    const eliminarProyecto = (uid) => {
        fetch(`http://localhost:8080/api/proyectos/${uid}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'x-token': sessionStorage.getItem('token'),
          },
        })
          .then((response) => {
           let listaMysProyectos =  proyectos.filter(proyecto => proyecto.uid != uid);
           setProyectos(listaMysProyectos);

             return response.json()
        })
          .then((data) => {
            if (data.proyecto){

            }
          
          })
          .catch((error) => {
            console.log('Error al eliminar el proyecto:', error);
          });
      };
      

    return (
        <>

            <h1 className='Cproyecto'>Proyectos </h1>
            <React.Fragment>
                <CssBaseline />

                <Container fixed>
                    <Box sx={{ bgcolor: '#e8eaf6', height: '100%', alignItems: 'center', '& > :not(style)': { m: 3 } }} >
                        <h2 className='Cproyectos'>Crear proyecto</h2>



                        <TextField
                            required
                            id="NombreProyecto"
                            label="Nombre del Proyecto"
                            margin='normal'
                            onChange={nombreProyecto}

                        />
                        <br />

                        <TextField
                            id="DescripcionProyecto"
                            label="Descripción"
                            multiline
                            rows={4}
                            margin='normal'
                            onChange={descripcionProyecto}

                        />
                        <br />

                        <InputLabel id="demo-simple-select-label">Estado del proyecto</InputLabel>
                            <Select
                                labelId="Estado"
                                id="estado"
                                value={estadoProyecto}
                                label="Estado"
                                onChange={cambioEstado}
                            >
                                <MenuItem value={"En proceso"}>En proceso</MenuItem>
                                <MenuItem value={"Finalizado"}>Finalizado</MenuItem>
                                
                            </Select>
                       
                        <br />

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                                components={['DatePicker']}
                            >
                                <DemoItem label="Fecha de Inicio">
                                    <DatePicker onChange={dateIn} id='Inicio' defaultValue={dayjs('2022-04-17')} />
                                </DemoItem>

                                <DemoItem label="Fecha Final">
                                    <DatePicker onChange={dateFin}  id='Final' defaultValue={dayjs('2022-04-17')} />
                                </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>

                        <br />

                        <InputLabel id="demo-simple-select-label">Seleccionar colaboradores</InputLabel>
                        <Select
                            label={"Colaboradores"}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={añadirColaboradores}
                            value={colaboradorSeleccionado}>
                            { usuarios ?
                                usuarios.map((user) =>{
                                    return <MenuItem value={user}>{user.nombre}</MenuItem>
                                })
                                : ""
                            }
                        </Select>

                        <InputLabel>Listado de colaboradores</InputLabel>
                        <List>
                            {
                                colaboradores ?
                                    colaboradores.map((colaborador) =>{
                                        return <ListItemText>{colaborador.nombre}</ListItemText>
                                    })
                                    :''
                            }
                        </List>
                        <Stack spacing={1} direction="row">

                            <Button id='BtnAgregar' onClick={AgregarPoryecto} variant="contained">Agregar</Button>

                        </Stack>
                        <br />


                    </Box>
                    <br />

                    <ListaProyectos proyectos={proyectos} eliminarProyecto={eliminarProyecto} />

             <br></br>      
                       
             <Colaboraciones rows={rows}  />

             <br />


                </Container>
            </React.Fragment>


        </>



    )
}
async function obtenerUsuarios (){
    const respuesta = await fetch("http://localhost:8080/api/usuarios")
    const usuarios = await respuesta.json()

    return usuarios;
}
async function obtenerProyectos(){
    var myHeaders = new Headers();
    myHeaders.append("x-token", sessionStorage.getItem("token"));
    myHeaders.append("Content-Type", "application/json");

    const respuesta = await fetch("http://localhost:8080/api/proyectos",{
        method: "GET",
        headers: myHeaders,
    })
    const proyectos = await respuesta.json()
    return proyectos;
}

export default Proyectos;