
import React from 'react'
import './indexComponent.scss'
import '../../libs/base.css'
import { hashHistory } from 'react-router'


import '../../libs/icon/iconfont.css'
import * as Indexactions from './indexaction'

import {connect} from 'react-redux'
import Spinner from '../spinner/spinnerComponent';

let theul,theWidth,li=1,arrdata=[],whatis;

let theLists='xx',indexmain,thelist1='';

 class IndexComponent extends React.Component{
        state={
            banner: '',
            lists:''

        }
     
        therecommed(){
            
            var arr=JSON.parse(this.props.thedata);

          return  this.props.components(arr)
            
        }   
        qiandao(){
            // console.log(66);
        }
        newfunction(){
            // console.log(this);
            this.setState({lists:thelist1});
           
        }

        thechange(e){
            var thediv=document.querySelector('.theindex');
            var thediv1=document.querySelector('.indexmain1');
            
            var arr=JSON.parse(this.props.thedata);
            var thearr=[];
            if(e.target.tagName.toLowerCase()==='li'){
            Array.prototype.forEach.call(e.target.parentNode.children,function(item){
                item.className='';
            })
            if(e.target.tagName.toLowerCase()==='li'){
                e.target.className='red';
                if(e.target.innerHTML=='推荐'){
                    li=1;
                    theLists=window.components;
                    thediv.style.display='block';
                    thediv1.style.display='none'; 
                   
                    // this.setState({lists:theLists});
                    
                }else if(e.target.innerHTML=='手提包'){
                    arr.forEach(function(item){
                        if(item.type=="手提包"){
                            thearr.push(item);
                        }
                    })
                     
                    thediv.style.display='none';
                    thediv1.style.display='block'; 
                    
                     // theLists=window.handbag(thearr);
                     theLists=this.props.handbag(thearr);
                    
                     this.setState({lists:theLists});
                }else if(e.target.innerHTML=='斜挎包'){
              
                    arr.forEach(function(item){
                        if(item.type=="斜挎包"){
                            thearr.push(item);
                        }
                    })
                    // console.log(thearr);
                    thediv.style.display='none';
                    thediv1.style.display='block'; 
                    
                     // theLists=window.handbag(thearr);
                     theLists=this.props.handbag(thearr);
                    
                     this.setState({lists:theLists});
                }else if(e.target.innerHTML=='单肩包'){
              
                    arr.forEach(function(item){
                        if(item.type=="单肩包"){
                            thearr.push(item);
                        }
                    })
                    // console.log(thearr);
                    thediv.style.display='none';
                    thediv1.style.display='block'; 
                    
                     // theLists=window.handbag(thearr);
                     theLists=this.props.handbag(thearr);
                    
                     this.setState({lists:theLists});
                }
            }
        }
    }


    theparams(e){
        if(e.target.parentNode.className=='indexlist'){
           var id=e.target.parentNode.id;
           hashHistory.push('/commodity/'+id);
        }
     }

    toMsgComponent(){
         hashHistory.push('message');
    }

    render(){
      
        const nav=['li1','li2','li3','li4'];
        const li_inner=['推荐','手提包','斜挎包','单肩包'];
        let _style={width: window.innerWidth*nav.length+'px'}
            if(this.props.components&&whatis!=1){
                // console.log(666);
                theLists=this.therecommed();
                window.aa=theLists;
                window.components=this.props.components;
            }   
            if(window.aa&&whatis!=1){
                theLists=window.aa;
            }
           // console.log(thelist1,'dfkasdfk;ldsfk;lfk');
        return (
            <div id="container" style={{height : window.innerHeight+'px'}}>
                <div className="indexheader">
                    <div className="li_imfor iconfont" ref="xx">
                     <p>
                        <span className="icon-wxbsousuotuiguang"></span>
                        <span><input type="text" placeholder="搜一搜全球好货" className="myinput"/></span>
                     </p>
                            <span className="icon-tips" onClick={this.toMsgComponent}></span>
                     </div>
                        <ul className="li_nav" ref="li_nav" onClick={this.thechange.bind(this)}>
                             {nav.map(function(item,idx){
                                return <li className={item} key={idx}>{li_inner[idx]}</li>
                              })}    
                        </ul>
                    </div>
                <div className="indexmain">
                     <div className="spinner">
                              <Spinner></Spinner>
                        </div>
                     <div className="theindex"  onClick={this.theparams}>{thelist1!=''?thelist1:theLists}</div>
                     <div className="indexmain1" onClick={this.theparams}>{this.state.lists}</div>
                </div>
               <div className="indexfooter"></div>
            </div>
        )
    }
    componentDidUpdate(){
        if(this.props.components){
                    theul=document.querySelector('.bannerul');
                    theWidth=window.innerWidth;

                    window.handbag=this.props.handbag;


                    document.querySelector('.spinner').style.display='none';
                    this.props.banner(theWidth,theul);


                    arrdata=JSON.parse(this.props.thedata);
                       var thethis=this;
                      
                        document.querySelector('.myinput').onblur=function(){
                          document.querySelector('.indexmain1').style.display='none';
                            whatis=1;
                            var val=this.value;
                            var reg=new RegExp(val,'ig');
                             var newarr=[];
                           
                                arrdata.forEach(function(item,idx){
                                        if(item.type.search(reg)>=0||item.name.search(reg)>=0){
                                            newarr.push(item);
                                   
                                        }
                                  })
                                  if(newarr.length<=0){
                                      return ;
                                  }
                                  thelist1=window.components(newarr);
                                  thethis.newfunction()
                        }

        }
       

    }
            componentDidMount(){
                
                 theWidth=window.innerWidth;
                   var mystore= window.localStorage;
           
                this.props.recommed('indexComponent.php')
                
            }

}
  
   const mapToState=function(state){
       return {
            thedata : JSON.stringify(state.indexReducer.res),
            status: state.indexReducer.status,
            components: state.indexReducer.components,
            banner:state.indexReducer.banner,
            handbag:state.indexReducer.handbag
       }
   }

   export default connect(mapToState,Indexactions)(IndexComponent);