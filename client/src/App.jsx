import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory, Router } from 'react-router';
import routes from './Routes.jsx';

export default class App extends Component {
    render() {
        return (

            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Router history={browserHistory} routes={routes} />
            </MuiThemeProvider>
        )
    }
}    