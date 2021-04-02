import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import thunk from "redux-thunk";
import {createStore, combineReducers, applyMiddleware} from "redux";
import Comedy from "./Comedy";
import Login from "./Login";
import ReducerComedy from "./ReducerComedy";
import ReducerLogin from "./ReducerLogin";

let rootReducer = combineReducers({
    comedy: ReducerComedy,
    login: ReducerLogin
})
let store = createStore(rootReducer,applyMiddleware(thunk))


ReactDom.render(<Provider store={store}><Login/></Provider>, document.getElementById("root"))