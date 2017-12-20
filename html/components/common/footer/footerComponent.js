import React from 'react'
import ReactDOM from 'react-dom'
import './footer.css'
import { hashHistory } from 'react-router'
// import FooterAction from './footerAction.js'

export default class FooterComponent extends React.Component{
    changeRouter(event){
        const route = event.target.attributes['name'].value;
        const arr = document.getElementsByName(route);
        const ul = arr[0].parentNode;

        for(var i=0;i<ul.children.length;i++){
            ul.children[i].className ='';
        }
        
        switch (route) {
            case 'toIndex':
                arr[0].className = 'changeRed';
                hashHistory.push('products');//例子：主页
                break;
            case 'toType':
                arr[0].className = 'changeRed';
                hashHistory.push('type');
                break;
            case 'toCart':
                arr[0].className = 'changeRed';
                hashHistory.push('cart');
                break;
            case 'toMine':
                arr[0].className = 'changeRed';
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
                            return <li key={'footer'+idx} onClick={this.changeRouter} name={name[idx]}><i name={name[idx]} className={'iconfont '+ icon[idx]} key={'icon1'+idx}></i><p name={name[idx]} key={'icon2'+idx}>{item}</p></li>
                        }.bind(this))
                    }
                </ul>
            </div>
        )
    }
}