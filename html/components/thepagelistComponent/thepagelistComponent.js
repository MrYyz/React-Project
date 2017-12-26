import React from 'react';
import { hashHistory } from 'react-router';
import * as thepageActions from './thepageAction.js';
import {connect} from 'react-redux'
import './thepage.scss';
let thisdata,thatdata,isarray=[],thei=0,whatis,thecontent,thelist1='',arrdata;

   class ThepageComponent extends React.Component{


        state={
            lists:''
        }
    thepagemain(arr){
            return     <div className="thelist">
                                                    <h1>--- 为你推荐 ---</h1>
                                <div className="indexgoodslist">{
                                    arr.map(function(item,idx){
                                        return  <div className="indexlist"  key={'list'+idx} id={item.guId}>
                                                    <div style={{backgroundImage: 'url('+item.imgUrl+')'}} className="Indeximg"> </div>                     
                                                    <p>{item.name}</p>
                                                    <p>￥{item.price}</p>
                                                    <p>美国亚马逊供货</p>
                                                </div>
                                    })
                                }
                                </div>
                            </div>
                   }


            theparams(e){
               if(e.target.parentNode.className=='indexlist'){
                  var id=e.target.parentNode.id;
                  hashHistory.push('/commodity/'+id);
               }
            }

            newfunction(){
                
                this.setState({lists:thelist1});
               
            }

    render(){

        
            if(this.props.thatdata){
             
                thatdata=this.props.thatdata;
              
                isarray=[];
                thatdata.forEach(function(item,idx){
                   
                        if(thisdata=='全部'){
                            isarray=thatdata;
                        }else{
                            if(item.type==thisdata){
                               
                                isarray.push(item);
                            }
                        }
                })
           
               thecontent= this.thepagemain(isarray);
             
              

            }
        return (<div className="thepagediv">
                      <div className="indexheader">
                                <div className="li_imfor iconfont" ref="xx">
                                <p>
                                    <span className="icon-wxbsousuotuiguang"></span>
                                    <span><input type="text" placeholder="搜一搜全球好货" className='theinput'/></span>
                                </p>
                                        <span className="icon-tips"></span>
                                </div>
                             
                        </div>
                        <div className="pageMain" onClick={this.theparams}>
                            {thelist1!=''?  thelist1 : thecontent}
                        </div>
                </div>)
    }
    
    componentDidUpdate(){
 
            if(this.props.thatdata){
           
            arrdata=this.props.thatdata;
            var thethis=this;
            thelist1='';
             document.querySelector('.theinput').onblur=function(){
                thelist1='';
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
                       thelist1=thethis.thepagemain(newarr);
                     
                       thethis.newfunction()
             }
            }
    }
    componentWillMount(){
        thisdata=this.props.params.data;
    }
}
   const mapTostate=function(state){
       return {
            thatdata: state.thepagelist.res,
            status: state.thepagelist.status
       }
   }

   export default connect(mapTostate,thepageActions)(ThepageComponent)