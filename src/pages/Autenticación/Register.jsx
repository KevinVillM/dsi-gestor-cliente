import react, {useState} from 'react'
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {Image} from "@mui/icons-material";


function Registro(){

    let [nombre,setNombre] = useState();
    let [password,setPassword] = useState();
    let [passwordConfirm,setPasswordConfirm] = useState();
    let [email,setEmail] = useState();

    //Errores
    let [errorPasswordTooShort,setErrorPasswordTooShort] = useState(false)
    let [errorPassConfirmTooShort,setErrorPassConfirmTooShort] = useState(false)
    let [errorNonMatchingPasswords,setErrorNonMatchingPasswords] = useState(false)
    let [errorEmailFormat,setErrorEmailFormat] = useState(false)


    //Misc
    let [progressBarActive,setProgressBarActive] = useState(false)

    const changeNombre  = e => {
        setNombre(e.target.value)
    }

    const changePassword = e =>{
        if(e.validity.tooShort){
            setErrorPasswordTooShort(true)
            return;
        }

        setErrorPasswordTooShort(false)
        setPassword(e.target.value)
    }

    const changePasswordConfirm = e => {

        if (e.validity.tooShort === true){
            setErrorPasswordTooShort(true)
            return;
        }

        setErrorPassConfirmTooShort(false)
        setPasswordConfirm(e.target.value)
    }

    const changeEmail = e => {
        if(e.validity.typeMismatch){
            setErrorEmailFormat(true)
            return;
        }
        setErrorEmailFormat(false)
        setEmail(e.target.value)
    }


    const crearCuenta = () => {

        const headers = new Headers
        const usuario = {
            nombre:nombre,
            password:password,
            email:email,
            img:'',
            rol:'',
            estado:true,
            google:false
        }

        headers.set('Content-Type','application/json')

        const init = {
            method:'Post',
            headers:headers,
            body:JSON.stringify(usuario)
        }

        fetch('http://localhost:8080/api/usuarios',init)
            .then(response => {
                if(response.ok){
                // TO-DO*** Mostrar un cuadro de dialogo indicando que se creo el usuario y luego redirigir al dashboard
                }
            })


    }


    return <>

    <div className={'container'}>
        <h1 className={'mb-4'}>Crear cuenta.</h1>
        <div className={'row'}>

            <div className={'col-sm-6 mb-4'}>
                <label className={'mb-4'}>Nombre completo</label>
                <TextField className={'form-control form-control-sm mb-4'}/>
                <label className={'mb-4'}>Correo electronico</label>
                <TextField className={'form-control form-control-sm'}
                           type={'email'}
                           error={errorEmailFormat}
                           helperText={'Introduzca un email valido.'}
                           onChange={changeEmail}
                           required/>
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
                    <TextField className={'form-control'}
                               type={'password'}
                               required
                               error={errorPasswordTooShort | errorNonMatchingPasswords}
                               helperText={errorPassConfirmTooShort ?
                                   'La contraseña debe tener almenos 6 caracteres'
                                   :'Las contraseñas no coinciden.'
                               }
                               onChange={changePassword}
                               inputProps={{minLength:6}}/>
                </div>

                <div className={'col-sm-6'} style={{paddingRight:0}}>
                    <label>Confirmar contraseña</label>
                    <TextField className={'form-control'}
                               type={'password'}
                               required
                               error={errorPassConfirmTooShort | errorNonMatchingPasswords}
                               helperText={errorPassConfirmTooShort ?
                                   'La contraseña debe tener almenos 6 caracteres'
                                   :'Las contraseñas no coinciden.'
                               }
                               onChange={changePasswordConfirm}
                               inputProps={{minLenght:6}}/>
                </div>
            </div>



        </div>
        <div className={'row text-center'}>

            <div className={'col'}>
                <a type={'button'} className={'btn btn-primary'} onClick={}>Crear cuenta.</a>
            </div>

            <div className={'col'}>
                <a type={'button'} className={'btn'} style={{backgroundColor:'#2F58CD',color:'white'}}>Iniciar sesión.</a>
            </div>


        </div>
    </div>

    </>


}

export default Registro;