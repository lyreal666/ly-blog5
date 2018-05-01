"use strict";

import React, {Component} from 'react';
import styles from './style.scss';

const debug = (...args) => {
    console.log(args.reduce((x, y) => x + y + ' ', ''));
};

class Album extends Component {
    static defaultProps = {
        albumPaths: [
            'album0.jpeg',


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

    _designAlbum() {
        const albumLength = this.props.albumPaths.length;
        if (albumLength === 0) {
            return null;
        } else if (albumLength === 1) {
            return (
                <div className="row">
                    <div className="col-xs-6 col-md-3">
                        <a href="#" className="thumbnail">
                            <img className={styles.oneImg} src={require(`../../asserts/imgs/${this.props.albumPaths[0]}`)}/>
                        </a>
                    </div>
                </div>
            )
        } else {
            return (
                    this.props.albumPaths.map((path) => {
                        return (
                            <div className="row">
                                <div className="col-xs-6 col-md-3">
                                    <a href="#" className="thumbnail">
                                        <img className={styles.multiImg} src={require(`../../asserts/imgs/${path}`)}/>
                                    </a>
                                </div>
                            </div>
                        )
                    })
            )
        }
    }

    render() {
        return (
            <div className={`${styles.album} container`}>
                {this._designAlbum()}
            </div>
        )
    }
}

export default Album;