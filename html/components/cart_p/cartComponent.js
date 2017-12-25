import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router'
import * as CartAction from './cartAction'
import './cart.scss'

class CartComponent extends React.Component{
    state = {
        allQty: 0,
    }
    //点击加减，数量相应变化
    add_quantity(event){
        let qty = event.target.previousElementSibling.innerHTML;
        event.target.previousElementSibling.innerHTML = qty*1 + 1;
        let elLi = event.target.parentElement.parentElement.parentElement
        this.props.getCartData('cart_p.php',{guId:elLi.dataset.id,username:'carl',goodsQty:event.target.previousElementSibling.innerHTML,sort:'updata'},'get')
        this.all_qty();
    }
    min_quantity(event){
        let minqty = event.target.nextElementSibling.innerHTML;
        event.target.nextElementSibling.innerHTML = minqty*1 - 1;
        if(event.target.nextElementSibling.innerHTML<=0){
            event.target.nextElementSibling.innerHTML = 1;
        }
        let elLi = event.target.parentElement.parentElement.parentElement
        this.props.getCartData('cart_p.php',{guId:elLi.dataset.id,username:'carl',goodsQty:event.target.nextElementSibling.innerHTML,sort:'updata'},'get')
        this.all_qty();
    }
    //全选
    all_choose(event){
        let choose = document.querySelectorAll('.o_choose');
        for(var i=0;i<choose.length;i++){
            choose[i].checked = event.target.checked;
            if(choose[i].checked){
                choose[i].nextElementSibling.classList.add('active');
                event.target.nextElementSibling.classList.add('active'); 
            }else{
                choose[i].nextElementSibling.classList.remove('active');
                event.target.nextElementSibling.classList.remove('active');
            }
        }
        this.all_qty();
    }
    //单选
    choose(event){
        let allchoose = document.querySelector('#all_choose');
        let choose = document.querySelectorAll('.o_choose');
        if(event.target.checked){
            event.target.nextElementSibling.classList.add('active');
        }else{
            event.target.nextElementSibling.classList.remove('active');
        }
        for(var i=0;i<choose.length;i++){
            choose[i].onclick = function(){
                allchoose.checked = this.isCheckAll();
                if(allchoose.checked){
                  allchoose.nextElementSibling.classList.add('active');
                }else{
                    allchoose.nextElementSibling.classList.remove('active');
                }
            }.bind(this)
        }
        this.all_qty();
    }
    // 封装#all勾选状态函数
    // * 如果所有的choose勾选，则#all勾选
    // * 只有有一个choose未勾选，则#all取消勾选
    isCheckAll(){
        // 假设hobby全部勾选
        let res = true;
        let choose = document.querySelectorAll('.o_choose');
        for(var i=0;i<choose.length;i++){
            if(!choose[i].checked){
                res = false;
                break;
            }
        }
        return res;
    }
    //总量的显示
    all_qty(){
        let choose = document.querySelectorAll('.o_choose');
        let li = document.querySelectorAll('.ele_li');
        let all = 0;
        for(var i=0;i<choose.length;i++){
            if(choose[i].checked){
                let qty = li[i].lastElementChild.lastElementChild.firstElementChild.nextElementSibling.innerHTML*1;
                all += qty;
            }
        }
        this.setState({allQty: all})
    }
    //删除
    delete_p(){
        let choose = document.querySelectorAll('.o_choose');
        let li = document.querySelectorAll('.ele_li');
        for(var i=0;i<choose.length;i++){
            if(choose[i].checked){
                this.props.getCartData('cart_p.php',{guId:li[i].dataset.id,username:'carl',sort:'del'},'get')
            }
        }
    }
    //数据请求
    componentDidMount(){
        this.props.getCartData('cart_p.php',{username:'carl'},'get')
    }
    //跳转详情页
    skip(event){
        let eleLi = event.target.parentElement.parentElement;
        let path = '/commodity/' + eleLi.dataset.id;
        hashHistory.push(path)
    }
    //跳转订单页面
    skip_ord(){
        console.log(666)
        let choose = document.querySelectorAll('.o_choose');
        let li = document.querySelectorAll('.ele_li');
        let order_guid = 'g' + Date.now();
        for(var i=0;i<choose.length;i++){
            if(choose[i].checked){
                let qty = li[i].lastElementChild.lastElementChild.firstElementChild.nextElementSibling.innerHTML*1;
                let price = li[i].children[2].children[1].children[0].innerHTML*1;
                this.props.getCartData('cart_p.php',{guId:li[i].dataset.id,username:'carl',goodsQty:qty,order_guid:order_guid,order_status:'待付款',total:qty*price,sort:'order'},'get')
            }
        }
        let path = '/order_p/' + order_guid;
        hashHistory.push(path);
    }
    //跳转帮助
    skip_help(){
        hashHistory.push('/');
    }
    render(){
        return (
            <div id="cart_p">
                <div className="header">
                    购物车
                    <span onClick={this.delete_p.bind(this)}>删除</span>
                </div>
                <div className="main">
                    <ul ref="ele_ul">
                        {
                            this.props.dataset_p.map(function(item,index){
                                return <li className="ele_li" data-id={item.guId} key={item.id}><div><div><input type="checkbox" className="o_choose" onClick={this.choose.bind(this)}/><i className="iconfont icon-gouxuananniu"></i></div></div><div><img src="/html/imgs/b.jpg"  onClick={this.skip.bind(this)}/></div><div><p  onClick={this.skip.bind(this)}>{item.name}</p><span>单价：￥<i>{item.price}</i></span><div><i onClick={this.min_quantity.bind(this)}>-</i><span>{item.goodsQty}</span><i onClick={this.add_quantity.bind(this)}>+</i></div></div></li>
                            }.bind(this))
                        }
                    </ul>
                    <div onClick={this.skip_help.bind(this)}>遇到问题？</div>
                </div>
                <div className="footer">
                    <div>
                        <div>
                            <input type="checkbox" id="all_choose" onClick={this.all_choose.bind(this)}/>
                            <i className="iconfont icon-gouxuananniu"></i>
                        </div>
                    </div>
                    <div>全选</div>
                    <div onClick={this.skip_ord.bind(this)}>结算（<span id="all_quantity"> {this.state.allQty} </span>）</div>
                </div>
            </div>
        )
    }
}
const mapToState = function(store){
    return {
        dataset_p: store.Cart_p.response || [],
    }
}
export default connect(mapToState, CartAction)(CartComponent);

