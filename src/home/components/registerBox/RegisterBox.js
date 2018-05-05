import React, {Component} from 'react';

export default class RegisterBox extends React.Component {
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
        this._loadRegisterData();
    }

    handleValueChange(key, event) {
        let state = {};
        state[key] = event.target.value;
        this.setState(state)
    }

    handleBlur(key, event) {
        localStorage.setItem(key, event.target.value);
    }

    _loadRegisterData() {

        const account = localStorage.getItem('RegisterAccount');
        const password = localStorage.getItem('RegisterPwd');
        const isRSavePwd = localStorage.getItem('isRSavePwd') === 'true';

        this.setState({
            account: account || '',
            password: password || '',
            isSavePwd: isRSavePwd || false
        })

    }

    handleClick(event) {
        if (event.target.checked) {
            localStorage.setItem('isRSavePwd', 'true')
        } else {
            localStorage.setItem('isRSavePwd', 'false')
        }
        this.setState({
            isSavePwd: !this.state.isSavePwd
        })
    }

    handleSubmit() {
        if (!this.state.isSavePwd) {
            localStorage.clear()
        }
    }
    render() {
        return (
            <form>
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 form-control-label">邮箱</label>
                    <div className="col-sm-10">
                        <input
                            type="email"
                            className="form-control"
                            id="inputEmail3"
                            placeholder="Email"
                            value={this.state.account}
                            onBlur={this.handleBlur.bind(this, 'RegisterAccount')}
                            onChange={this.handleValueChange.bind(this, 'account')}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-2 form-control-label">密码</label>
                    <div className="col-sm-10">
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword3"
                            placeholder="Password"
                            value={this.state.password}
                            onBlur={this.handleBlur.bind(this, 'RegisterPwd')}
                            onChange={this.handleValueChange.bind(this, 'password')}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <div className={'col-md-7'}></div>
                    <div className="col-md-5">
                        <div className={'checkbox'}>
                            <input
                                type="checkbox"
                                checked={this.state.isSavePwd}
                                onChange={this.handleClick.bind(this)}
                                onClick={this.handleClick.bind(this)}
                            /> 记住密码
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-offset-2 col-md-10">
                        <button 
                            type="submit"
                            className="btn btn-secondary"
                            onClick={this.handleSubmit.bind(this)}
                        >
                            注册
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

