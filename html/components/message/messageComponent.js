import React from 'react'
import ReactDOM from 'react-dom'
import {Link,hashHistory} from "react-router"
import {connect} from 'react-redux'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile'
import { Modal, List, WingBlank } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'
import './messasge.scss'

import * as MessageAction from './messageAction.js'

class MessageComponent extends React.Component{
    state = {
        modal1: false,
        systemContent:'',
        systemID:'',
        msgType:'',
        existUser:false
    }
    componentWillMount(){
    }
    componentDidMount(){
        const storage = window.localStorage;
        const curUsername = storage.username;
        const curPhone = storage.phone;
        const curPassword = storage.password;
        if(curUsername){
            const url = "message.php";
            const method = 'post';
            const params = {
                username : curUsername,
                phone : curPhone,
                password : curPassword
            }
            this.props.MessageAction(url,method,params);
            this.setState({existUser : true});
        }

    }

    back(){
        this.props.router.goBack();
    }


    closest(el, selector) {
      const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
      while (el) {
        if (matchesSelector.call(el, selector)) {
          return el;
        }
        el = el.parentElement;
      }
      return null;
    }
    showModal = (key,value,_id,_type) => (e) => {
      e.preventDefault(); // 修复 Android 上点击穿透
      this.setState({[key]: true,systemContent:value,systemID:_id,msgType:_type});
    }
    onClose = key => () => {
        this.setState({[key]: false});
        const storage = window.localStorage;
        // console.log(storage)
        const params = {
          msgType:this.state.msgType,
          id:this.state.systemID,
          phone:storage.phone,
          username:storage.username,
        }
        const url = "message.php";
        const method = 'post';
        this.props.MessageAction(url,method,params);
      // 关闭的时候发送请求修改消息是否已读？
    }
    toCommodity(event){
        const guId = event.target.getAttribute('data-id');
        // console.log('/commodity/'+guId)
        hashHistory.push('/commodity/'+guId)
    }
    render(){
        const style1 = { 
            display: 'flex', 
            height: '100%', 
        };
        const style2 = { 
            display: 'flex', 
            height: '100%', 
            background:"url('html/img/msgbc.jpg') no-repeat center"
        };
        const TabsStyle = {
            fontSize:'0.266667rem',
            height:'0.4rem',
            lineHeight:'0.4rem',
            padding:'0 0.133333rem',
        }
        const tabs = [
          { title: <Badge text={'0'} style={TabsStyle}>晒单</Badge> },
          { title: <Badge text={'今日('+this.props.goodsMsg.length+')'} style={TabsStyle}>商品</Badge> },
          { title: <Badge dot>系统</Badge> },
        ];
        return(
            <div id="message">
                <h2 className="MsgHeader">
                    <span className="iconfont icon-fanhui" onClick={this.back.bind(this)}></span>
                    我的消息
                    <i className='iconfont icon-wxbpinpaibao'></i>
                </h2>

                <div className="MsgMain">
                    <Tabs tabs={tabs} initialPage={1} 
                      onChange={(tab, index) => { console.log('onChange', index, tab); }}
                      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                        <div style={function(){if(this.state.existUser){return style1;}else{return style2}}.bind(this)()}>
                            <ul className="orderMsg"><li>{this.props.orderMsg}</li></ul>
                        </div>
                        <div style={function(){if(this.state.existUser){return style1;}else{return style2}}.bind(this)()}>

                            <ul className="goodsMsg">
                                {
                                    function(){
                                        if(this.state.existUser){
                                            if(this.props.goodsMsg.length){
                                                return this.props.goodsMsg.map((item,idx)=>{
                                                    // console.log(item)
                                                    return <li key={item+idx} data-id={item.guId} onClick={this.toCommodity}><div data-id={item.guId}><img src={item.imgUrl}  data-id={item.guId}/></div><div data-id={item.guId}><p data-id={item.guId}><span data-id={item.guId}>{item.name}</span><span data-id={item.guId}>{'￥'+item.price}</span></p><p data-id={item.guId}><span data-id={item.guId}>类型：{item.type}</span><span data-id={item.guId}>{item.status}</span></p><p data-id={item.guId}><span data-id={item.guId}>详情：{item.details}</span><span data-id={item.guId}>{item.regtime}</span></p></div></li>
                                                })
                                            }else{
                                                return <li style={{fontSize:'0.4rem',textAlign:'center',width:'100%',paddingTop:'1rem'}}>暂无消息</li>
                                            }
                                        }
                                    }.bind(this)()
                                }
                            </ul>
                        </div>
                        <div style={function(){if(this.state.existUser){return style1;}else{return style2}}.bind(this)()}>
                            <ul className="system">
                                {
                                    function(){
                                        if(this.state.existUser){
                                            if(this.props.system.length && this.state.existUser){
                                                return this.props.system.map((item,idx)=>{
                                                    return <li key={item+idx} onClick={this.showModal('modal1',item.content,item.id,'system')}><div><img src={item.img}/></div><div><p><span style={function(){if(item.status == 1) return {color:'#ccc'};}()}>{item.content}</span><span>{item.regtime}</span></p></div></li>
                                                })
                                            }else{
                                                return <li style={{fontSize:'0.4rem',textAlign:'center',width:'100%',paddingTop:'1rem'}}>暂无消息</li>
                                            }
                                        }
                                    }.bind(this)()
                                }
                            </ul>
                        </div>
                    </Tabs>
                    <Modal visible={this.state.modal1} transparent maskClosable={true} onClose={this.onClose('modal1')} title="系统消息" footer={[{ text: 'Ok', onPress: () => { console.log('ok'); this.onClose('modal1')(); } }]} wrapProps={{ onTouchStart: this.onWrapTouchStart }} >
                        <div>
                            {this.state.systemContent}
                        </div>
                    </Modal>
                </div>
            </div>
        )
    }
}


const mapToState = function(state){
    console.log(state)
    return{
        type:state.MessageReducer.status,
        system:state.MessageReducer.system  || [],//系统消息
        goodsMsg:state.MessageReducer.goodsMsg  || [],//收藏商品(更新信息)
        orderMsg:state.MessageReducer.orderMsg  || [],//晒单
    }
}

export default connect(mapToState,MessageAction)(MessageComponent)


// <li key={item+idx} data-id={item.guId} onClick={this.toCommodity}><div data-id={item.guId}><img src={item.imgUrl}  data-id={item.guId}/></div><div data-id={item.guId}><p data-id={item.guId}><span data-id={item.guId}>{item.name}</span><span data-id={item.guId}>{'￥'+item.price}</span></p><p data-id={item.guId}><span data-id={item.guId}>类型：{item.type}</span><span data-id={item.guId}>{item.status}</span></p><p data-id={item.guId}><span data-id={item.guId}>详情：{item.details}</span><span data-id={item.guId}>{item.regtime}</span></p></div></li>