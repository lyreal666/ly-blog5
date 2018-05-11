"use strict";

import React, {Component} from 'react';
import LabBlock from '../../components/labBlock/LabBlock';
import styles from './style.css';


const debug = (...args) => {
    console.log(args.reduce((x, y) => x + y + ' ', ''));
};

class LabList extends Component {
    static defaultProps = {
        labBlocks: [
            {
                id: 'testJs',
                picLink: 'card_bg.png',
                title: 'js测验',
                desc: '用来检测js学习进度.....'
            },
            {
                id: 'powerfulSearch',
                picLink: 'powerful_search.jpg',
                title: '资源神器',
                desc: '各种源各种福利'
            }
        ]
    };
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
            <div className={styles.labList}>
                <div className={'container'}>
                    <div className={'row'}>
                        {
                            this.props.labBlocks.map((ele) => {
                                return <LabBlock labBlock={ele}/>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default LabList;