import React from 'react'
import ReactDOM from 'react-dom'
import './footer.css'
import { hashHistory } from 'react-router'
// import FooterAction from './footerAction.js'

export default class FooterComponent extends React.Component{
    changeRouter(event){
        // var cur = document.getElementsByClassName('')
        const route = event.target.getAttribute('data-id');
        switch (route) {
            case 'toIndex':
                hashHistory.push('products');//例子：主页
                break;
            case 'toType':
                hashHistory.push('type');
                break;
            case 'toCart':
                hashHistory.push('cart');
                break;
            case 'toMine':
                hashHistory.push('mine');
                break;
        }
    }
    render(){
        const footer = ['首页','分类','购物车','我']
        const name = ['toIndex','toType','toCart','toMine']
        const icon = ['icon-shouye','icon-leimupinleifenleileibie','icon-gouwuche','icon-home'];
        return(
            <div className="footer">
                <ul>
                    {
                        footer.map(function(item,idx){
                            return <li key={'footer'+idx} onClick={this.changeRouter} data-id={name[idx]}><i data-id={name[idx]} className={'iconfont '+ icon[idx]} key={'icon1'+idx}></i><p data-id={name[idx]} key={'icon2'+idx}>{item}</p></li>
                        }.bind(this))
                    }
                </ul>
            </div>
        )
    }
}