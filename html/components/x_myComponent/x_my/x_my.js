import React from 'react'
import ReactDOM from 'react-dom'
import {Link,hashHistory} from 'react-router'
import {connect} from 'react-redux'

import './x_my.scss'

import * as OrderAction from '../components/x_order/x_order_action.js'
// import * as Lvaction from '../components/x_lv/x_lv_action.js'

class Mycompoent extends React.Component {
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
							<p>一个个</p>
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
						<li>
							<i className="iconfont icon-iconfontxingxing" style={{color: '#32CEAA'}}></i>
							<span onClick={this.push_collect.bind(this)}>收藏</span>
						</li>
						<li>
							<i className="iconfont icon-youhuiquan x_big" style={{color: '#F7BD38'}}></i>
							<span>优惠券</span>
						</li>
						<li>
							<i className="iconfont icon-tips x_big" style={{color: '#E0427C'}}></i>
							<span>消息</span>
						</li>
						<Link to="say">
							<li>
								<i className="iconfont icon-xiaoxi" style={{color: '#B351E6'}}></i>
								<span>评论</span>
							</li>
						</Link>
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
						<li>
							<Link to="address">
								<div>
									<i className="iconfont icon-dizhi" style={{color: '#E0427C'}}></i>
									<span>地址管理</span>
								</div>
							</Link>
							<div>
								<i className="iconfont icon-arrow-down"></i>
							</div>
						</li>
						<li>
							<div>
								<i className="iconfont icon-kefu" style={{color: '#B351E6'}}></i>
								<span>联系客服</span>
							</div>
							<div>
								<i className="iconfont icon-arrow-down"></i>
							</div>
						</li>
						<li>
							<div>
								<i className="iconfont icon-bangzhu" style={{color: '#F7BD38'}}></i>
								<span>订阅</span>
							</div>
							<div>
								<i className="iconfont icon-arrow-down"></i>
							</div>
						</li>
						<li>
							<div>
								<i className="iconfont icon-pinglun" style={{color: '#56ABE4'}}></i>
								<span>爆料</span>
							</div>
							<div>
								<i className="iconfont icon-arrow-down"></i>
							</div>
						</li>
						<li>
							<div>
								<i className="iconfont icon-icon"></i>
								<span onClick={this.push_help}>帮助和说明</span>
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
		this.props.getData('lv.php',{username:'carl'});
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
			query: {username: '007'}
		})
	}

	// 消费等级

	// 帮助和说明
	push_help(){
		hashHistory.push({
			pathname: 'help',
		})
	}
}

const mapToState = function(state){
	// console.log(state);
	return {
		dataset: state.order.response || []
	}
}

export default connect(mapToState,OrderAction)(Mycompoent);