import React from 'react'
// import { TabBar } from 'antd-mobile';
// import 'antd-mobile/dist/antd-mobile.css';
// import PropTypes from 'prop-types';
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

// class TabBarExample extends React.Component {constructor(props) {
//     super(props);
//     this.state = {
//       selectedTab: 'blueTab',
//       hidden: false,//控制 底部 (主页/分类/购物车/我) 是否显示
//     };
//   }
//   homes(event) {
//     hashHistory.push('home')
//   }
//   types(event) {
//     hashHistory.push('type')
//   }
//   carts(event) {
//     hashHistory.push('cart')
//   }
//   mines(event) {
//     hashHistory.push('mine')
//   }
//   renderContent(pageText) {
//     return (
//       <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
//         {this.props.children}
//       </div>
//     );
//   }

//   render() {
//     return (
      // <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0}}>
      //   <TabBar unselectedTintColor="#949494" tintColor="#f00" barTintColor="white" hidden={this.state.hidden} >


      //     <TabBar.Item title="主页" key="Life"
      //       icon={<div className="iconfont icon-shouye" style={{
      //         width: '0.666667rem',height: '0.666667rem','fontWeight':'bold','fontSize':'0.666667rem' }}
      //       />
      //       }
      //       selectedIcon={<div className="iconfont icon-shouye" style={{
      //         width: '0.666667rem',height: '0.666667rem','fontSize':'0.666667rem',fontWeight:'bold'}}
      //       />
      //       }
      //       selected={this.state.selectedTab === 'blueTab'}
      //       //badge={2}
      //       onPress={() => {
      //         this.setState({ selectedTab: 'blueTab' });
      //         //this.homes()
      //       }}
      //       //data-seed="logId"
      //     >
      //       {this.renderContent('Life')}
      //     </TabBar.Item>



      //     <TabBar.Item title="分类" key="Koubei"
      //       icon={ <div className="iconfont icon-leimupinleifenleileibie" style={{
      //           width: '0.666667rem',height: '0.666667rem','fontWeight':'bold','fontSize':'0.666667rem' }}
      //         />
      //       }
      //       selectedIcon={
      //         <div className="iconfont icon-leimupinleifenleileibie" style={{
      //           width: '0.666667rem',height:'0.666667rem','fontWeight':'bold','fontSize':'0.666667rem'}}
      //         />
      //       }
      //       //badge={'new'}
      //       selected={this.state.selectedTab === 'redTab'}
      //       onPress={() => {
      //         this.setState({ selectedTab: 'redTab' });
      //       //this.types()
      //       }}
      //       //data-seed="logId1"
      //     >
      //       {this.renderContent('Koubei')}
      //     </TabBar.Item>



      //     <TabBar.Item title="购物车" key="Friend"
      //       icon={
      //         <div className="iconfont icon-gouwuche" style={{
      //           width: '0.666667rem',height: '0.666667rem','fontSize':'0.666667rem' }}
      //         />
      //       }
      //       selectedIcon={
      //         <div className="iconfont icon-gouwuche" style={{
      //           width: '0.666667rem',height:'0.666667rem','fontSize':'0.666667rem'}}
      //         />
      //       }
      //       //dot
      //       selected={this.state.selectedTab === 'greenTab'}
      //       onPress={() => {
      //         this.setState({ selectedTab: 'greenTab' });
      //       //this.carts()
      //       }}
      //     >
      //       {this.renderContent('Friend')}
      //     </TabBar.Item>



      //     <TabBar.Item title="我" key="my" style={{color:'red'}}
      //       icon={
      //         <div className="iconfont icon-home" style={{
      //           width: '0.666667rem',height: '0.666667rem','fontSize':'0.666667rem',fontWeight:'bold' }}
      //         />
      //       }
      //       selectedIcon={
      //         <div className="iconfont icon-home" style={{
      //           width: '0.666667rem',height:'0.666667rem','fontSize':'0.666667rem',fontWeight:'bold'}}
      //         />
      //       }
      //       selected={this.state.selectedTab === 'yellowTab'}
      //       onPress={() => {
      //         this.setState({
      //           selectedTab: 'yellowTab',
      //         });
      //         //this.mines()
      //       }}
      //     >
      //       {this.renderContent('My')}
      //     </TabBar.Item>


      //   </TabBar>

      // </div>
//     );
//   }
// }

// export default  TabBarExample

