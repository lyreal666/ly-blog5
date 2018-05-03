"use strict";

import React, {Component} from 'react';
import Ques from './Ques';

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
            <div className={'container'}>
                <h2>{this.props.match.params.testTitle}</h2>
                <Ques/>
            </div>
        )
    }
}

export default Model;