import React from 'react'
import ReactDOM from 'react-dom'
import './service.scss'
export default class ServiceComponent extends React.Component{
    back(){
        this.props.router.goBack();
    }
    render(){
        return(
            <div id="service">
                <div className="serviceHeader">
                    <h2>
                        <span className="iconfont icon-fanhui" onClick={this.back.bind(this)}></span>
                        比呀比
                    </h2>
                </div>
                <div className="serviceMain">
                    <div className="serviceToWeChat">
                        <div>
                            <div><img src="/html/img/wechat.jpg"/>客服微信<span><i className="iconfont icon-icon"/>帮助说明</span></div>
                            <div>比呀比公众号服务：***<span>复制</span></div>
                        </div>
                    </div>
                    <div className="serviceToPhone">
                        <div>
                            <div><img src="/html/img/phone.jpg"/>客服电话</div>
                            <div>比呀比客服电话：***<span>拨打</span></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
// export default ReactDOM.render(<ServiceComponent/>,document.getElementById('app'));