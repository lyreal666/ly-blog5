"use strict";

import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import FileUpload from '../fileUpload/FileUpload';

const debug = (...args) => {
    console.log(args.reduce((x, y) => x + y + ' ', ''));
};

class Content extends Component {
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
                    <Route path='/admin/' exact component={FileUpload}/>
                    <Route path='/admin/fileUpload' component={FileUpload}/>
                </Switch>
            </div>
        )
    }
}

export default Content;