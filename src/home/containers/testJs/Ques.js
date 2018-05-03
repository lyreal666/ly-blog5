"use strict";

import React, {Component} from 'react';

const debug = (...args) => {
    console.log(args.reduce((x, y) => x + y + ' ', ''));
};

class Model extends Component {
    static defaultProps = {
        ques: {
            desc: 'js有哪些值类型?',
            tips: ''
        }
    };
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
            <div className="panel panel-default">
                <div className="panel-heading">
                    <p>{this.props.ques.desc}</p>
                </div>
                <div className="panel-body">
                    <textarea value={this.props.ques.tips}></textarea>
                </div>
                <div className="panel-footer">Panel footer</div>
            </div>
        )
    }
}

export default Model;