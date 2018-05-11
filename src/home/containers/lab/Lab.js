"use strict";

import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import LabList from '../labList/LabList';
import TestJs from '../testJs/TestJs';
import PowerfulSearch from '../powerfulSearch/PowerfulSearch';

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
                    <Route path='/home/lab' exact component={LabList}/>
                    <Route path='/home/lab/testJs' component={TestJs}/>
                    <Route path='/home/lab/powerfulSearch' component={PowerfulSearch}/>
                </Switch>
            </div>
        )
    }
}

export default Model;