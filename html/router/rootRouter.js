import React from 'react'
import {Router, Route, hashHistory} from 'react-router'
import AppComponent from '../components/app/appComponent'
import ProductsComponent from '../components/products/productsComponent'
import CartComponent from '../components/cart_p/cartComponent'
import CommentsComponent from '../components/comments_p/commentsComponent'
import OrderComponent from '../components/order_p/orderComponent'



import CommodityComponet from '../components/commodity_p/commodityComponent.js'
import '../libs/icon/iconfont.css'
import 'antd-mobile/dist/antd-mobile.css';

import '../libs/base.css'

export default class Routes extends React.Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={AppComponent}>
                    <Route path="products" component={ProductsComponent}></Route>
                    <Route path="cart" component={CartComponent}></Route>
                </Route>
                <Route path="/commodity(/:guId)" component={CommodityComponet}></Route>
                <Route path="/comments(/:guId)" component={CommentsComponent}></Route>
                <Route path="/order(/:order_guid)" component={OrderComponent}></Route>
            </Router>
        )  
    }
}