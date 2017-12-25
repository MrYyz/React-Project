import React from 'react';
import ReactDOM from 'react-dom';
import '../../libs/base.css'

import '../../libs/icon/iconfont.css'

import './indexregist.scss';

export default class Indexregist extends React.Component{
            
        render(){
            const arr=[0,0,0,0];
                return (<div>
                            <div className="iconfont">
                                <div className="regist-header">
                                    <span className="icon-arrowleft"></span>
                                    <span>神卷福利社</span>
                                    
                                </div>
                                <div className="regist-div1">
                                    <div className="icon-home"></div>
                                    <div>
                                        <p>已经连续签到的天数</p>
                                        <ul>
                                            {arr.map(function(item,idx){
                                                return <li>{item}</li>
                                            })}
                                        </ul>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>)
        }
}