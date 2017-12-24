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
					<Link to="my"><i className="iconfont icon-arrowleft"></i></Link>
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
								return 	<li key={1+index}>
											<div className="x_collect_img">
												<img src="./case.png" />
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
		this.props.getData('collect.php',{username:'carl'});
		console.log(this.props.dataset)
	}
}

const mapToState = function(state){
	// console.log(state);
	return {
		dataset: state.collect.response || [] // 
	}
}

export default connect(mapToState,CollectAction)(CollectComponent);