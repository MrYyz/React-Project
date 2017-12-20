import React from 'react'
import { TabBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import { hashHistory } from 'react-router'

import '../../libs/icon/iconfont.css'

class TabBarExample extends React.Component {constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }
  homes(event) {
    hashHistory.push('home')
  }
  types(event) {
    hashHistory.push('type')
  }
  carts(event) {
    hashHistory.push('cart')
  }
  mines(event) {
    hashHistory.push('mine')
  }
  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        {this.props.children}
      </div>
    );
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >


          <TabBar.Item
            title="主页"
            key="Life"
            icon={<div className="iconfont icon-shouye" style={{
              width: '24px',
              height: '24px',
              'font-size':'24px'
            }}
            />
            }
            selectedIcon={<div className="iconfont icon-shouye" style={{
              width: '24px',
              height: '24px',
              'font-size':'24px',
              color: 'red'}}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            //badge={2}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
              //this.homes()
            }}
            //data-seed="logId"
          >
            {this.renderContent('Life')}
          </TabBar.Item>



          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="分类"
            key="Koubei"
            //badge={'new'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            //this.types()
            }}
            //data-seed="logId1"
          >
            {this.renderContent('Koubei')}
          </TabBar.Item>



          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="购物车"
            key="Friend"
            //dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            //this.carts()
            }}
          >
            {this.renderContent('Friend')}
          </TabBar.Item>



          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="我"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
              //this.mines()
            }}
          >
            {this.renderContent('My')}
          </TabBar.Item>


        </TabBar>

      </div>
    );
  }
}

export default  TabBarExample