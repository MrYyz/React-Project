import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import AppComponent from '../components/app/appComponent'

import IndexComponent from '../components/index/indexComponent.js'
import LoginComponent from '../components/login/loginComponent.js'
import RegisterComponent from '../components/register/registerComponent.js'
import MessageComponent from '../components/message/messageComponent.js'

export default class RootRouter extends React.Component{
    render(){
        return(
            <Router history={hashHistory}>
                <Route path="/" component={AppComponent}>
                    <Route path="index" component={IndexComponent}></Route>
                </Route>

                <Route path="/login" component={LoginComponent}></Route>
                <Route path="/register" component={RegisterComponent}></Route>
                <Route path="/message" component={MessageComponent}></Route>
            </Router>
        )
    }
}
