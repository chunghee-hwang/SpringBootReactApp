import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import MainComponent from './MainComponent';
import DashboardComponent from './DashboardComponent';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
class TopMenuComponent extends Component {
    render() {
        return (
            <Router>
                <Navbar
                    bg="dark"
                    variant="dark"
                    className="mb-4" >
                    <Navbar.Brand>
                        <NavLink exact to="/">Home</NavLink>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <NavLink to="/main">Main</NavLink>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </Navbar.Brand>
                </Navbar>
                <Switch>
                    <Route exact path="/">Welcome</Route>
                    <Route path="/main" component={MainComponent} />
                    <Route path="/dashboard" component={DashboardComponent} />
                    <Route path="/">Not found</Route>
                </Switch>

            </Router>
        );
    }
}

export default TopMenuComponent;