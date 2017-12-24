import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

import './x_set.scss'
import * as OrderAction from '../x_order/x_order_action.js'

class EdtComponent extends React.Component {
	render(){
		return (
			<div className="x_set">
				<div className="x_set_head">
					
				<i className="iconfont icon-arrowleft" onClick={this.back.bind(this)}></i>
					<p className="x_c_title">个人资料</p>
					
					<Link to="set"><span onClick={this.save.bind(this)}>保存</span></Link>
				</div>
				<div className="x_set_body">
						{
							this.props.dataset.map(function(obj,index){
								return <ul key={0+index}>
											<li key={2+index}>
												<span>邮箱</span>
												<input type="text" ref="yx" defaultValue={obj.email} />
											</li>
											<li key={3+index}>
												<span>手机号</span>
												<input type="text" ref="sj" defaultValue={obj.phone} />
											</li>
										</ul>
							})
						}
				</div>
			</div>
		)
	}
	componentDidMount(){
		this.props.getData('person.php',{username:'123'});
	}

	save(){
		// console.log(this.refs)
		var info = {
			username: this.props.dataset[0].username,
			email: this.refs.yx.value,
			phone: this.refs.sj.value,
			action: 'update'
		}
		this.props.getData('person.php',info);
	}

	// 返回上一级
	back(){
		this.props.router.goBack();
	}
}

const mapToState = function(state){
	return {
		dataset: state.order.response || []
	}
}

export default connect(mapToState,OrderAction)(EdtComponent);