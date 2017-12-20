import React from 'react'
import { hashHistory } from 'react-router'
import '../../libs/icon/iconfont.css'

import FooterComponent from '../common/footer/footerComponent.js'

export default class AppCompont extends React.Component{
  render(){
    return(
      <div>
        <div>{this.props.children}</div>
        <FooterComponent/>
      </div>
    )
  }
}
