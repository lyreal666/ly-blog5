import React, {Component} from 'react';
import { Layout} from 'antd';



const { Header} = Layout;

export default class App extends React.Component {
    static defaultProps = {};


    render() {
        return (
            <Header style={{ background: '#fff', padding: 0 }}>
                <h4>ly's blog admin sys</h4>
            </Header>

        );
    }
}

