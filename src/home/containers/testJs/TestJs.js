"use strict";

import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import QuesList from './QuesList';
import TestQues from './TestQues';

const debug = (...args) => {
    console.log(args.reduce((x, y) => x + y + ' ', ''));
};

class TestJs extends Component {
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
                    <Route path={'/home/lab/testJs'} exact component={QuesList}/>
                    <Route path={'/home/lab/testJs/:testTitle'} component={TestQues}/>
                </Switch>
            </div>
        )
    }
}

export default TestJs;