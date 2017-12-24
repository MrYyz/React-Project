import React from 'react'

import { hashHistory } from 'react-router'
import '../../libs/icon/iconfont.css'
import './app.scss'

import FooterComponent from '../common/footer/footerComponent.js'

export default class AppCompont extends React.Component{
  render(){
    return(
      <div id="overstory_p">
        <div className="main">{this.props.children}</div>
        <FooterComponent/>
      </div>
    )
  }
}
