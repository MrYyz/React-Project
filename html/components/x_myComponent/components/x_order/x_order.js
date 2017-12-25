import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import './x_order.scss'

import * as OrderAction from './x_order_action.js'
import http from 'superagent'

class OrderComponent extends React.Component {
	constructor(){
		super()
		this.state = {
			content: [
				{item: '全部'},
				{item: '待付款'},
				{item: '已完成'},
				{item: '已关闭'}
			]
		}
	}
	render(){
		return (
			<div className="x_order">
				<div className="x_order_head">
					<i className="iconfont icon-arrowleft" onClick={this.back.bind(this)}></i>
					<p className="x_c_title">订单管理</p>
				</div>
				<div className="x_order_options" id="x_options">
						{
							this.state.content.map(function(obj,idx){
								return <p key={1+idx} onClick={(ev)=>{this.setState({index:idx});this.change(ev)}} className={this.tab(idx)}>{obj.item}</p>
							}.bind(this))
						}
				</div>

				<div className="x_order_content">
					<ul>
						{
							this.props.dataset.map(function(obj,index){
								return 	<li key={'1'+index} data-oid={obj.order_guid}><div className="x_order_goods_content"><div className="x_ordert_img">
								<img src="./case.png" />
								</div><div className="x_order_decoration">
								<div className="x_o_d_left">
								<p className="">{obj.name}</p></div>
								<div className="x_o_d_right">
								<span>￥{obj.price}</span>
								<del>￥{obj.price}</del>
								<p>x{obj.goodsQty}</p></div>
								</div></div>
								<div className="x_order_result">
								<div className="x_order_state"><p>{obj.order_status}</p></div>
								<p>共<i>{obj.goodsQty}</i>件商品 合计:￥<em>{obj.total}</em></p>
								</div>
								<div className="x_order_action">
								<p>
								<span onClick={this.close_order.bind(this)} className={obj.order_status == "待付款"?"close_show":"close_hidden"}>关闭订单</span>
								<i className={obj.order_status == "待付款"?"close_show iconfont icon-shouhuodizhi1":"close_hidden"}></i>
								<span onClick={this.del_order.bind(this)}>删除订单</span>
								<i className="iconfont icon-shouhuodizhi"></i>
								</p>
								</div>
								
								</li>
							}.bind(this))
						}
					</ul>
				</div>

				<div className="x_order_over">
					<p className="tc">已经全部加载完毕</p>
				</div>
			</div>
		)
	}

	state = {
		index: 0,
	}

	componentDidMount(){
		var s = this.props.location.query.state;
		console.log(s);
		if(!s || s == '所有订单') s = "全部";
		this.props.getData('order.php',{state: s,username: localStorage.username});
	}

	change(ev){
		this.props.getData('order.php',{state:ev.target.innerHTML,username: localStorage.username});
	}

	tab(idx){
		return idx === this.state.index?"x_active":"";
		// console.log(idx,cl);
	}

	// 返回上一级
	back(){
		this.props.router.goBack();
	}

	// 删除订单
	del_order(event){
		let o_state = {
			0: "全部",
			1: "待付款",
			2: "已完成",
			3: "已关闭"
		}

		// console.log(o_state[this.state.index]);
		let oid = event.target.parentElement.parentElement.parentElement.dataset.oid;
		if(oid){
			this.props.getData('order.php',{action:"del",oid: oid,state:o_state[this.state.index],username: localStorage.username});
		}
	}

	// 关闭订单
	close_order(event){
		let o_state = {
			0: "全部",
			1: "待付款",
			2: "已完成",
			3: "已关闭"
		}
		let oid = event.target.parentElement.parentElement.parentElement.dataset.oid;
		// console.log(oid);
		if(oid){
			this.props.getData('order.php',{action:"close",oid: oid,state:o_state[this.state.index],username: localStorage.username});
		}
	}
}

const mapToState = function(state){
	console.log(state);
	return {
		dataset: state.order.response || []
	}
}

//export default OrderComponent;
export default connect(mapToState,OrderAction)(OrderComponent);