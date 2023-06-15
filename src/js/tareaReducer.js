function tareaReducer(state,action){

    switch (action.type) {

        case 'SET_NOMBRE_TAREA':
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
        case 'SET_ESTADO_TAREA':
            return {
                ...state,
                estado_Proyecto: action.payload
            }
        case 'SET_PROYECTO':
            return{
                ...state,
                proyecto: action.payload
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

export default tareaReducer;