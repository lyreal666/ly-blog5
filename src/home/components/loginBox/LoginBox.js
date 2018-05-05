import React, {Component} from 'react';
import { Link } from 'react-router-dom';


export default class LoginBox extends React.Component {
    static defaultProps = {};

    render() {
        return (
            <form>
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-md-2 form-control-label">邮箱</label>
                    <div className="col-md-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-md-2 form-control-label">密码</label>
                    <div className="col-md-10">
                        <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className={'col-md-2'}></div>
                    <div className={'checkbox col-md-5'}>
                        <input type="checkbox"/> 记住密码
                    </div>
                    <div className={'col-md-5'}>
                        <Link to={'/home/login'}>忘记密码?</Link>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-offset-2 col-md-10">
                        <button type="submit" className="btn btn-secondary">登入</button>
                    </div>
                </div>
            </form>
        );
    }
}

