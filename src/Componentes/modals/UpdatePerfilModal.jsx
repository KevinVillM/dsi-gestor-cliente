import react, {useState} from 'react'
import {CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import serverUrl from "../../serverUrl.js";


export default function UpdatePerfilModal({modalUpdatePerfilOPen,infoPersonal,handleOnClose}){

    let [copyNombre,setCopyNombre] = useState(infoPersonal.nombre)
    let [copyCorreo,setCopyCorreo] = useState(infoPersonal.email)
    let [cargando,setCargando] = useState(false)
    let handleCloseAsCancel = ()=>{
        handleOnClose()
        setCopyCorreo(infoPersonal.email)
        setCopyNombre(infoPersonal.nombre)
    }

    let handleOnChangeNombre = (e) => setCopyNombre(e.target.value)


    let handleOnChangeCorreo = (e) => setCopyCorreo(e.target.value)

    let actualizarDatos =  () =>{

        setCargando(true)
        let header = new Headers
        header.set("x-token", sessionStorage.getItem("token"))

        let body = {
            img:infoPersonal.img,
            rol:'Diseñador',
            estado:true,
            google:false,
            email:copyCorreo,
            password:infoPersonal.password,
            nombre:copyNombre}

        console.log(body)

        fetch(serverUrl+'/api/usuarios/'+infoPersonal.uid,{
            method:'put',
            redirect:"follow",
            body:JSON.stringify(body)
        }).then(raw => raw.json())
            .then(response => {
                console.log(response)
                setCopyNombre(response.usuario.nombre)
                setCopyCorreo(response.usuario.email)
                setCargando(false)
            })
    }

    return <>
        <Dialog open={modalUpdatePerfilOPen} onClose={handleCloseAsCancel}>
            <DialogTitle>Actualizar informacion personal.</DialogTitle>
            <DialogContent>

                {
                    cargando ? <CircularProgress/>
                        :
                        <Stack spacing={2}>
                        <Typography>Nombre:</Typography>
                        <TextField type="text" value={copyNombre} onChange={handleOnChangeNombre}/>
                        <Typography>Correo electronico:</Typography>
                        <TextField type="email" value={copyCorreo} onChange={handleOnChangeCorreo}/>
                    </Stack>

                }

            </DialogContent>

            <DialogActions>
                <Button color="success" onClick={actualizarDatos}>Actualizar.</Button>
                <Button onClick={handleCloseAsCancel}>Cancelar.</Button>
            </DialogActions>
        </Dialog>

    </>


}