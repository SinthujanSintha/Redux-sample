import {Component} from "react";
import {connect} from "react-redux";

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const prop = this.props
        return (
            <div>
                <h1>My Channel</h1>
                <p>Loading:{prop.loading?" True":" False"}</p>
                <p>Data:{JSON.stringify(prop.data)}</p>
                <p>Error:{JSON.stringify(prop.error)}</p>
                <button onClick={()=>prop.login()}>LogIn</button>

            </div>
        )
    }
}

const middleWare = () => {
    return  dispatch => {
        dispatch({type: 'LOGIN_START'})
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => dispatch({type:'LOGIN_SUCCES',payload:json}))
            .catch(err=>dispatch({type:'LOGIN_FAIL',error:"Error Occured"}))
    }
}
const mapStateToProps = (state) => {
    return state.login
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch(middleWare())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)