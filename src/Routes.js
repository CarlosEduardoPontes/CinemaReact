import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Programacao from './pages/Programacao/Index';
import Login from './pages/Login/Login';

export default () => {
    return(
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/Programacao">
                <Programacao />
            </Route>

            <Route exact path="/login">
                <Login />
            </Route>
            
            <Route exact path="/login">
                Loging
            </Route>
        </Switch>
    )
}