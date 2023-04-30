

import React from 'react'
en 


export default function Login(){

    return <>
        <section className="vh-100">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 text-black">


                        <div className="d-flex align-items-center  px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                            <form style={{width:"35em"}} id={"loginForm"}>

                                <h3 className="fw-normal mb-3 pb-3">Inicio de sesión</h3>

                                <div className="form-outline mb-4">
                                    <TextField type="email"
                                               label={"Correo electronico"}
                                               className="form-control form-control-lg" />
                                </div>

                                <div className="form-outline mb-4">
                                    <TextField type="password"
                                               className="form-control form-control-lg"
                                               label={"Contraseña"}/>

                                </div>

                                <div className="pt-1 mb-4">
                                    <button
                                        className={"btn"}
                                        style={{
                                            backgroundColor:"#214A87",
                                            color:"#FFF"
                                    }}>Ingresar</button>
                                </div>

                            </form>

                        </div>

                    </div>
                    <div className="col-sm-6 px-0 d-none d-sm-block">

                        <section className={"w-100 vh-100"} style={{backgroundColor:"#214A87"}}></section>
                    </div>
                </div>
            </div>
        </section>
    </>
}