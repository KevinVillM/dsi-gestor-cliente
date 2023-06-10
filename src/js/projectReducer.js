


//state es el estado previo, tipo la accion realizada y payload el cambio de una propiedad
//del objeto state (proyecto)
function projectReducer(state,action){

    switch (action.type) {

        case 'SET_NOMBRE_PROYECTO':
        return {
            ...state,
            nombre: action.payload
        }

        case 'SET_DESCRIPCION':
            return {
                ...state,
                descripcion:action.payload
            }

        case 'SET_FECHA_CREACION':
            return {
                ...state,
                create_date:action.payload
            }

        case 'SET_FECHA_FINALIZACION':
            return {
                ...state,
                ending_date:action.payload
            }
        case 'SET_ESTADO_PROYECTO':
            return {
                ...state,
                estado_Proyecto: action.payload
            }
        case 'SET_COLABORADORES':
            return {
                ...state,
                colaboradores:[...action.payload]
            }

        default:
            return action.payload
    }


}

export default projectReducer;