import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

import './x_address.scss'
import * as AddressAction from './x_address_action.js'

class AddressComponent extends React.Component {
	render(){
		return (
			<div className="x_address">
				<div className="x_address_head">
					<i className="iconfont icon-arrowleft" onClick={this.back.bind(this)}></i>

					<p className="x_c_title">地址管理</p>
					<span onClick={this.add.bind(this)}>新增</span>
				</div>
				<div className="x_address_body">
					<ul>
						{
							this.props.dataset.map(function(obj,idx){
								return <li key={'1'+idx} data-id={obj.id} data-uid={obj.uid} onClick={this.choice_add.bind(this)} ><div className="x_address_top"><div>
									<span ref="aname">{obj.rname}</span>
									<span>{obj.phone}</span>
								</div>
								<div><p>{obj.address}</p></div>
							</div>
							<div className="x_address_bottom">
								<div>
									<p onClick={()=>{this.set_default(obj.id,obj.username)}}>
										<i className={obj.default === "0"?"iconfont icon-gouxuananniu":"iconfont icon-danxuananniu-weixuan"}></i><span>设为默认</span>
									</p>
								</div>
								<div>
									<p><i className="iconfont icon-xiepinglun"></i><span onClick={this.ed.bind(this)}>编辑</span></p>
									<p><i className="iconfont icon-shouhuodizhi"></i><span onClick={this.del.bind(this)}>删除</span></p>
								</div>
							</div>
						</li>
							}.bind(this))
						}
					</ul>
				</div>

				<div className="x_address_over">
					<p className="tc">新增配送地址</p>
				</div>
			</div>
		)
	}

	//跳回订单传地址
	choice_add(event){
		if(this.props.params.order_guid){
			let address_id = '';
			let pathord = '';
			if(event.target.tagName.toLowerCase() == 'span' || event.target.tagName.toLowerCase() == 'p'){
				address_id = event.target.parentElement.parentElement.parentElement.dataset.id;
				pathord = '/order_p/' + this.props.params.order_guid + '/' + address_id;
				hashHistory.push(pathord);
			}else{
				address_id = event.target.parentElement.parentElement.dataset.id;
				pathord = '/order_p/' + this.props.params.order_guid + '/' + address_id;
				hashHistory.push(pathord);
			}
			
		}
	}

	// 这里的username是登陆时的username,其他地方一样
	componentDidMount(){
		this.props.getData('address.php',{username: localStorage.username});
		// console.log(this.props.dataset)
	}

	state = {
		setI: ''
	}

	show(idx){
		console.log(this.state.setI,idx);
		// onClick={()=>{this.setState({setI: idx})}}
	}

	// 编辑收货地址
	ed(event){
		var aid = event.target.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id');
		hashHistory.push({
			pathname: 'edtAddress',
			query: {aid:aid,username:this.refs.aname.innerHTML,str:'编辑地址'}
		});
	}

	// 删除收货地址
	del(event){
		var aid = event.target.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id');
		var info = {
			id: aid,
			action: 'del'
		}
		this.props.getData('address.php',info);
	}

	// 添加收货地址
	add(){
		hashHistory.push({
			pathname: 'addAddress',
			query: {str: "添加收货地址"}
		});
	}

	// 返回上一级
	back(){
		this.props.router.goBack();
	}

	// set_cl(idx){
	// 	return idx === this.state.setI?"iconfont icon-gouxuananniu":"iconfont icon-danxuananniu-weixuan";
	// }

	// 设置默认地址
	set_default(val,username){
		// console.log(val);
		this.props.getData('set.php',{action:'setDefault',id: val,username:username});
	}
}

const mapToState = function(state){
	return {
		dataset: state.address.response || []
	}
}

export default connect(mapToState,AddressAction)(AddressComponent);