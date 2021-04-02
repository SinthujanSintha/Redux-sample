import {Component} from "react";
import {connect} from "react-redux";
import {vadiveluComedyAction,gowndamaniComedyAction,subscribeAction} from "./ReducerComedy";

class Comedy extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const prop=this.props
        return(<>
                <h1>My Channel</h1>
                <p>{prop.isSubscribed?"Subscribed":"Unsubscribed"}</p>
                <img src={prop.img} alt="Image"/>
                <button disabled={!prop.isSubscribed} onClick={()=>prop.vadivelComedy()}>VadivelComedy</button>
                <button disabled={!prop.isSubscribed} onClick={()=>prop.goundamaniComedy()}>goundamaniComedy</button>
                <button  onClick={()=>prop.subscribeChannel()}>{prop.isSubscribed?"Unsubscribe":"Subscribe"}</button>

            </>
            )
    }
}
const mapStateToProps = (state)=>{
    return state.comedy
}
const mapDispatchToProps = (dispatch) =>{
    return{
        vadivelComedy:()=> dispatch(vadiveluComedyAction()),
        goundamaniComedy:()=>dispatch(gowndamaniComedyAction()),
        subscribeChannel:()=>dispatch(subscribeAction())

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Comedy)