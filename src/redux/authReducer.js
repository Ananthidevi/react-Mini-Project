//Global data

const initialState = {
    user : null,
    error:null
};

export default function authReducer(state = initialState,action){
    switch(action.type){
        case 'LOGIN-SUCCESS':
            return {
                ...state, user: action.payload, error: null
            }

            case 'LOGIN_ERROR':
                return{
                    ...state, error: action.payload
                };

                case 'REGISTER_SUCCESS':
                    return{
                        ...state, user:action.payload, error:null
                    }
                    case 'LOGOUT':
                        return{
                            ...state, user: null, error: null
                        }
                        default:
                            return state;

    }
}