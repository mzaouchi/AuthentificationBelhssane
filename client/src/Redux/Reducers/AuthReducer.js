import { CURRENT, FAIL, LOGIN, LOGOUT, REGISTER } from "../ActionTypes/AuthTypes"

const initialState= {
    user : {},
    errors : []
}

const AuthReducer=(state = initialState, action)=>{
    switch (action.type) {
        
        case REGISTER : 
        localStorage.setItem('token',action.payload.token)
        return {...state, user : action.payload.newAcount,errors : []}

        case LOGIN : 
        localStorage.setItem('token',action.payload.token)
        return {...state, user : action.payload.found, errors : []}
        
        case LOGOUT :
        localStorage.removeItem('token')
        return {...state, user : {}, erros : []}

        case CURRENT : return {...state, user : action.payload}
        
        case FAIL : return {...state,errors : action.payload}

        default: return state
    }
}

export default AuthReducer