import React from 'react'
import {Link,hashHistory} from 'react-router'
import {connect} from 'react-redux'

import './x_set.scss'
import * as SetAction from './x_set_action.js'

class SetComponent extends React.Component {
	render(){
		return (
			<div className="x_set">
				<div className="x_set_head">
					
				<i className="iconfont icon-arrowleft" onClick={this.back.bind(this)}></i>
					<p className="x_c_title">个人资料</p>
					
					<span onClick={this.ed}>编辑</span>
				</div>
				<div className="x_set_body">

						{
							this.props.dataset.map(function(obj,index){
								return <ul key={1+index}>
											<li>
												<span>昵称</span>
												<span>{obj.username}</span>
											</li>
											<li>
												<span>邮箱</span>
												<span>{obj.email}</span>
											</li>
											<li>
												<span>手机号</span>
												<span>{obj.phone}</span>
											</li>
										</ul>
							})
						}

				</div>
				<div className="x_set_footer">
					<p>退出当前账号</p>
				</div>
			</div>
		)
	}
	// 编辑个人资料
	ed(){
		// console.log(this.props.dataset[0].username);
		hashHistory.push({
			pathname: 'edt'
		})
	}
	componentDidMount(){
		this.props.getData('person.php',{username:'123'});
	}

	// 返回上一级
	back(){
		this.props.router.goBack();
	}
}

const mapToState = function(state){
	// console.log(state);
	return {
		dataset: state.set.response || []
	}
}

export default connect(mapToState,SetAction)(SetComponent);