import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Artist from './components/Artist';

const Routes = () => ( 
    <BrowserRouter>
    < Header />
    <Switch>
   
     <Route path="/artist/:artistid" component={Artist} />
     <Route path="/" component={Home}></Route>

    </Switch>
    </BrowserRouter>
)
export default Routes;