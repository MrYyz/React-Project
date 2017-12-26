import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';

import '../../libs/base.css'

import '../../libs/icon/iconfont.css'
import './ruihuan.scss'

export default class RuihuanComponent extends React.Component{
    thereturn(){
        // hashHistory.push('index');
        this.props.router.goBack();
    }
        render(){
            return (<div className="iconfont">
                         <div className="ruihuan-header">
                                    <span className="icon-arrowleft" onClick={this.thereturn.bind(this)}></span>
                                    <span>优惠卷-比呀比亚海外购</span>          
                         </div>
                         <div className="youhui">
                            <div className="youhui1"> </div> 
                            <div className="youhui2">
                                <p>
                                    <span>免邮券</span>
                                    <span>10元免邮券</span>
                                </p>
                                <p>兌换条件：100积分+0金币</p>
                                <p>剩余：4422件</p>
                            </div>   
                        </div>
                        <div className="rlues1">
                            <p>优惠额度 ： 10</p>
                            <p>有效日期 ： 自兌换30天</p>
                            <p>剩余卷数： 4672</p>
                        </div>
                        <div className="rlues2">
                            <h3>使用说明</h3>
                            <p>此为10元邮卷，可以抵扣一张订单运费的10元</p>
                            <p>使用时间：自兌换起30天内</p>
                            <p>使用范围：此卷为比呀比平台通用卷，仅限于抵扣国际邮费，手机app端，电脑端</p>
                            <p>特别说明： 本卷仅限在活动时间内使用，逾期作废。免邮卷可到会员中心我的优惠卷那里查看。</p>
                            
                        </div>
                  </div>)
        }  

}

