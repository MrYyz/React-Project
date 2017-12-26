import React from 'react'
import ReactDOM from 'react-dom'
import './login.scss'
import { hashHistory, Link } from 'react-router';
import { connect } from 'react-redux';

import * as LoginAction from './loginAction.js'

import Spinner from '../spinner/spinnerComponent1.js'

class LoginComponent extends React.Component{
    state = {
        show:false,
        curPhone:'',
        curUsername:'',
        curPsw:''
    }
    login(){
        const username = document.getElementsByClassName('loginNumber')[0].children[0].value;
        const password = document.getElementsByClassName('loginPsw')[0].children[0].value;
        if(username && password){
            const params = {
                username:username,
                password:password,
            }
            const url = "login.php";
        this.props.LoginAction(url,'get',params);
        }
    }
    componentWillUpdate(nextProps, nextState){
        const username = document.getElementsByClassName('loginNumber')[0].children[0].value;
        const password = document.getElementsByClassName('loginPsw')[0].children[0].value;
        if(username == '' || password == '') return;
        if(nextProps.type){
            if(nextProps.type == 0){
                nextState.show = true;
            }else{
                nextState.show = false;
                if(nextProps.dataset.length){
                    this.back();//登陆成功--页面跳转  ????
                    // hashHistory.push('register')
                }else{
                    alert('登陆账号或密码有误！')
                }
            }
        }
    }
    componentDidUpdate(prevProps, prevState){
        // console.log('componentDidUpdate=1',this.props.dataset[0])
        if(this.props.dataset.length){
            var storage = window.localStorage;
            storage.setItem('phone',this.props.dataset[0].phone)
            storage.setItem('username',this.props.dataset[0].username)
            storage.setItem('password',this.props.dataset[0].password)
            storage.setItem('id',this.props.dataset[0].id)
            // console.log('componentDidUpdate=2',this.props.dataset[0],storage)
        }
    }
    componentWillMount(){
        const storage = window.localStorage;
        this.state.curPhone = storage.phone;
        this.state.curUsername = storage.username;
    }
    componentDidMount(){

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
                    <div className="loginNumber"><input type="text" placeholder="手机号码" defaultValue={this.state.curPhone}/></div>
                    <div className="loginPsw"><input type="text" placeholder="输入密码"/></div>
                    <div className="toLogin"><input type="button" value="登陆" onClick={this.login.bind(this)}/></div>
                    <div className="toRegister"><span>忘记密码?</span><Link to="/register">立即注册</Link></div>
                </div>
            </div>
        )
    }
}

const mapToState = function(state){
    console.log('state111',state)
    return{
        type:state.LoginReducer.status,
        dataset:state.LoginReducer.body || [],
    }
}

export default connect(mapToState,LoginAction)(LoginComponent)