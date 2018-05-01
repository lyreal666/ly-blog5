import React, {Component} from 'react';
import Home from './home/containers/Home';
import Admin from './admin/containers/admin/Admin';
import { Switch, Route } from 'react-router-dom';
import './App.css';
//import ReactDOM from 'react-dom';

class App extends Component{
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/'  component={Home}/>
                    <Route path='/admin' component={Admin}/>
                    <Route path='/home' component={Home}/>
                </Switch>
            </div>
        )
    }
}

export default App;