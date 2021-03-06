import React from 'react'
import {connect} from 'react-redux'
import {Link,hashHistory} from 'react-router'

import './x_say.scss'

import * as OrderAction from '../x_order/x_order_action.js'

class SayComponent extends React.Component {
	render(){
		return (
			<div className="x_say">
				<div className="x_say_head">
					<i className="iconfont icon-arrowleft" onClick={this.back.bind(this)}></i>
					<p className="x_c_title">我的评论</p>
				</div>
				<div className="x_say_options">
						<p className="x_action" onClick={this.change.bind(this)}>发出的评论</p>
						<p>收到的评论</p>
				</div>
				<div className="x_say_content">
					<ul>
						{
							this.props.dataset.map(function(obj,idx){
								return <li key={'1'+idx} data-id={obj.guid} onClick={this.push_detail.bind(this)}>
									<div className="x_say_user"><div>
										<i className="iconfont icon-home"></i></div><span>{obj.username}</span>
										<p className="">"{obj.Comment}"</p>
									</div>

								<div className="x_say_g_content">
									<p>{obj.name}</p>
									<p>￥{obj.price}</p>
									<p className="ellText">{obj.details}</p>
								</div>
								</li>
							}.bind(this))
						}
					</ul>
				</div>

				<div className="x_say_over">
					<p className="tc">已经全部加载完毕</p>
				</div>
			</div>
		)
	}

	componentDidMount(){
		this.props.getData('say.php',{username:localStorage.username});
	}

	change(event){
		this.props.getData('say.php',{username:localStorage.username});
	}

	// 返回上一级
	back(){
		this.props.router.goBack();
	}

	// 跳转详情
	push_detail(event){
		let gid = event.target.parentElement.parentElement.dataset.id;
		if(gid){
			let path = '/commodity/' + gid;
			hashHistory.push(path);
		}
	}
}

const mapToState = function(state){
	console.log(state);
	return {
		dataset: state.order.response || []
	}
}

export default connect(mapToState,OrderAction)(SayComponent);