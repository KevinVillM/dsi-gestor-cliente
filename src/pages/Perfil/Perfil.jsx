import react, {useEffect, useState} from 'react'

import Avatar from "@mui/material/Avatar";
import {Skeleton} from "@mui/material";
import Typography from "@mui/material/Typography";


function Perfil(){
    let [informacionPersonal,setInformacionPersonal] = useState();

    let headers = new Headers

    headers.append("x-token", sessionStorage.getItem("token"));
    headers.append("Content-Type", "application/json");


    useEffect ( () => {
        fetch( 'http://localhost:8080/api/usuarios/'+localStorage.getItem('uid'),{
            method: 'get',
            headers:headers,
        }).then( responseRaw => responseRaw.json())
            .then(response => {
                console.log(response.usuario)
                setInformacionPersonal(response.usuario)
            } )

    },[])


    return <>
        <div>

            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-md mb-4 mt-2'}>
                        <div className={'d-flex justify-content-center'}>
                            {
                                informacionPersonal ?

                                    //<img alt={'Foto de perfil'} />
                                    <Avatar src={'/'}
                                            alt={localStorage.getItem('nombreUsuario')}
                                            sx={{ width: 150, height: 150 }}><h1>{localStorage.getItem('nombreUsuario')[0] }</h1></Avatar>
                                    :
                                    <Skeleton variant={'circular'}>
                                        <Avatar sx={{ width: 150, height: 150 }} />
                                    </Skeleton>

                            }
                        </div>

                    </div>
                    <div className={'col mb-4 mt-4'}>
                        <Typography variant={'h5'}>
                            {
                                informacionPersonal ?
                                    'Nombre: '+ informacionPersonal.nombre
                                    :
                                    <Skeleton/>
                            }
                        </Typography>

                        <Typography variant={'h5'}>
                            {
                                informacionPersonal ?
                                    'Correo electronico: '+informacionPersonal.email
                                    :
                                    <Skeleton/>
                            }
                        </Typography>
                </div>
            </div>
            </div>
        </div>
    </>
}

export default Perfil;