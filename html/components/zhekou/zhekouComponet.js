import React from 'react';
import ReactDOM from 'react-dom';
import './zhekou.scss';
import * as zhekouaction from './zhekouaction';
import { hashHistory } from 'react-router'
import {connect} from 'react-redux'

let arr=[],datalists,theisgood;
 class ZhekouComponent extends React.Component{
    thereturn(){
        hashHistory.push('index');
    }
    theisgood(e){
        console.log(e.target.innerHTML.splice(1,1));
    }
    theparams(e){
        if(e.target.parentNode.className=='contanier'){
           var id=e.target.parentNode.id;
           hashHistory.push('/commodity/'+id);
        }
     }
    render(){
            // console.log(this.props.status);
            if(this.props.status==1){
                arr=this.props.data;
                var date =new Date();
                var time=(date.getMonth()+1)+'-'+date.getDay()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
              
                datalists=arr.map(function(item,idx){
                     return (<div className="datalists iconfont" key={idx+"thedata"} id={item.guId}>
                               
                             <p>{time}</p>
                                <div className="contanier" id={item.guId} > 
                                       
                                  <div className="imgurl" style={{backgroundImage:'url('+item.imgUrl+')',backgroundSize:'100% 100%'}}></div>  
                                  <div className="contanier1">
                                        <p>{item.name}</p>
                                        <p className="icon-zan1 isgood" >(0)</p>
                                  </div>                                
                                </div>
                            </div>)
                })
                console.log(datalists);
            }
            return (<div className="iconfont">
                         <div className="ruihuan-header">
                                    <span className="icon-arrowleft" onClick={this.thereturn}></span>
                                    <span>抢折扣</span>          
                         </div>
                         <div className="zhekoumain" onClick={this.theparams}>
                                {datalists}
                         </div>
                    </div>)
    }
    componentDidUpdate(){
            
            if(this.props.status==1){
              
                document.querySelectorAll('.isgood').forEach(function(item){
                    item.onclick=function(e){
                    this.innerHTML='('+(Number(this.innerHTML.slice(1,-1))+1)+')';
                 }
                })
            }
    }
    componentDidMount(){
         this.props.thedata('indexComponent.php');
    }
} 


const mapTostate=function(state){
        
    return {
        status:state.zhekouReducer.status,
        data : state.zhekouReducer.res
    }
}

export default connect(mapTostate,zhekouaction)(ZhekouComponent);