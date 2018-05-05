"use strict";
import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Content from './content/Content';
import styles from './style.scss';


const debug = (...args) => {
    console.log(args.reduce((x, y) => x + y + ' ', ''));
};

export default () => {
    return (
        <div className={styles.home}>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}