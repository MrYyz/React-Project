import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, hashHistory,Link} from 'react-router'
import * as OrderAction from './orderAction'
import './order.scss';


class OrderComponent extends React.Component{
    state = {
        rental: 0,
    }
    componentDidMount(){
        if(this.props.params.id){
            this.props.getOrderData('order_p.php',{order_guid:this.props.params.order_guid,username:'carl',id:this.props.params.id},'get');
        }else{
            this.props.getOrderData('order_p.php',{order_guid:this.props.params.order_guid,username:'carl'},'get');
        }
        setTimeout(()=>{
            let total = 0;
            this.setState({rental:0});
            for(var i=0;i<this.props.dataset_p1.length;i++){
                total += this.props.dataset_p1[i].total*1;
            }
            this.setState({rental:total.toFixed(2)});
        },500)
    }
    //单个商品的合计
    rental_g(ele,total){
        if(this.refs[ele] != undefined){
            let freight = this.refs[ele].children[2].children[0].children[0].innerHTML;
            let discounts = this.refs[ele].children[3].children[1].children[0].innerHTML;
            let tot = this.refs[ele].children[4].children[1].children[0];
            return tot.innerText = (total - freight - discounts).toFixed(2);
        }
    }
    //跳转地址管理
    skip_address(){
        let pathad = '/address/' + this.props.params.order_guid;
        hashHistory.push(pathad);
    }
    //完成并跳转我的页面
    finish(){
        this.props.getOrderData('order_p.php',{order_guid:this.props.params.order_guid,username:'carl',sort:'finish',order_status:'已完成',id:this.props.params.id},'get');
        hashHistory.push('/My');
    }
    //返回键跳转
    skipBack(){
        this.props.router.goBack();
    }
    //消单
    deleteord(){
        this.props.getOrderData('order_p.php',{order_guid:this.props.params.order_guid,username:'carl',sort:'dele'},'get');
        this.props.router.goBack();
    }
    render(){
        return(
            <div id="order_p">
                <div className="header">
                    <i className="iconfont icon-fanhui" onClick={this.skipBack.bind(this)}></i>
                    确认订单
                    <span onClick={this.deleteord.bind(this)}>消单</span>
                </div>
                <div className="main">
                    <div className="hint">
                        <div><i className="iconfont icon-tishi"></i></div>
                        <div>
                            <p>小提示：如遇到商品价格上涨、卖家限购、缺货或下单时已过促销期等原因，会导致直购不成功，所付款项将全额原路返回，请比友理解</p>
                        </div>
                    </div>
                    <div className="address" onClick={this.skip_address.bind(this)}>
                        {
                            this.props.dataset_p2.map((obj,idx)=>{
                                if(obj.default == '0'){
                                    return <div key={idx}><p><span>收货人：<i>{obj.rname}</i></span><span>{obj.phone}</span></p><div><p><i className="iconfont icon-dizhi"></i></p><p>收货地址：<i>{obj.address}</i></p></div></div>
                                }else if(this.props.params.id){
                                    return <div key={idx}><p><span>收货人：<i>{obj.rname}</i></span><span>{obj.phone}</span></p><div><p><i className="iconfont icon-dizhi"></i></p><p>收货地址：<i>{obj.address}</i></p></div></div>
                                }
                            })
                        }
                        
                        <i className="iconfont icon-arrowleft"></i>
                    </div>
                    <div className="com_order">
                        <ul>
                            {
                                this.props.dataset_p1.map((item,index)=>{
                                    return <li key={item.guId} ref={item.guId}><div className="commodity"><div><img src="/html/imgs/b.jpg" /></div><div><p>{item.name}</p><p>x <span>{item.goodsQty}</span></p><p>￥<span>{item.price}</span></p></div></div><p>商品价格 <span>￥<i>{item.total}</i></span></p><p>运费 <span>￥<i>0.00</i></span></p><p><i className="iconfont icon-youhuiquan"></i>优惠卷 <span>-￥<i>0.00</i></span></p><div>共<span>5</span>件商品，合计<span>￥<i>{this.rental_g(item.guId,item.total)}</i></span></div></li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="serve">
                        <p>当您选择了我们的服务，即表示您接受比呀比的</p>
                        <p>《服务条款》</p>
                    </div>
                </div>
                <div className="footer">
                    <div>总计 ￥<span id="rental">{this.state.rental}</span></div>
                    <div onClick={this.finish.bind(this)}>提交订单</div>
                </div>
            </div>
        )
    }
}

const mapToState = function(store){
    console.log(store.Order_p.data1)
    return {
        dataset_p1: store.Order_p.data1 || [],
        dataset_p2: store.Order_p.data2 || [],
    }
}
export default connect(mapToState, OrderAction)(OrderComponent);
