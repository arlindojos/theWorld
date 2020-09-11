import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Country from './pages/Country';
import Region from './pages/Region';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/country" component={Country} />
            <Route path="/regions" component={Region} />
        </Switch>
    </BrowserRouter>
)

export default Routes;

