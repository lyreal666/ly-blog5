"use strict";

import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import HomeIndex from '../homeIndex/HomeIndex';
import ArticleList from '../articleList/ArticleList';
import About from '../../components/about/About';
import Login from '../login/Login';
import Lab from '../lab/Lab';


const debug = (...args) => {
    console.log(args.reduce((x, y) => x + y + ' ', ''));
};

class Model extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor() {
        super();
        this.state = {};
    }

    componentWillMount(){

    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                    <Switch>
                        <Route path='/' exact component={HomeIndex}/>
                        <Route path='/home/articles' component={ArticleList}/>
                        <Route path='/home/about' component={About}/>
                        <Route path='/home/login' component={Login}/>
                        <Route path='/home/lab' component={Lab}/>
                    </Switch>
            </div>
        )
    }
}

export default Model;