"use strict";

import React, {Component} from 'react';
import Article from '../../components/article/Article';
import IndexRightSideBar from '../siderBars/IndexRightSideBar';

const debug = (...args) => {
    console.log(args.reduce((x, y) => x + y + ' ', ''));
};


class HomeIndex extends Component {
    static defaultProps = {};
    static propTypes = {};

    constructor() {
        super();
        this.state = {
            articles: []
        };
    }

    componentWillMount(){
        const articles = this._loadData();
        this.setState({articles: articles});
    }

    componentDidMount() {

    }

    _loadData() {
        return [
            {
                title: '教你怎样免会员下载vip音乐',
                text: '首先来看一段无损音乐的地址\n' +
                '\n' +
                'http://dl.stream.qqmusic.qq.com/F000003aAYrm3GE0Ac.flac?vkey=9EE4B929121DD578EE78612BC15DE2A6276D5792625C822D772B42B66C3922DB682E7F674BA92A8BD1D78D39D090F73BACCBE9F2BF9181E6&guid=1234567890&uin=1008611&fromtag=64\n' +
                '抽象一下：\n' +
                '无损下载的地址就是这样的\n' +
                '\n' +
                'http://dl.stream.qqmusic.qq.com/A000” ＋ StrMediaMid ＋ “.ape” ＋ “?vkey=” ＋ vkey ＋ “&guid=” ＋ guid ＋ “&uin=” ＋ uin ＋ “&fromtag=64\n' +
                '\n' +
                '这段网址中，A000为音乐格式的标识符，ape为A000，flac文件为F000，320Kmp3文件为M800，普通mp3为M500。\n' +
                '\n' +
                'StrMediaMid,为歌曲的MID，可以查看音乐也没的网页源码\n' +
                '\n',
                updateTime: '4-24-2018',
                author: 'ly'
            }
        ]
    }

    render() {
        return (
            <div className={'container'}>
                <div className="row">
                    <div className="col-md-8">
                        {/*<!-- Blog Entries Column -->*/}

                        <h1 className="my-4">首页部分
                            <small></small>
                        </h1>

                        {/*<!-- Blog Post -->*/}
                        {
                            this.state.articles.map((article) => {
                                return <Article article={article}/>
                            })
                        }
                        {/*<!-- Pagination -->*/}
                        <ul className="pagination justify-content-center mb-4">
                            <li className="page-item">
                                <a className="page-link" href="#">&larr; Older</a>
                            </li>
                            <li className="page-item disabled">
                                <a className="page-link" href="#">Newer &rarr;</a>
                            </li>
                        </ul>
                    </div>
                    <IndexRightSideBar/>
                </div>
            </div>
    )
    }
}

export default HomeIndex;