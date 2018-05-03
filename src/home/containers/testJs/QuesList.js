"use strict";

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styles from './quesList.scss';

const debug = (...args) => {
    console.log(args.reduce((x, y) => x + y + ' ', ''));
};

class Model extends Component {
    static defaultProps = {
        quesTitles: [
            'test1',
            'test2',
            'test3',
            'test4'
        ]
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
            <div className={styles.quesList}>
                <div className="list-group container">
                    {
                        this.props.quesTitles.map((ele) => {
                            return (
                                <Link to={`/home/lab/testJs/${ele}`} className="list-group-item">{ele}</Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Model;