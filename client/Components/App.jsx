import React, { Component } from 'react';
import Board from './Board.jsx';
//import NotePage from './Admin/AdminPage.jsx';
//import { Switch, Route } from 'react-router-dom'

export default class App extends Component {
    render() {
        return (
            <Board />
            // <Switch>
            //     <Route exact path='/' component={AssignmentPage} />
            //     <Route path='/admin' component={AdminPage} />
            //     <Route path='/:classId' component={AssignmentPage} />
            // </Switch>
        )
    }
}    