"use strict";

import React, {Component} from 'react';

const debug = (...args) => {
    console.log(args.reduce((x, y) => x + y + ' ', ''));
};

class Model extends Component {
    static defaultProps = {
        labBlock: {
            picLink: 'card_bg.png',
            title: 'js测验',
            desc: '用来检测js学习进度.....'
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
            <div className={'col-xs-6 col-md-3'}>
                <div className="card">
                    <img className="card-img-top" src={require(`../../asserts/imgs/${this.props.labBlock.picLink}`)} alt="Card image cap"/>
                    <div className="card-block">
                        <h3>{this.props.labBlock.title}</h3>
                        <p className="card-text">{this.props.labBlock.desc}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Model;