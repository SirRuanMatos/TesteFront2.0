import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';

import"./style/style.css"


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/:idPesquisa" component={App}/>
            <Route path="/" exact={true} component={App}/>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
