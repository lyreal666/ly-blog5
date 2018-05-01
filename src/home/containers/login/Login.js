"use strict";

import React, {Component} from 'react';
import styles from './style.scss';

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
            <div className={`container ${styles.login}`}>
                <div className="form row">
                    <form className="form-horizontal col-sm-offset-3 col-md-offset-3" id="login_form">
                        <h3 className="form-title">Login to your account</h3>
                        <div className="col-sm-9 col-md-9">
                            <div className="form-group">
                                <i className="fa fa-user fa-lg"></i>
                                <input className="form-control required" type="text" placeholder="Username"
                                       name="username" autoFocus="autofocus" maxLength="20"/>
                            </div>
                            <div className="form-group">
                                <i className="fa fa-lock fa-lg"></i>
                                <input className="form-control required" type="password" placeholder="Password"
                                       name="password" maxLength="8"/>
                            </div>
                            <div className="form-group">
                                <label className="checkbox">
                                    <input type="checkbox" name="remember" value="1"/> Remember me
                                </label>
                                <hr/>
                                <a href="javascript:;" id="register_btn" className="">Create an account</a>
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn btn-success pull-right" value="Login "/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            )
    }
}

export default Model;