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
        this.props.getOrderData('order_p.php',{order_guid:this.props.params.order_guid,username:'carl'},'get');
        setTimeout(()=>{
            let total = 0;
            console.log(this.refs);
            for(var attr in this.refs){
                console.log(this.refs[attr].children[4].children[1].children[0])
                total += this.refs[attr].children[4].children[1].children[0].innerHTML*1;
            }
            for(var i=0;i<this.props.dataset_p1.length;i++){
                total += this.props.dataset_p1[i].total*1;
            }
            this.setState({rental:total});
        },500)
    }
    //单个商品的合计
    rental_g(ele,total){
        if(this.refs[ele] != undefined){
            let freight = this.refs[ele].children[2].children[0].children[0].innerHTML;
            let discounts = this.refs[ele].children[3].children[1].children[0].innerHTML;
            let tot = this.refs[ele].children[4].children[1].children[0];
            return tot.innerText = total - freight - discounts;
        }
    }
    render(){
        return(
            <div id="order_p">
                <div className="header">
                    <i className="iconfont icon-fanhui"></i>
                    确认订单
                </div>
                <div className="main">
                    <div className="hint">
                        <div><i className="iconfont icon-tishi"></i></div>
                        <div>
                            <p>小提示：如遇到商品价格上涨、卖家限购、缺货或下单时已过促销期等原因，会导致直购不成功，所付款项将全额原路返回，请比友理解</p>
                        </div>
                    </div>
                    <div className="address">
                        {
                            this.props.dataset_p2.map((obj,idx)=>{
                                if(obj.default == '0'){
                                    return <div key={obj.id}><p><span>收货人：<i>{obj.rname}</i></span><span>{obj.phone}</span></p><div><p><i className="iconfont icon-dizhi"></i></p><p>收货地址：<i>{obj.address}</i></p></div></div>
                                }
                            })
                        }
                        
                        <i className="iconfont icon-arrowleft"></i>
                    </div>
                    <div className="com_order">
                        <ul>
                            {
                                this.props.dataset_p1.map((item,index)=>{
                                    return <li key={item.guId} ref={item.guId}><div className="commodity"><div><img src="/html/imgs/b.jpg" /></div><div><p>{item.name}</p><p>x <span>{item.goodsQty}</span></p><p>￥<span>{item.price}</span></p></div></div><p>商品价格 <span>￥<i>{item.total}</i></span></p><p>运费 <span>￥<i>1000.00</i></span></p><p><i className="iconfont icon-youhuiquan"></i>优惠卷 <span>-￥<i>0.00</i></span></p><div>共<span>5</span>件商品，合计<span>￥<i>{this.rental_g(item.guId,item.total)}</i></span></div></li>
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
                    <div>提交订单</div>
                </div>
            </div>
        )
    }
}

const mapToState = function(store){
    console.log(store.Order_p.data1,store.Order_p.data2)
    return {
        dataset_p1: store.Order_p.data1 || [],
        dataset_p2: store.Order_p.data2 || [],
    }
}
export default connect(mapToState, OrderAction)(OrderComponent);

// <li>
//     <div className="commodity">
//         <div><img src="/html/imgs/b.jpg" /></div>
//         <div>
//             <p>商品名字</p>
//             <p>x <span>5</span></p>
//             <p>￥<span>125.00</span></p>
//         </div>
//     </div>
//     <p>商品价格 <span>￥<i>625.00</i></span></p>
//     <p>运费 <span>￥<i>0.00</i></span></p>
//     <p><i className="iconfont icon-youhuiquan"></i>优惠卷 <span>-￥<i>0.00</i></span></p>
//     <div>共<span>5</span>件商品，合计<span>￥<i>625.00</i></span></div>
// </li>
// <li>
//     <div className="commodity">
//         <div><img src="/html/imgs/b.jpg" /></div>
//         <div>
//             <p>商品名字</p>
//             <p>x <span>5</span></p>
//             <p>￥<span>125.00</span></p>
//         </div>
//     </div>
//     <p>商品价格 <span>￥<i>625.00</i></span></p>
//     <p>运费 <span>￥<i>0.00</i></span></p>
//     <p><i className="iconfont icon-youhuiquan"></i>优惠卷 <span>-￥<i>0.00</i></span></p>
//     <div>共<span>5</span>件商品，合计<span>￥<i>625.00</i></span></div>
// </li>
// 
// <div>
//     <p><span>收货人：<i>彭先生</i></span><span>13510001000</span></p>
//     <div>
//         <p><i className="iconfont icon-dizhi"></i></p>
//         <p>收货地址：<i>广东省广州市天河区元岗路188号xxxx产业园</i></p>
//     </div>
// </div>