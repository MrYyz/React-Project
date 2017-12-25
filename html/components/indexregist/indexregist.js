import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router'

import '../../libs/base.css'

import '../../libs/icon/iconfont.css'

import './indexregist.scss';

export default class Indexregist extends React.Component{
            thereturn(){
                hashHistory.push('index');
            }
            isqiandao(e){
                  
                    e.target.innerHTML='已经签到';
                    e.target.style.backgroundColor="#ccc";
                    e.target.disabled="disabled";
                    document.querySelector('.regist3').innerHTML=Number(document.querySelector('.regist3').innerHTML+1);
                    document.querySelector('.jifen1').innerHTML=Number(document.querySelector('.jifen1').innerHTML)+10;
                    document.querySelector('.jifen2').innerHTML=Number(document.querySelector('.jifen2').innerHTML)+10;
            }
        render(){
            const arr=[0,0,0,0];
            const imgArr=[
                'url(html/libs/images/money1.jpg)',
                'url(/html/libs/images/money2.jpg)',
                'url(/html/libs/images/money3.jpg)',
                'url(/html/libs/images/money4.jpg)'
            ];
                return (<div>
                            <div className="iconfont">
                                <div className="regist-header">
                                    <span className="icon-arrowleft" onClick={this.thereturn}></span>
                                    <span>神卷福利社</span>
                                    
                                </div>
                                <div className="regist-div1">
                                    <div className="icon-home registuser1"></div>
                                    <div className="registuser2"></div>
                                    
                                    <div>
                                        <p>已经连续签到的天数</p>
                                        <ul className="regist_day">
                                            {arr.map(function(item,idx){
                                                return <li key={'theli'+idx} className={'regist'+idx}>{item}</li>
                                            })}
                                        </ul>
                                    </div>
                                    
                                </div>
                                    <ul className="qiandao">
                                        <li>
                                            <p>
                                                <span>积分：</span>
                                                <span className="jifen1">--</span>
                                                
                                            </p>
                                            <p>
                                                <span>金币：</span>
                                                <span className="jifen2">--</span>
                                                
                                            </p>
                                        </li>
                                        <li><button onClick={this.isqiandao}>我要签到</button></li>
                                        
                                    </ul>
                                    <ul className="registmoney">
                                            {imgArr.map(function(item,idx){
                                                    return <li style={{backgroundImage: item}} key={'thereg'+idx}></li>
                                            })}
                                    </ul>
                                        <p className="indexactive"> 活动规则说明 >> </p>
                            </div>
                        </div>)
        }

        componentDidMount(){
            console.log(window.localStorage);
            if(window.localStorage.username){
                document.querySelector('.registuser1').style.display='none';
                document.querySelector('.registuser2').style.display='block';
                
                document.querySelector('.registuser2').innerHTML=window.localStorage.username;
                document.querySelector('.jifen1').innerHTML='20';
                document.querySelector('.jifen2').innerHTML='200';
                
            }
        }
}