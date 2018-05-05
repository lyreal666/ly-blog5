import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'
import styles from './style.scss';
import LoginBox from '../../components/loginBox/LoginBox';
import RegisterBox from '../../components/registerBox/RegisterBox';

const debug = (...args) => {
    console.log(args.reduce((x, y) => x + y + ' ', ''));
};

class Model extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor() {
        super();
        this.state = {
            isRegister: false
        };

    }

    componentWillMount(){

    }

    componentDidMount() {

    }

    handleNavClick(isRegister, event) {
        this.setState({
            isRegister: isRegister
        })
    }

    render() {
        return (
            <div className={`container ${styles.login}`}>
                <div className="card text-center">
                    <ul className={`nav nav-tabs card-header ${styles.cardHeader}`}>
                        <li className={`nav-item ${styles.navItem}`}>
                            <Link
                                to={`/home/login`}
                                className={`nav-link ${this.state.isRegister ? "active" : ''}`}
                                onClick={this.handleNavClick.bind(this, false)}
                            >
                                登入
                            </Link>
                        </li>
                        <li className={`nav-item ${styles.navItem}`}>
                            <Link
                                to="/home/login/register"
                                className={`nav-link ${this.state.isRegister ? '' : "active"}`}
                                onClick={this.handleNavClick.bind(this, true)}
                            >
                                注册
                            </Link>
                        </li>
                    </ul>
                    <div className={`card-block ${styles.loginBody}`}>
                        <Switch>
                            <Route path='/home/login' exact component={LoginBox}/>
                            <Route path='/home/login/register' component={RegisterBox}/>
                        </Switch>
                    </div>
                    {/*<div className="card-footer text-muted">*/}
                        {/*2 days ago*/}
                    {/*</div>*/}
                </div>

            </div>
            )
    }
}

export default Model;