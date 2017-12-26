import React from 'react'
import {connect} from 'react-redux'

import {Link,hashHistory} from 'react-router'

import './x_collect.scss'
import * as CollectAction from './x_collect_attion.js'

class CollectComponent extends React.Component {
	render(){
		return (
			<div className="x_collect">
				<div className="x_collect_head">
					<i className="iconfont icon-arrowleft" onClick={this.back.bind(this)}></i>
					<p className="x_c_title">我的收藏</p>
				</div>
				<div className="x_collect_options">
						<p className="x_action">商品</p>
						<p>晒单</p>
				</div>
				<div className="x_collect_content">
					<ul>
						{
							this.props.dataset.map(function(obj,index){
								return 	<li key={1+index} onClick={this.push_detail.bind(this)} data-id={obj.guId}>
											<div className="x_collect_img">
												<img src={obj.imgUrl} />
											</div>
											<div className="x_collect_decoration">
												<p>{obj.name}</p>
												<span>￥{obj.price}</span>
												<p>收藏时间: {obj.regtime}</p>
											</div>
										</li>
							}.bind(this))
						}
					</ul>
				</div>

				<div className="x_collect_over">
					<p className="tc">已经全部加载完毕</p>
				</div>
			</div>
		)
	}

	componentDidMount(){
		this.props.getData('collect.php',{username: localStorage.username});
		console.log(this.props.dataset)
	}

	// 返回上一级
	back(){
		this.props.router.goBack();
	}

	// 跳转到详情页
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
		dataset: state.collect.response || [] // 
	}
}

export default connect(mapToState,CollectAction)(CollectComponent);