// <li className="ele_li">
//     <div>
//         <div>
//             <input type="checkbox" id="o_choose" onClick={this.choose.bind(this)}/>
//             <i className="iconfont icon-gouxuananniu"></i>
//         </div>
//     </div>
//     <div>
//         <img src="/html/imgs/b.jpg"/>
//     </div>
//     <div>
//         <p>登陆手机发了多少积分来得及防雷接地酸辣粉</p>
//         <span>单价：￥<i>99.00</i></span>
//         <div>
//             <i onClick={this.min_quantity.bind(this)}>-</i><span>4</span><i onClick={this.add_quantity.bind(this)}>+</i>
//         </div>
//     </div>
// </li>
// <li className="ele_li">
//     <div>
//         <div>
//             <input type="checkbox" id="o_choose" onClick={this.choose.bind(this)}/>
//             <i className="iconfont icon-gouxuananniu"></i>
//         </div>
//     </div>
//     <div>
//         <img src="/html/imgs/b.jpg"/>
//     </div>
//     <div>
//         <p>登陆手机发了多少积分来得及防雷接地酸辣粉</p>
//         <span>单价：￥<i>99.00</i></span>
//         <div>
//             <i onClick={this.min_quantity.bind(this)}>-</i><span>4</span><i onClick={this.add_quantity.bind(this)}>+</i>
//         </div>
//     </div>
// </li>
// <li className="ele_li">
//     <div>
//         <div>
//             <input type="checkbox" id="o_choose" onClick={this.choose.bind(this)}/>
//             <i className="iconfont icon-gouxuananniu"></i>
//         </div>
//     </div>
//     <div>
//         <img src="/html/imgs/b.jpg"/>
//     </div>
//     <div>
//         <p>登陆手机发了多少积分来得及防雷接地酸辣粉</p>
//         <span>单价：￥<i>99.00</i></span>
//         <div>
//             <i onClick={this.min_quantity.bind(this)}>-</i><span>4</span><i onClick={this.add_quantity.bind(this)}>+</i>
//         </div>
//     </div>
// </li>
// <li className="ele_li">
//     <div>
//         <div>
//             <input type="checkbox" id="o_choose" onClick={this.choose.bind(this)}/>
//             <i className="iconfont icon-gouxuananniu"></i>
//         </div>
//     </div>
//     <div>
//         <img src="/html/imgs/b.jpg"/>
//     </div>
//     <div>
//         <p>登陆手机发了多少积分来得及防雷接地酸辣粉</p>
//         <span>单价：￥<i>99.00</i></span>
//         <div>
//             <i onClick={this.min_quantity.bind(this)}>-</i><span>4</span><i onClick={this.add_quantity.bind(this)}>+</i>
//         </div>
//     </div>
// </li>