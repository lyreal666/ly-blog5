"use strict";

import React, {Component} from 'react';
import Album from '../album/Album';

const debug = (...args) => {
    console.log(args.reduce((x, y) => x + y + ' ', ''));
};

class Article extends Component {
    static defaultProps = {
        article: {
            title: '这是标题',
            text: '这是文章内容',
            updateTime: '1-27-2018',
            author: 'ly'
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
            <div className="card mb-4">
                <div className="card-body">
                    <h3 className="card-title">{this.props.article.title}</h3>
                    <p className="card-text">
                        {this.props.article.text}
                    </p>
                    <a href="#" className="btn btn-primary">更多详情 &rarr;</a>
                </div>
                <Album/>
                <div className="card-footer text-muted">
                    {this.props.article.updateTime}
                    <a href="#"> by {this.props.article.author}</a>
                </div>
            </div>
        )
    }
}

export default Article;