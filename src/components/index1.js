import React from 'react';

import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';


const List = () => {
    return (

        <div>

            <h1>Make you own team</h1>

            <nav>
                <ul>
                    <li><Link to="/test"><button id="first-button" >Test-Team</button></Link></li>
                    <li><Link to="/odi"><button id="second-button" >One-day International</button></Link></li>
                    <li><Link to="/twenty"><button id="third-button" >T-Twenty International</button></Link></li>
                </ul>
            </nav>
            


        </div>
    );
}
export default List