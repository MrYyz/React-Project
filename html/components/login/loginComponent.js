import React from 'react'
import ReactDOM from 'react-dom'
// import './login.scss'
import { hashHistory, Link } from 'react-router';
import { connect } from 'react-redux';

import * as LoginAction from './loginAction.js'

// import { Icon } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'

import Spinner from '../spinner/spinnerComponent.js'

class LoginComponent extends React.Component{
    state = {
        show:false
    }
    login(){
        const username = document.getElementsByClassName('loginNumber')[0].children[0].value;
        const password = document.getElementsByClassName('loginPsw')[0].children[0].value;
        if(username && password){
            const params = {
                username:username,
                password:password
            }
            const url = "login.php"
        this.props.LoginAction(url,'get',params);
        }
    }
    componentWillUpdate(nextProps, nextState){
        // console.log('componentWillUpdate=',this.props.type)
        console.log('componentWillUpdate=',nextProps, nextState)
        if(nextProps.type == 0){
            nextState.show = true;
        }else{
            nextState.show = false;
        }
    }
    componentDidUpdate(prevProps, prevState){
        // console.log('componentDidUpdate=',this.props.type)
        // console.log('componentDidUpdate=',prevProps, prevState)
    }
    componentDidMount(){
        // 未实现loading效果
        console.log()
    }
    back(){
        this.props.router.goBack();
    }
    render(){
        return(
            <div className="login">
                <Spinner show={this.state.show}/>
                <div className="loginHeader">
                    <span className="iconfont icon-fanhui" onClick={this.back.bind(this)}></span>
                </div>
                <div className="loginMain">
                    <h2 className="loginTitle"><span>账号登陆</span></h2>
                    <div className="loginNumber"><input type="text" placeholder="手机号码"/></div>
                    <div className="loginPsw"><input type="text" placeholder="输入密码"/></div>
                    <div className="toLogin"><input type="button" value="登陆" onClick={this.login.bind(this)}/></div>
                    <div className="toRegister"><Link to="/register">立即注册</Link></div>
                </div>
            </div>
        )
    }
}

const mapToState = function(state){
    return{
        type:state.LoginReducer.status,
        dataset:state.LoginReducer.body || [],
    }
}

export default connect(mapToState,LoginAction)(LoginComponent)