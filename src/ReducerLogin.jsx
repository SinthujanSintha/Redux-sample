const intialValue = {
    loading: false,
    data: [],
    error: ''
}

const loginReducer = (state = intialValue, action) => {

    switch (action.type) {
        case 'LOGIN_START':
            return {
                ...state,
                loading: true
            }
        case 'LOGIN_SUCCES':
            return {
                ...state,
                loading: false,
                data: action.payload

            }
        case 'LOGIN_FAIL':
            return{
                data:[],
                loading: false,
                error: action.error


            }
        default:
            return {
                ...state
            }

    }

}

export default loginReducer;