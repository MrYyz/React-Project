import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

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
								return <li key={'1'+idx} data-id={obj.guid}>
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
							})
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
		this.props.getData('say.php',{username:'jack'});
	}

	change(event){
		this.props.getData('say.php',{username:'jack'});
	}

	// 返回上一级
	back(){
		this.props.router.goBack();
	}
}

const mapToState = function(state){
	console.log(state);
	return {
		dataset: state.order.response || []
	}
}

export default connect(mapToState,OrderAction)(SayComponent);