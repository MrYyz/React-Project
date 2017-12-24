import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory, Link } from 'react-router';

import { connect } from 'react-redux'

import './register.scss'

import * as RegisterAction from "./registerAction.js"

class RegisterComponent extends React.Component{
    register(){
        console.log('Runing registerComponent`s register function')
        const phone = document.getElementsByClassName('registerNumber')[0].children[0].value
        const code = document.getElementsByClassName('registerCode')[0].children[0].value || 'null'
        const username = document.getElementsByClassName('registerUsername')[0].children[0].value
        const password = document.getElementsByClassName('registerPsw')[0].children[0].value
        
        if(phone && code && username && password){
            const url = 'register.php'
            const method = 'post'
            const params = { phone,code,username,password }
            // console.log(this.props.RegisterAction)
            this.props.RegisterAction(url,method,params)
        }else{
            alert('请填写完成信息！')
        }
    }
    back(){
        this.props.router.goBack();
    }
    render(){
        return(
            <div id="register">
                <div className="registerHeader">
                    <h2>
                        <span className="iconfont icon-fanhui" onClick={this.back.bind(this)}></span>
                    </h2>
                </div>

                <div className="registerMain">
                    <h2 className="registerTitle"><span>用户注册</span></h2>
                    <div className="registerNumber">
                        <input type="text" placeholder="手机号码"/>
                    </div>
                    <div className="registerCode">
                        <i>
                            <input type="text" placeholder="验证码" disabled/>
                        </i>
                        <span>
                            <input type="button" value="发送验证码" disabled/>
                        </span>
                    </div>
                    <div className="registerUsername">
                        <input type="text" placeholder="昵称"/>
                    </div>
                    <div className="registerPsw">
                        <input type="text" placeholder="密码"/>
                    </div>
                    <div className="toRegister">
                        <input type="button" value="完成" onClick={this.register.bind(this)}/>
                    </div>
                    <div className="protocol">
                        <span>注册即代表您同意</span>
                        <Link to="/protocol">《比呀比用户协议》</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapToState = function(state){
    console.log('registerComponent`s mapToState')
    return{

    }
}

export default connect(mapToState,RegisterAction)(RegisterComponent)