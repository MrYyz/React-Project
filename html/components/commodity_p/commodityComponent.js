import React from 'react';
import {connect} from 'react-redux';
import { Carousel , WhiteSpace, WingBlank} from 'antd-mobile';
import {Router, Route, hashHistory,Link} from 'react-router'
import * as CommodityAction from './commodityAction'
import './commodity.scss';
import Spinner_p from '../spinner/spinnerComponent.js'

class CommodityComponent extends React.Component{
    state = {
        data: [],
        degree:0,//小弹窗的类型：收藏或点赞
        shopQty:0,//购物车的数量
        status_p: '',
        show:false
    }
    //轮播图
    componentDidMount() {
        // let initparams = this.props.location.query.guId
        let initparams = this.props.params.guId;//接受传来的id
        this.props.getComData('commodity_p.php',{guId:initparams,username:'carl'},'get')
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['b', 'i', 'p'],
          });
          //显示购物车的数量
          this.shopqty(this.props.dataset_p5);
        }, 100);
    }

    //点赞
    zan(){
        this.refs.upwin.classList.add('upwin_active');
        this.refs.upwin.innerHTML = '已点赞';
        if(this.refs.zan.children[0].children[0].classList.contains('zan_active') == false){
            this.refs.zan.children[0].children[0].classList.add('zan_active');
            let zanQty = this.refs.zan.children[1].children[0].innerHTML;
            this.refs.zan.children[1].children[0].innerHTML = zanQty*1+1;
        }
        setTimeout(()=>{
            this.refs.upwin.classList.remove('upwin_active');
        },1000)
    }
    //收藏
    collect(){
        let icon = this.refs.collect.children[0].children[0];
        if(icon.classList.contains('col_active') == false){
            icon.classList.add('col_active');
            this.refs.upwin.classList.add('upwin_active');
            this.refs.upwin.innerHTML = '收藏';
            this.refs.collect.children[1].innerHTML = '已收藏';
            let time = this.state.degree + 1;
            this.setState({degree: time});
            this.props.getComData('commodity_p.php',{guId:this.props.params.guId,username:'carl',sort:'collect'},'get')
        }else{
            icon.classList.remove('col_active');
            this.refs.upwin.classList.add('upwin_active');
            this.refs.upwin.innerHTML = '取消收藏';
            this.refs.collect.children[1].innerHTML = '收藏';
            this.setState({degree: 0})
            this.props.getComData('commodity_p.php',{guId:this.props.params.guId,username:'carl',sort:'nocollect'},'get')
        }
        setTimeout(()=>{
            this.refs.upwin.classList.remove('upwin_active');
        },500)
    }
    //跳转购物车
    skip_gw(){
        hashHistory.push({
            pathname:'/cart',
        });
    }
    //弹窗的数量增减
    dec_qty(event){
        let minqty = event.target.nextElementSibling.innerHTML;
        event.target.nextElementSibling.innerHTML = minqty*1 - 1;
        if(event.target.nextElementSibling.innerHTML<=0){
            event.target.nextElementSibling.innerHTML = 1;
        }
        
    }
    inc_qty(event){
        let qty = event.target.previousElementSibling.innerHTML;
        event.target.previousElementSibling.innerHTML = qty*1 + 1;
    }
    //立即购买
    buy_p(){
        this.refs.tanc.classList.add('tanc_ative');
        this.setState({status_p: 'buy_p'})
    }
    //加入购物车
    shopCart(){
        this.refs.tanc.classList.add('tanc_ative');
        this.setState({status_p: 'join_p'})
    }
    //弹窗消失
    cancel_p(){
        this.refs.tanc.classList.remove('tanc_ative');
    }
    shopqty(data){
        let shopqty = 0;
        for(let i=0;i<data.length;i++){
            shopqty += data[i].goodsQty*1;
        }
        this.setState({shopQty:shopqty})
    }
    //确认按钮
    verify_p(){
        let initparams = this.props.params.guId;
        if(this.state.status_p == 'join_p'){
            //确认加入购物车
            this.props.getComData('commodity_p.php',{guId:initparams,username:'carl',goodsQty:this.refs.comqty_p.innerHTML,sort:'join'},'get');
            this.refs.tanc.classList.remove('tanc_ative');
            this.refs.upwin.classList.add('upwin_active');
            this.refs.upwin.innerHTML = '已加入购物车';
            setTimeout(()=>{
                this.shopqty(this.props.dataset_p5);
                this.refs.upwin.classList.remove('upwin_active');
            },500)
        }else if(this.state.status_p == 'buy_p'){
            //确认购买并跳转到订单页面
            let order_guid = 'g' + Date.now();
            let total = (this.refs.comqty_p.innerHTML*this.props.dataset_p1[0].price).toFixed(2);
            this.props.getComData('commodity_p.php',{guId:initparams,username:'carl',goodsQty:this.refs.comqty_p.innerHTML,order_guid:order_guid,order_status:'待付款',total:total,sort:'buy'},'get')
            let path = '/order_p/' + order_guid;
            hashHistory.push(path);
        }
    }
    //猜你喜欢跳转
    skipCom(event){
        let eleLi = event.target.parentElement.parentElement;
        let path = '/commodity/' + eleLi.dataset.id;
        if(eleLi.tagName.toLowerCase() == 'li'){
            hashHistory.push(path);
            this.props.getComData('commodity_p.php',{guId:eleLi.dataset.id,username:'carl'},'get')
            // location.reload();
        }
    }
    //跳转评论
    comments(){
        let path = '/comments/' + this.props.params.guId;
        hashHistory.push(path);
    }
    //返回键
    backtrack(){
        this.props.router.goBack();
    }
    index_p(){
        hashHistory.push('/');
    }
    //loading层
    componentWillUpdate(nextProps, nextState){
        if(nextProps.loadStatus == 0){
            nextState.show = true;
        }else if(nextProps.loadStatus == 1){
            nextState.show = false;
        }
        //收藏图标是否高亮
        if(nextProps.dataset_p6.length>0){
            this.refs.collect.children[0].children[0].classList.add('col_active');
        }else{
            this.refs.collect.children[0].children[0].classList.remove('col_active');
        }
    }
    render(){
        return (
            <div id="commodity_p">
                <div className="header">
                    <i className="iconfont icon-fanhui" onClick={this.backtrack.bind(this)}></i>
                    商品详情
                    <i className="iconfont icon-shouye1" onClick={this.index_p.bind(this)}></i>
                </div>
                <div className="main">
                    <div className='banner'>
                        <WingBlank>
                            <Carousel
                              autoplay={false}
                              infinite
                              selectedIndex={1}
                              style={{width:'8.0rem',margin:'0 auto'}}
                              dotStyle={{width:'0.266667rem',height:'0.266667rem',backgroundColor:'#FFAB00'}}
                              dotActiveStyle={{width:'0.266667rem',height:'0.266667rem',backgroundColor:'#FC0E4A'}}
                            >
                              {this.state.data.map(ii => (
                                  <img  
                                    key={ii}                          
                                    src={`./html/imgs/${ii}.jpg`}
                                    alt=""
                                    style={{ height:'5.333333rem',width:'8.0rem',verticalAlign: 'top' }}
                                    onLoad={() => {
                                      window.dispatchEvent(new Event('resize'));
                                      this.setState({ imgHeight: 'auto' });
                                    }}/>
                              ))}
                            </Carousel>
                            <WhiteSpace />
                        </WingBlank>
                    </div>
                    <div>
                        <div className="datalists">
                            {
                                this.props.dataset_p1.map(function(obj,indx){
                                    return <div key={obj.guId}><p>{obj.name}</p><div className="price">￥<span>{obj.price}</span></div><div className="brand"><span>{obj.brand}</span> 供货</div></div>
                                }.bind(this))
                            }
                            
                            <div className="ensure_p">
                                <span>海外直购</span>
                                <span>正品保证</span>
                                <span>物流透明</span>
                                <span>贴心售后</span>
                            </div>
                        </div>
                        <div className="details">
                            <div>
                                <p><span>商品概述</span></p>
                                {
                                    this.props.dataset_p1.map(function(objs,idex){
                                        return <p key={objs.id}>{objs.details}</p>
                                    }.bind(this))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="comment">
                        <div>
                            <div className="comment_t">
                                <span>商品评论</span>
                                <span onClick={this.comments.bind(this)}><i className="iconfont icon-xiepinglun"></i>写评论</span>
                            </div>
                            <div className="comment_c">
                                <ul>
                                    {
                                        this.props.dataset_p3.map(function(item,index){
                                            return<li key={item.id}><div><img src="/html/imgs/1.png" /></div><div><p>{item.username}</p><p>{item.discussTime}</p><p>{item.Comment}</p></div></li>
                                        })
                                    }
                                    
                                </ul>
                            </div>
                            <div className="comment_b">
                                <span onClick={this.comments.bind(this)}>更多评论</span>
                            </div>
                        </div>
                    </div>
                    <div className="correlation">
                        <p>猜你喜欢</p>
                        <ul className="clearfix">
                            {
                                
                                this.props.dataset_p4.map(function(item,idx){
                                    if(item.guId != this.props.params.guId){
                                        return<li key={item.guId} data-id={item.guId} onClick={this.skipCom.bind(this)}><div><img src="/html/imgs/b.jpg" /></div><div><p>{item.name}</p></div><div><p>￥ {item.price}</p></div></li>
                                    }
                                }.bind(this))

                            }
                        </ul>
                    </div>
                </div>
                <div className="footer">
                    <div className="footer_z">
                        <ul>
                            <li onClick={this.zan.bind(this)} ref="zan">
                                <p><i className="iconfont icon-zan1"></i></p>
                                <p>赞 <span>5</span></p>
                            </li>
                            <li onClick={this.collect.bind(this)} ref="collect">
                                <p><i className="iconfont icon-shoucang"></i></p>
                                <p>收藏</p>
                            </li>
                            <li onClick={this.skip_gw.bind(this)}>
                                <p><i className="iconfont icon-gouwuche"></i></p>
                                <p>购物车</p>
                                <span>{this.state.shopQty}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="footer_c" onClick={this.shopCart.bind(this)}>
                        加入购物车
                    </div>
                    <div className="footer_y" onClick={this.buy_p.bind(this)}>
                        立即购买
                    </div>
                    <div className="upWin" ref="upwin"></div>
                </div>
                <div className="tanc" ref="tanc">
                    <div className="shade"></div>
                    <div className="upWin2" ref="upwin2">
                        {
                            this.props.dataset_p1.map((obj,ide)=>{
                                return <div className="win_t clearfix" key={obj.id}><div><img src="/html/imgs/b.jpg" /></div><div><p>{obj.name}</p><p>￥<span>{obj.price}</span></p></div><div><i onClick={this.cancel_p.bind(this)}>&times;</i></div></div>
                            })
                        }
                        
                        <div className="win_c">
                            <p>商品属性</p>
                            <p><span>默认</span></p>
                            <p>数量</p>
                            <p>
                                <span>
                                    <i onClick={this.dec_qty.bind(this)}>-</i><span ref="comqty_p">1</span><i onClick={this.inc_qty.bind(this)}>+</i>
                                </span>
                            </p>
                            <p><i>请注意！</i>以上信息（颜色、尺码表等）均由官网提供，仅供参考用。</p>
                        </div>
                        <div className="win_b" onClick={this.verify_p.bind(this)}>
                            确&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;认
                        </div>
                    </div>
                </div>
                <Spinner_p show={this.state.show}/>
            </div>
        )
    }
}
const mapToState = function(store){
    return {
        loadStatus: store.Commodity_p.status,
        dataset_p1: store.Commodity_p.data1 || [],
        dataset_p2: store.Commodity_p.data2 || [],
        dataset_p3: store.Commodity_p.data3 || [],
        dataset_p4: store.Commodity_p.data4 || [],
        dataset_p5: store.Commodity_p.data5 || [],
        dataset_p6: store.Commodity_p.data6 || [],
    }
}
export default connect(mapToState, CommodityAction)(CommodityComponent);

// <li>
//     <div><img src="/html/imgs/b.jpg" /></div>
//     <p>商品名字</p>
//     <p>￥ <span>99.99</span></p>
// </li>
// 
// 
// <li>
//     <div>
//         <img src="/html/imgs/1.png" />
//     </div>
//     <div>
//         <p>username</p>
//         <p>评论时间</p>
//         <p>评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容</p>
//     </div>
// </li>
// 
// <div className="datalists">
//     <p>
//         djlfjsljlfjdslfjlsjdfljsdlfsdfsd
//     </p>
//     <div className="price">
//         ￥<span>90.00</span>
//     </div>
//     <div className="brand">
//         <span>Jomashop</span> 供货
//     </div>
//     <div className="ensure_p">
//         <span>海外直购</span>
//         <span>正品保证</span>
//         <span>物流透明</span>
//         <span>贴心售后</span>
//     </div>
// </div>
// 
// <div className="win_t clearfix">
//     <div>
//         <img src="/html/imgs/b.jpg" />
//     </div>
//     <div>
//         <p>商品名字</p>
//         <p>￥<span>99.00</span></p>
//     </div>
//     <div>
//         <i onClick={this.cancel_p.bind(this)}>&times;</i>
//     </div>
// </div>