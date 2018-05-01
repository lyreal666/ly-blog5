"use strict";

import React, {Component} from 'react';
import styles from './style.scss';
import LabBlock from '../../components/labBlock/LabBlock';

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
            <div className={styles.lab}>
                <div className="container">
                    <LabBlock/>
                </div>

            </div>
        )
    }
}

export default Model;