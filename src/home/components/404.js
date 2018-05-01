/**
 * Created by Administrator on 2016/11/16 0016.
 */
import React from 'react';
import { Link } from 'react-router-dom';
const Error404 = ()=>{
    return(
          <div className="container">
              <p>没有找到页面</p>
             <div><Link to="/home" ><span>返回首页</span></Link></div>
          </div>
    );
};
export default Error404;