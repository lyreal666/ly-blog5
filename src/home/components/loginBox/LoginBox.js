import React, {Component} from 'react';
import { Link } from 'react-router-dom';


export default class LoginBox extends React.Component {
    static defaultProps = {};

    constructor() {
        super();

        this.state = {
            account: '',
            password: '',
            isSavePwd: false
        }
    }

    componentWillMount() {
        this._loadLoginData();
    }

    handleValueChange(key, event) {
        let state = {};
        state[key] = event.target.value;
        this.setState(state)
    }

    handleBlur(key, event) {
        localStorage.setItem(key, event.target.value);
    }

    _loadLoginData() {

        const account = localStorage.getItem('loginAccount');
        const password = localStorage.getItem('loginPwd');
        const isSavePwd = localStorage.getItem('isSavePwd') === 'true';

        this.setState({
            account: account || '',
            password: password || '',
            isSavePwd: isSavePwd || false
        })

    }

    handleClick(event) {
        if (event.target.checked) {
            localStorage.setItem('isSavePwd', 'true')
        } else {
            localStorage.setItem('isSavePwd', 'false')
        }
        this.setState({
            isSavePwd: !this.state.isSavePwd
        })
    }

    handleSubmit() {
        if (!this.state.isSavePwd) {
            localStorage.clear()
            console.log(localStorage.getItem('loginAccount'));
        }
    }

    render() {
        return (
            <form>
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-md-2 form-control-label">邮箱</label>
                    <div className="col-md-10">
                        <input
                            type="email"
                            className="form-control"
                            id="inputEmail3"
                            placeholder="Email"
                            value={this.state.account}
                            onChange={this.handleValueChange.bind(this, 'account')}
                            onBlur={this.handleBlur.bind(this, 'loginAccount')}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-md-2 form-control-label">密码</label>
                    <div className="col-md-10">
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword3"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleValueChange.bind(this, 'password')}
                            onBlur={this.handleBlur.bind(this, 'loginPwd')}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <div className={'col-md-2'}></div>
                    <div className={'checkbox col-md-5'}>
                        <input
                            type="checkbox"
                            checked={this.state.isSavePwd}
                            onChange={this.handleClick.bind(this)}
                            onClick={this.handleClick.bind(this)}
                        /> 记住密码
                    </div>
                    <div className={'col-md-5'}>
                        <Link to={'/home/login'}>忘记密码?</Link>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-offset-2 col-md-10">
                        <button
                            type="submit"
                            className="btn btn-secondary"
                            onClick={this.handleSubmit.bind(this)}
                        >登入</button>
                    </div>
                </div>
            </form>
        );
    }
}

