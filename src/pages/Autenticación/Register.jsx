import react from 'react'
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {Image} from "@mui/icons-material";


function Registro(){


    return <>

    <div className={'container'}>
        <h1 className={'mb-4'}>Crear cuenta.</h1>
        <div className={'row'}>

            <div className={'col-sm-6 mb-4'}>
                <label className={'mb-4'}>Nombre completo</label>
                <TextField className={'form-control form-control-sm mb-4'}/>
                <label className={'mb-4'}>Correo electronico</label>
                <TextField className={'form-control form-control-sm'}/>
            </div>

            <div className={'col-sm d-flex justify-content-center'}>

                <div className={'align-self-center'}>
                    <h4>Seleccionar foto de perfil.</h4>
                        <Image />
                        <input type={'file'}/>
                </div>


            </div>

            <div className={'row mb-4'} style={{paddingRight:0}} >
                <div className={'col-sm-6'} style={{paddingRight:0}}>
                    <label>Contraseña</label>
                    <TextField className={'form-control'} type={'password'}/>
                </div>
                <div className={'col-sm-6'} style={{paddingRight:0}}>
                    <label>Confirmar contraseña</label>
                    <TextField className={'form-control'} type={'password'}/>
                </div>
            </div>

            <div className={'row'}>
                <a type={'button'} className={'btn btn-primary'}>Crear cuenta</a>
            </div>

        </div>

    </div>

    </>


}

export default Registro;