import React from 'react';
import { hashHistory } from 'react-router';
import {connect} from 'react-redux'
import './newman.scss';


export default class NewmanComponent extends React.Component{
    thereturn(){
        hashHistory.push('index');
    }
            render(){
                const arr=['html/img/youhui1.jpg','html/img/youhui2.jpg','html/img/youhui3.jpg','html/img/youhui4.jpg']
                return (<div className="iconfont">
                              <div className="ruihuan-header">
                                    <span className="icon-arrowleft" onClick={this.thereturn}></span>
                                    <span>新人礼</span>          
                         </div>
                         <div className="thebanner1" style={{backgroundImage: 'url(html/img/thebanner.jpg)'}}></div>
                        <p className="thep1">新人礼包&188元免邮券</p>
                        <p className="thep2">限时7天大优惠</p>
                        <div className="istheimg">
                            { arr.map(function(item,idx){
                                return (<div key={'img'+idx} style={{backgroundImage: 'url('+item+')',backgroundSize:'100% 100%'}}></div>)
                            })}
                        </div>
                        </div>)
            }

}