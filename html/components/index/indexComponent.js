import React from 'react'
import './indexComponent.scss'
import '../../libs/base.css'


import '../../libs/icon/iconfont.css'
import * as Indexactions from './indexaction'

import {connect} from 'react-redux'
import { setInterval, clearInterval } from 'timers';

 class IndexComponent extends React.Component{
      
        state={
            stautus : ''
        }

        recommed(){
            console.log(JSON.parse(this.props.thedata));
       var arr=JSON.parse(this.props.thedata);
          return  arr.map(function(item,idx){
                 return  <div className="indexlist">
                            <div style={{background: 'url('+item.imgUrl+')'}}> </div>                     
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <p>美国亚马逊供货</p>
                         </div>
            })
        }   

    render(){
       
        const nav=['li1','li2','li3','li4'];
        const li_inner=['推荐','手提包','斜跨包','单肩包'];
        let _style={width: window.innerWidth*nav.length+'px'}
            if(this.props.status==1){
                this.recommed();
            }

        return (

            <div id="container" style={{height : window.innerHeight+'px'}}>
                <div className="indexheader">
                    <div className="li_imfor iconfont">
                     <p>
                        <span className="icon-wxbsousuotuiguang"></span>
                        <span><input type="text" placeholder="搜一搜全球好货"/></span>
                     </p>
                            <span className="icon-tips" onClick={this.recommed.bind(this)}></span>
                     </div>
                        <ul className="li_nav" ref="li_nav" onClick={this.props.thechange}>
                             {nav.map(function(item,idx){
                                return <li className={item} key={idx}>{li_inner[idx]}</li>
                              })}    
                        </ul>
                     </div>
                  
                <div className="indexmain">
                         {this.props.indexObj().Indexcomponents.banner()}
                         
                </div>
               
            </div>
        )
    }
            componentDidMount(){
                let theWidth=window.innerWidth;
                let theul=document.querySelector('.bannerul');
                this.props.banner(theWidth,theul);
                this.props.recommed('indexComponent.php')
                
            }

}
  
   const mapToState=function(state){
            
       return {
            thedata : JSON.stringify(state.indexReducer.res),
            status: state.indexReducer.status
       }
   }

   export default connect(mapToState,Indexactions)(IndexComponent);