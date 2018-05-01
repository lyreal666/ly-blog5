"use strict";

import React, {Component} from 'react';
import SideBarCard from '../../components/siderBarCard/SideBarCard';

const debug = (...args) => {
    console.log(args.reduce((x, y) => x + y + ' ', ''));
};

class Model extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor() {
        super();
        this.state = {
        };
    }

    componentWillMount(){

    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="col-md-4">
                <SideBarCard>
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
                </SideBarCard>
                <SideBarCard>
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
                </SideBarCard>
                <SideBarCard/>
            </div>
        )
    }
}

export default Model;