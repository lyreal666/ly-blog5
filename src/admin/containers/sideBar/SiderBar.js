"use strict";

import React, {Component} from 'react';

const debug = (...args) => {
    console.log(args.reduce((x, y) => x + y + ' ', ''));
};

class SideBar extends Component {
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
                <h1>sideBar</h1>
            </div>
        )
    }
}

export default SideBar;