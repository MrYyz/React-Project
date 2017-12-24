import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import AppComponent from '../components/app/appComponent'

import ProductsComponent from '../components/products/productsComponent'

import CartComponent from '../components/cart_p/cartComponent'
import CommentsComponent from '../components/comments_p/commentsComponent'
import Order_pComponent from '../components/order_p/orderComponent'



import CommodityComponet from '../components/commodity_p/commodityComponent.js'
import '../libs/icon/iconfont.css'
import 'antd-mobile/dist/antd-mobile.css';


import IndexComponent from '../components/index/indexComponent'
import Indexregist from '../components/indexregist/indexregist'
import LoginComponent from '../components/login/loginComponent.js'
import RegisterComponent from '../components/register/registerComponent.js'

import '../libs/base.css'


import MyComponent from '../components/x_myComponent/x_my/x_my.js'
import CollectComponent from '../components/x_myComponent/components/x_collect/x_collect.js'
import SayComponent from '../components/x_myComponent/components/x_say/x_say.js'
import OrderComponent from '../components/x_myComponent/components/x_order/x_order.js'
import SetComponent from '../components/x_myComponent/components/x_set/x_set.js'
import AddressComponent from '../components/x_myComponent/components/x_address/x_address.js'
import HelpComponent from '../components/x_myComponent/components/x_help/x_help.js'
import EdtComponent from '../components/x_myComponent/components/x_set/x_set_ed.js'
import EdtAddress from '../components/x_myComponent/components/x_address/x_set_ed.js'
import AddComponent from '../components/x_myComponent/components/x_address/x_address_add.js'

export default class RootRouter extends React.Component{
    render(){
        return(
            <Router history={hashHistory}>
                <Route path="/" component={AppComponent}>
                    <Route path="products" component={ProductsComponent}></Route>
                    <Route path="my" component={MyComponent}></Route>
                    <Route path="order" component={OrderComponent}></Route>
                    <Route path="collect" component={CollectComponent}></Route>
                    <Route path="say" component={SayComponent}></Route>
                    <Route path="set" component={SetComponent}></Route>
                    <Route path="address" component={AddressComponent}></Route>
                    <Route path="help" component={HelpComponent}></Route>
                    <Route path="edt" component={EdtComponent}></Route>
                    <Route path="edtAddress" component={EdtAddress}></Route>
                    <Route path="addAddress" component={AddComponent}></Route>
                    <Route path="cart" component={CartComponent}></Route>
                </Route>
                <Route path="index" component={IndexComponent}></Route>
                <Route path="regist" component={Indexregist}></Route>
                <Route path="/login" component={LoginComponent}></Route>
                <Route path="/register" component={RegisterComponent}></Route>
                <Route path="/commodity(/:guId)" component={CommodityComponet}></Route>
                <Route path="/comments(/:guId)" component={CommentsComponent}></Route>
                <Route path="/order_p(/:order_guid)" component={Order_pComponent}></Route>
            </Router>
        )
    }
}
