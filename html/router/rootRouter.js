import React from 'react'
import {Router, Route, hashHistory} from 'react-router'
import AppComponent from '../components/app/appComponent'
import ProductsComponent from '../components/products/productsComponent'
import IndexComponent from '../components/index/indexComponent'
import Indexregist from '../components/indexregist/indexregist'

export default (
    <Route path="/" component={AppComponent}>
        <Route path="products" component={ProductsComponent}></Route>
        <Route path="index" component={IndexComponent}>
            
        </Route>
        <Route path="regist" component={Indexregist}></Route>
        
    </Route>
)