import React from 'react'
<<<<<<< HEAD
=======
// import './app.scss'

>>>>>>> da09e3886d50c05dc0a816586d0d3efefd89eb36

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
