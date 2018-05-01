import React from 'react';
import backgroudImg from '../../asserts/imgs/about1.jpg';
import styles from './style.scss';

const style = {
    backgroundImage: `url(${backgroudImg})`,
};

class About extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {

        }
              
    }


    render()
    {

      return (
        <div style={style} className={`${styles.about} contained`}>
        </div>
      );
    }
}

export default About;