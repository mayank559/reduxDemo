import React from 'react'
import Player_list from './playerlist'
import * as ReactDOM from "react-dom";
const Odi = () => {
    return (
        <div>
            <h1><cite>One Day International</cite></h1>
            <div><h2> Amount left to buy players-</h2></div>
            {<Player_list></Player_list>}
           
        </div>
    )
}
export default Odi