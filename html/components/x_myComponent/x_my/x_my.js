import React from 'react'
import ReactDOM from 'react-dom'
import {Link,hashHistory} from 'react-router'
import {connect} from 'react-redux'

import './x_my.scss'

import * as OrderAction from '../components/x_order/x_order_action.js'
// import * as Lvaction from '../components/x_lv/x_lv_action.js'

class Mycompoent extends React.Component {
	toCoupon(){hashHistory.push('/ruihuan');}
	toMsg(){hashHistory.push('/message');}
	toComment(){hashHistory.push('/say');}
	toService(){hashHistory.push('/service');}
	toAddress(){hashHistory.push('/address');}
	render(){

		// 消费总量
		let total = 0;
		for(let i = 0; i<this.props.dataset.length; i++){
			total += Number(this.props.dataset[i].total);
		}
		// console.log(total);
		return (

			<div id="x_my">
				<div className="x_header">
					<div className="x_mySet">
						<Link to="set"><i className="iconfont icon-set"></i></Link>
					</div>
					<div className="x_myPic">
						<div>
							<i className="iconfont icon-home"></i>
							<p onClick={this.push_login.bind(this)}>{window.localStorage.username || "请登录"}</p>
						</div>
					</div>
					<div className="x_qiandao">
						<i className="iconfont icon-qiandao"></i>
						<span>签到</span>
					</div>
					<div className="x_lv">
						<ul>
							<li>等级 lv{Math.floor(total/2000)}</li>
							<li>积分<span>{Math.floor(total/10)}</span></li>
							<li>金币<span>0</span></li>
						</ul>
					</div>
				</div>
				<div className="x_nav">
					<ul>
						<li onClick={this.push_collect.bind(this)}>
							<i className="iconfont icon-iconfontxingxing" style={{color: '#32CEAA'}}></i><span>收藏</span>
						</li>
						<li onClick={this.toCoupon}>
							<i className="iconfont icon-youhuiquan x_big" style={{color: '#F7BD38'}}></i><span>优惠券</span>
						</li>
						<li onClick={this.toMsg}>
							<i className="iconfont icon-tips x_big" style={{color: '#E0427C'}}></i><span>消息</span>
						</li>
						<li onClick={this.toComment}>
							<i className="iconfont icon-xiaoxi" style={{color: '#B351E6'}}></i><span>评论</span>
						</li>
					</ul>
				</div>

				<div className="x_order_my">
					<Link to="order">
						<div className="x_order_my_head">
							<span>订单管理</span>
							<i className="iconfont icon-arrow-down"></i>
						</div>
					</Link>
					<div className="x_order_my_body">
						<ul>
							<li onClick={this.hash_push.bind(this)}>
								<i className="iconfont icon-daifukuan x_big"></i>
								<span>待付款</span>
							</li>
							<li onClick={this.hash_push.bind(this)}>
								<i className="iconfont icon-wancheng"></i>
								<span>已完成</span>
							</li>
							<li onClick={this.hash_push.bind(this)}>
								<i className="iconfont icon-suoyoudingdan x_big"></i>
								<span>所有订单</span>
							</li>
						</ul>
					</div>	
				</div>

				<div className="x_address">
					<ul>
						<li onClick={this.toAddress}>
							<div>
								<i className="iconfont icon-dizhi" style={{color: '#fff',backgroundColor:'#FE0E4D'}}></i>
								<span>地址管理</span>
							</div>
							<div>
								<i className="iconfont icon-arrow-down"></i>
							</div>
						</li>
						<li onClick={this.toService}>
							<div>
								<i className="iconfont icon-kefu" style={{color: '#fff',backgroundColor:'#B351E6'}}></i>
								<span>联系客服</span>
							</div>
							<div>
								<i className="iconfont icon-arrow-down"></i>
							</div>
						</li>
						<li>
							<div>
								<i className="iconfont icon-bangzhu" style={{color: '#fff',backgroundColor:'#F7BD38'}}></i>
								<span>订阅(暂未开发)</span>
							</div>
							<div>
								<i className="iconfont icon-arrow-down"></i>
							</div>
						</li>
						<li>
							<div>
								<i className="iconfont icon-pinglun" style={{color: '#fff',backgroundColor:'#56ABE4'}}></i>
								<span>爆料(暂未开发)</span>
							</div>
							<div>
								<i className="iconfont icon-arrow-down"></i>
							</div>
						</li>
						<li onClick={this.push_help}>
							<div>
								<i className="iconfont icon-icon" style={{color: '#fff',backgroundColor:'#32CEAA'}}></i>
								<span>帮助和说明</span>
							</div>
							<div>
								<i className="iconfont icon-arrow-down"></i>
							</div>
						</li>
					</ul>
				</div>
			</div>
		)
	}

	componentDidMount(){
		this.props.getData('lv.php',{username: localStorage.username});
	}

	// 
	state = {
		total: 0,
	}

	// 订单管理
	change(ev){
		this.props.getData('order.php',{state:ev.target.innerHTML});
	}

	// 订单管理
	hash_push(event){
		// console.log(event.target.innerHTML)
		hashHistory.push({
			pathname: 'order',
			query: {state: event.target.innerHTML}
		})
	}

	//我的收藏
	push_collect(event){
		hashHistory.push({
			pathname: 'collect',
			query: {state: event.target.innerHTML}
		})
	}

	// 地址管理
	push_address(){
		hashHistory.push({
			pathname: 'address',
			query: {username: localStorage.username}
		})
	}

	// 消费等级

	// 帮助和说明
	push_help(){
		hashHistory.push({
			pathname: 'help',
		})
	}

	// 如没登陆
	push_login(){
		hashHistory.push({
			pathname: 'login',
		})
	}
}

const mapToState = function(state){
	console.log(state);
	return {
		dataset: state.order.response || []
	}
}

export default connect(mapToState,OrderAction)(Mycompoent);