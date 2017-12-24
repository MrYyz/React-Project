import React from 'react'
import {Link,hashHistory} from 'react-router'
import {connect} from 'react-redux'

import '../x_set/x_set.scss'
import * as AddressAction from './x_address_action.js'

class AddComponent extends React.Component {
	render(){
		return (
			<div className="x_set">
				<div className="x_set_head">
					
				<Link to="my"><i className="iconfont icon-arrowleft"></i></Link>
					<p className="x_c_title">{this.props.location.query.str}</p>
					<span onClick={this.save.bind(this)}>保存</span>
				</div>
				<div className="x_set_body">
					<ul>
						<li>
							<span>收货人</span>
							<input type="text" ref="r" />
						</li>
						<li>
							<span>地址</span>
							<input type="text" ref="dz" />
						</li>
					</ul>
				</div>
			</div>
		)
	}

	componentDidMount(){
		// this.props.getData('ad_tx.php',{username:'123'});
		// this.props.getData('address.php',this.props.location.query);
		// console.log()
	}

	// 添加收货地址
	save(){
		var info = {
			address: this.refs.dz.value,
			rname: this.refs.r.value,
			uid: this.props.datasetEd[0].uid,
			action: 'insert'
		}
		// console.log(info);
		this.props.getData('address.php',info);
		hashHistory.push({pathname:'address'});
	}
}

const mapToState = function(state){
	console.log(state);
	return {
		datasetEd: state.address.response || []
	}
}

export default connect(mapToState,AddressAction)(AddComponent);