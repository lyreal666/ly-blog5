import React from 'react';
import { Layout} from 'antd';
import styles from './style.scss';



const { Header: AntdHeader} = Layout;

export default class Header extends React.Component {
    static defaultProps = {};

    render() {
        return (
            <AntdHeader className={styles.header}>
                <h4 className={styles.title}>ly's blog admin sys</h4>
            </AntdHeader>

        );
    }
}

