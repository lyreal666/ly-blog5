"use strict";
import React from 'react';
import AppBar from '../appBar/AppBar';
import Content from '../content/Content';
import SideBar from '../sideBar/SiderBar';
import AppFooter from '../../components/appFooter/AppFooter';
import styles from './style.scss';


const debug = (...args) => {
    console.log(args.reduce((x, y) => x + y + ' ', ''));
};

export default () => {
    return (
        <div className={styles.admin}>
            <SideBar/>
            <div>
                <AppBar/>
                <Content/>
                <AppFooter/>
            </div>
        </div>
    )
}