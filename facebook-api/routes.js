import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';



import Header from './components/header';
import Home from './components/Home';
import User from './components/User';

const Routes = () => (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route path='/User/:userId' component={User}/>
            <Route path='/' component={Home}/>
            

        </Switch>
    
    
    </BrowserRouter>
)

export default Routes;