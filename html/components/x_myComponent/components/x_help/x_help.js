import React from 'react'
import {Link} from 'react-router'

import './x_help.scss'

class HelpComponent extends React.Component {
	render(){
		return (
			<div className="x_help">
				<div className="x_help_head">
					<i className="iconfont icon-arrowleft" onClick={this.back.bind(this)}></i>
					<p className="x_c_title">帮助和说明</p>
				</div>
				<div className="x_help_body">
					<ul>
						<li>
							<span><i className="iconfont icon-all"></i>常见问题</span>
							<span><i className="iconfont icon-arrowleft"></i></span>
						</li>
						<li>
							<span><i className="iconfont icon-operate"></i>入门指南</span>
							<span><i className="iconfont icon-arrowleft"></i></span>
						</li>
						<li>
							<span><i className="iconfont icon-bangzhu"></i>购物流程</span>
							<span><i className="iconfont icon-arrowleft"></i></span>
						</li>
						<li>
							<span><i className="iconfont icon-suoyoudingdan"></i>订单中心</span>
							<span><i className="iconfont icon-arrowleft"></i></span>
						</li>
						<li>
							<span><i className="iconfont icon-shouhou"></i>售后政策</span>
							<span><i className="iconfont icon-arrowleft"></i></span>
						</li>
					</ul>
				</div>
			</div>
		)
	}

	// 返回上一级
	back(){
		this.props.router.goBack();
	}
}

export default HelpComponent;