import React, {Component} from 'react';
import styles from './style.scss';
import { Link } from 'react-router-dom';

export default class SearchIndex extends React.Component {
    static defaultProps = {};
    constructor() {
        super();
        this.state = {
            searchStr: ''
        }
    }

    handleKeyDown(event) {
        if (event.keyCode === 13) {
            this.refs.searchStr.click();
            console.log('回车')
        }
    }

    handSearchChange(event) {
        this.setState({
            searchStr: event.target.value
        })
    }

    render() {
        return (
            <div className={`container ${styles.searchIndex}`}>
                <div className="row">
                    <div className="col-lg-10">
                        <div className="input-group">
                            <div className="input-group-btn">
                                <button type="button" className="btn btn-secondary">搜素源</button>
                                <button type="button" className="btn btn-secondary dropdown-toggle"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="sr-only">Toggle Dropdown</span>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">sopanpan</a>
                                    <a className="dropdown-item" href="#">bdy搜</a>
                                    <a className="dropdown-item" href="#">80s</a>
                                    <div role="separator" className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">BitDig</a>
                                </div>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search for..."
                                value={this.state.searchStr}
                                autoFocus='true'
                                onChange={this.handSearchChange.bind(this)}
                                onKeyDown={this.handleKeyDown.bind(this)}
                            />
                            <span className="input-group-btn">
                                <Link to={`/home/lab/powerfulSearch/${this.state.searchStr}`}>
                                   <button ref={'searchStr'} className="btn btn-secondary" type="button">Go!</button>
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

