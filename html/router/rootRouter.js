import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import AppComponent from '../components/app/appComponent'
<<<<<<< HEAD
import ProductsComponent from '../components/products/productsComponent'
import IndexComponent from '../components/index/indexComponent'
import Indexregist from '../components/indexregist/indexregist'
import LoginComponent from '../components/login/loginComponent.js'
import RegisterComponent from '../components/register/registerComponent.js'

export default class RootRouter extends React.Component{
    render(){
        return(
            <Router history={hashHistory}>
                <Route path="/" component={AppComponent}>
                    <Route path="products" component={ProductsComponent}></Route>
                </Route>
                <Route path="index" component={IndexComponent}></Route>
                <Route path="regist" component={Indexregist}></Route>
                <Route path="/login" component={LoginComponent}></Route>
                <Route path="/register" component={RegisterComponent}></Route>
            </Router>
        )
    }
}
