import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {vadiveluComedyAction, gowndamaniComedyAction,subscribeAction} from './ReducerComedy'

const App = () => {
    const comedies = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <>
            <h1>MyChannel</h1>
            <p>{comedies.isSubscribed ? "Subscribed" : "Unsubscribed"}</p>
            <img src={comedies.img} alt="Image"/>
            <button disabled={!comedies.isSubscribed} onClick={() => dispatch(vadiveluComedyAction())}>VadiveluComedy</button>
            &nbsp;
            <button disabled={!comedies.isSubscribed} onClick={() => dispatch(gowndamaniComedyAction())}>GoundamaniComedy</button>&nbsp;
            <button onClick={() => dispatch(subscribeAction())}>{comedies.isSubscribed?
                "Unsubscribe":"Subscribe"}</button>
        </>
    )
}

export default App


