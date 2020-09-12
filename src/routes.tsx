import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Country from './pages/Country';
import Region from './pages/Region';
import Language from './pages/Language';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/country" component={Country} />
            <Route path="/regions" component={Region} />
            <Route path="/languages" component={Language} />
        </Switch>
    </BrowserRouter>
)

export default Routes;

