"use strict";

import React, {Component} from 'react';

const debug = (...args) => {
    console.log(args.reduce((x, y) => x + y + ' ', ''));
};

class Model extends Component {
    static defaultProps = {
        card: {
            header: 'card header',
            body: 'card body',
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
            <div className="card my-4">
                {this.props.children}
            </div>
        )
    }
}

export default Model;