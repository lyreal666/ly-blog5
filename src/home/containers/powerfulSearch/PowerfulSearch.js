import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchIndex from './SearchIndex';
import SearchResult from './SearchResult';
import styles from './style.scss';


export default class PowerfulSearch extends React.Component {
    static defaultProps = {};


    render() {
        return (
            <div className={styles.powerfulSearch}>
                <Switch>
                    <Route path={'/home/lab/powerfulSearch'} exact component={SearchIndex}/>
                    <Route path={'/home/lab/powerfulSearch/:searchStr'} component={SearchResult}/>
                </Switch>
            </div>
        );
    }
}

