import React from 'react'
// import { TabBar } from 'antd-mobile';
// import 'antd-mobile/dist/antd-mobile.css';
// import PropTypes from 'prop-types';
import { hashHistory } from 'react-router'

import '../../libs/icon/iconfont.css'

// import './app.scss'

import FooterComponent from '../common/footer/footerComponent.js'

export default class AppCompont extends React.Component{
  render(){
    return(
      <div>
        <div>{this.props.children}</div>
        <FooterComponent />
      </div>
    )
  }
}


