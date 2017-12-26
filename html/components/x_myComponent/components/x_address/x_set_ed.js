import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

import '../x_set/x_set.scss'
// import '../x_set/x_set.scss'
import * as AddressAction from './x_address_action.js'

class EdtComponent extends React.Component {
	render(){
		return (
			<div className="x_set">
				<div className="x_set_head">
					
				<i className="iconfont icon-arrowleft" onClick={this.back.bind(this)}></i>
					<p className="x_c_title">{this.props.location.query.str}</p>
					<Link to="address"><span onClick={this.update.bind(this)}>保存</span></Link>
					
				</div>
				<div className="x_set_body">
						{
							this.props.datasetEd.map(function(obj,index){
								if(obj.id === this.props.location.query.aid){
									return <ul key={0+index}>
											<li key={3+index}>
												<span>手机号</span>
												<input type="text" ref="sj" defaultValue={obj.phone} />
											</li>
											<li key={1+index}>
												<span>收货人</span>
												<input type="text" ref="r" defaultValue={obj.rname} />
											</li>
											<li key={2+index}>
												<span>地址</span>
												<input type="text" ref="dz" defaultValue={obj.address} />
											</li>
										</ul>
								}
							}.bind(this))
						}
				</div>
			</div>
		)
	}

	componentDidMount(){
		var aid = this.props.location.query.aid;
		var username = this.props.location.query.username;
		// this.props.getData('address.php');
		// console.log(this.props.location);
		this.props.getData('address.php',{id: aid,username:username});
	}

	// 编辑地址
	update(){
		var info = {
			id: this.props.location.query.aid,
			address: this.refs.dz.value,
			phone: this.refs.sj.value,

			// 收货人名字
			username: localStorage.username,
			rname: this.refs.r.value,
			action: 'update'
		}
		// console.log(info);
		this.props.getData('address.php',info);
	}

	// 返回上一级
	back(){
		this.props.router.goBack();
	}
}

const mapToState = function(state){
	console.log(state);
	return {
		datasetEd: state.address.response || []
	}
}

export default connect(mapToState,AddressAction)(EdtComponent);