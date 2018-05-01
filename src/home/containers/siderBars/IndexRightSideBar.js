"use strict";

import React, {Component} from 'react';

const debug = (...args) => {
    console.log(args.reduce((x, y) => x + y + ' ', ''));
};

class IndexRightSideBar extends Component {
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
            <div className="col-md-4">
                {/*<!-- Sidebar Widgets Column -->*/}
                {/*<!-- Search Widget -->*/}
                <div className="card my-4">
                    <h5 className="card-header">搜索</h5>
                    <div className="card-body">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search for..."/>
                <span className="input-group-btn">
                  <button className="btn btn-secondary" type="button">Go!</button>
                </span>
                        </div>
                    </div>
                </div>

                {/*-- Categories Widget -->*/}
                <div className="card my-4">
                    <h5 className="card-header">文章分类</h5>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#">c</a>
                                    </li>
                                    <li>
                                        <a href="#">c++</a>
                                    </li>
                                    <li>
                                        <a href="#">shell</a>
                                    </li>
                                    <li>
                                        <a href="#">os</a>
                                    </li>
                                    <li>
                                        <a href="#">java</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#">HTML</a>
                                    </li>
                                    <li>
                                        <a href="#">JavaScript</a>
                                    </li>
                                    <li>
                                        <a href="#">sass</a>
                                    </li>
                                    <li>
                                        <a href="#">python</a>
                                    </li>
                                    <li>
                                        <a href="#">go</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/*!-- Side Widget -->*/}
                <div className="card my-4">
                    <h5 className="card-header">重要通知</h5>
                    <div className="card-body">
                        这是一些通知信息
                    </div>
                </div>
            </div>
        )
    }
}

export default IndexRightSideBar;