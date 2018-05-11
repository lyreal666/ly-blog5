import React, {Component} from 'react';
import styles from './style.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SearchResult extends React.Component {
    static defaultProps = {};
    constructor(props) {
        super(props);
        this.state = {
            searchStr: this.props.match.params.searchStr,
            searchArr: []
        }
    }

    componentWillMount() {
        axios.get(`http://localhost:8081/panSpider&searchStr=${this.state.searchStr}.json`).then(res => {
            console.log(res);
            this.setState({
                searchArr: res
            })
        });
    }
    handSearchChange(event) {
        this.setState({
            searchStr: event.target.value
        })
    }

    render() {
        return (
            <div className={`container ${styles.searchResult}`}>
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
                                onChange={this.handSearchChange.bind(this)}
                            />
                            <span className="input-group-btn">
                                <Link to={`/home/lab/powerfulSearch/${this.state.searchStr}`}>
                                   <button className="btn btn-secondary" type="button">Go!</button>
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
                <table className={`${styles.resultTable} table table-striped table-bordered table-hover`}>
                    <thead>
                    <tr>
                        <th>文件名</th>
                        <th>文件大小</th>
                        <th>分享者</th>
                        <th>分享时间</th>
                        <th>查看次数</th>
                        <th>下载连接</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.searchArr.map((ele, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{ele.fileName}</th>
                                    <td>{ele.fileSize}</td>
                                    <td>{ele.sharer}</td>
                                    <td>{ele.shareTime}</td>
                                    <th>{ele.visitedTimes}</th>
                                    <th>{ele.panLink}</th>
                                </tr>
                                )
                        })
                    }
                    </tbody>
                </table>
            </div>

        );
    }
}

