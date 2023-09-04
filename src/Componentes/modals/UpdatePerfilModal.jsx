import react, {useState} from 'react'
import {Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


export default function UpdatePerfilModal({modalUpdatePerfilOPen,infoPersonal,handleOnClose}){

    let [copyNombre,setCopyNombre] = useState(infoPersonal.nombre)
    let [copyCorreo,setCopyCorreo] = useState(infoPersonal.email)

    let handleOnChangeNombre = (e) => setCopyNombre(e.target.value)


    let handleOnChangeCorreo = (e) => setCopyCorreo(e.target.value)


    return <>
        <Dialog open={modalUpdatePerfilOPen} onClose={handleOnClose}>
            <DialogTitle>Actualizar informacion personal.</DialogTitle>
            <DialogContent>
                <Stack spacing={2}>
                    <Typography>Nombre:</Typography>
                    <TextField type="text" value={copyNombre} onChange={handleOnChangeNombre}/>
                    <Typography>Correo electronico:</Typography>
                    <TextField type="email" value={copyCorreo} onChange={handleOnChangeCorreo}/>
                </Stack>
            </DialogContent>

            <DialogActions>
                <Button color="success">Actualizar.</Button>
                <Button onClick={handleOnClose}>Cancelar.</Button>
            </DialogActions>
        </Dialog>

    </>


}