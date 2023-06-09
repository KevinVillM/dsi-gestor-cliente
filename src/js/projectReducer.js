


//state es el estado previo, tipo la accion realizada y payload el cambio de una propiedad
//del objeto state (proyecto)
function projectReducer(state,tipo,payload){

    switch (tipo) {


        case 'SET_NOMBRE_PROYECTO':
        return {
            ...state,
            nombre: payload
        }

        case 'SET_DESCRIPCION':
            return {
                ...state,
                descripcion:payload
            }

        case 'SET_FECHA_CREACION':
            return {
                ...state,
                create_date:payload
            }

        case 'SET_FECHA_FINALIZACION':
            return {
                ...state,
                ending_date:payload
            }
        case 'SET_ESTADO_PROYECTO':
            return {
                ...state,
                estado_Proyecto: payload
            }
        case 'SET_COLABORADORES':
            return {
                ...state,
                colaboradores:[...payload]
            }

        default:
            return state;
    }


}