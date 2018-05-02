"use strict";

import React, {Component} from 'react';
import { Upload, message, Button, Icon } from 'antd';

const debug = (...args) => {
    console.log(args.reduce((x, y) => x + y + ' ', ''));
};

class FileUpload extends Component {
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
            <div className={'container'}>
                <form>
                    <div className="form-group row">
                        <label htmlFor="file-type" className="col-sm-2 col-form-label">文件类型:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="file-type" placeholder="类似图片,html布局..."/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="file-use" className="col-sm-2 col-form-label">文件用途:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="file-use" placeholder="类似lab-block.."/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="file-select" className="col-sm-2 col-form-label">选择文件</label>
                        <div className="col-sm-10">
                            <input type="file" className="form-control-file" id="file-select"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">上传</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default FileUpload;