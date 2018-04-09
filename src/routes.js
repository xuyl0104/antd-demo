import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/login/login';
import Detail from './pages/detail/detail';
import List from './pages/list/list';
import Orders from './pages/orders/orders';

class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/list" component={List}/>
                    <Route exact path="/detail" component={Detail}/>
                    <Route exact path="/orders" component={Orders}/>
                </div>
            </Router>
        );
    }
}

export default Routes;