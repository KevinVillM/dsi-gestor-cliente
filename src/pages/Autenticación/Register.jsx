import react, {useState} from 'react'
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {Image} from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";


function Registro(){

    let [nombre,setNombre] = useState();
    let [password,setPassword] = useState();
    let [passwordConfirm,setPasswordConfirm] = useState();
    let [email,setEmail] = useState();
    let [fotoPerfil,setFotoPerfil] = useState()

    //Errores
    let [errorPasswordTooShort,setErrorPasswordTooShort] = useState(false)
    let [errorPassConfirmTooShort,setErrorPassConfirmTooShort] = useState(false)
    let [errorNonMatchingPasswords,setErrorNonMatchingPasswords] = useState(false)
    let [errorEmailFormat,setErrorEmailFormat] = useState(false)


    //Misc
    let [progressBarActive,setProgressBarActive] = useState(false)
    let [disablePassConfirm,setDisablePassConfirm] = useState(true)

    const changeNombre  = e => {
        setNombre(e.target.value)
    }

    const changePassword = e =>{
        const target = e.target
        if(target.validity.tooShort || target.value === ''){
            setErrorPasswordTooShort(true)
            setDisablePassConfirm(true)
            return;
        }

        setDisablePassConfirm(false)
        setErrorPasswordTooShort(false)
        setPassword(target.value)
    }

    const changePasswordConfirm = e => {
        const target = e.target
        if (target.validity.tooShort === true){
            setErrorPassConfirmTooShort(true)
            return;
        }


        setErrorPassConfirmTooShort(false)
        setPasswordConfirm(target.value)


    }

    const changeEmail = e => {
        const target = e.target
        if(target.validity.typeMismatch){
            setErrorEmailFormat(true)
            return;
        }
        setErrorEmailFormat(false)
        setEmail(target.value)
    }

    const passwordErrorText = (tooShort,NonMatching) =>{
        if(tooShort) return 'La contraseña debe tener almenos 6 carateres.'
        if (NonMatching) return 'Las contraseñas no coinciden'


        return "";

    }

    //TO-DO validar las que las contraseñas coincidan, si es asi, llamar a la funcion para crear cuenta
    const validatePasswordMatching = () => {

    }

    const imprimirValores = () =>{
        console.log(`Pass ${password}\nConfirm ${passwordConfirm}`)
    }

    const profilePictureSelection = e => {
        const target = e.target
        if(target.files){
            setFotoPerfil(e.target.files[0])
        }

    }

    const createAccount = () => {

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
                           helperText={ errorEmailFormat ? 'Introduzca un email valido.' :''}
                           onChange={changeEmail}
                           required/>
            </div>

            <div className={'col-sm d-flex justify-content-center'}>

                <div className={'align-self-center'}>
                    {
                        fotoPerfil ?
                            <>
                                <div style={{display:"block"}}>
                                    <Avatar src={URL.createObjectURL(fotoPerfil)}
                                        //className={'img-thumbnail rounded'}
                                           
                                    />
                                </div>

                                <button onClick={()=>setFotoPerfil(undefined)}>Eliminar.</button>
                            </>
                            :
                            <>
                                <h4>Seleccionar foto de perfil.</h4>
                                <Image />
                                <input  type={'file'} accept={'.jpg,.png,jpgeg'} onChange={profilePictureSelection}/>
                            </>


                    }

                </div>


            </div>

            <div className={'row mb-4'} style={{paddingRight:0}} >
                <div className={'col-sm-6'} style={{paddingRight:0}}>
                    <label>Contraseña</label>
                    <TextField className={'form-control'}
                               type={'password'}
                               required
                               error={errorPasswordTooShort || errorNonMatchingPasswords}
                               helperText={passwordErrorText(errorPasswordTooShort,errorNonMatchingPasswords)}
                               onChange={changePassword}
                               inputProps={{minLength:6}}/>
                </div>

                <div className={'col-sm-6'} style={{paddingRight:0}}>
                    <label>Confirmar contraseña</label>
                    <TextField className={'form-control'}
                               type={'password'}
                               required
                               placeholder={disablePassConfirm ? 'Introduzca una contraseña para habilitar':''}
                               disabled={disablePassConfirm}
                               error={errorPassConfirmTooShort || errorNonMatchingPasswords}
                               helperText={passwordErrorText(errorPassConfirmTooShort,errorNonMatchingPasswords)}
                               onChange={changePasswordConfirm}
                               inputProps={{minLength:6}}/>
                </div>
            </div>



        </div>
        <div className={'row text-center'}>

            <div className={'col'}>
                <a type={'button'} className={'btn btn-primary'}>Crear cuenta.</a>
            </div>

            <div className={'col'}>
                <a type={'button'} onClick={imprimirValores} className={'btn'} style={{backgroundColor:'#2F58CD',color:'white'}}>Iniciar sesión.</a>
            </div>


        </div>
    </div>

    </>


}

export default Registro;