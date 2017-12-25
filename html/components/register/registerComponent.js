import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory, Link } from 'react-router';

import { connect } from 'react-redux'
import './register.scss'
import Spinner from '../spinner/spinnerComponent.js'
import * as RegisterAction from "./registerAction.js"

class RegisterComponent extends React.Component{
    state = {
        show:false
    }
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
            this.props.RegisterAction(url,method,params)
        }else{
            alert('请填写完成信息！')
        }
    }
    back(){
        this.props.router.goBack();
    }
    componentWillUpdate(nextProps, nextState){
        if(nextProps.type == 0){
            nextState.show = true;
        }else{
            nextState.show = false;
            if(nextProps.category[0]){
                switch (Object.keys(nextProps.category[0])[0]){
                    case 'phone_exist':
                        alert('电话号码已被注册！');
                        break;
                    case "username_exist":
                        alert('昵称已被占用！');
                        break;
                    case "insert_success":
                        alert("恭喜您，注册成功！");
                        var storage = window.localStorage;
                        storage["phone"] = nextProps.category[0].phone;
                        storage["username"] = nextProps.category[0].username;
                        // console.log(storage);
                        // 直接返回上一步
                        this.back();
                        break;
                }
            }
        }
    }
    render(){
        return(
            <div id="register">
                <Spinner  show={this.state.show}/>
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
    // console.log('registerComponent`s mapToState',state)
    return{
        type:state.RegisterReducer.status,
        category:state.RegisterReducer.body || state.RegisterReducer.text
    }
}

export default connect(mapToState,RegisterAction)(RegisterComponent)