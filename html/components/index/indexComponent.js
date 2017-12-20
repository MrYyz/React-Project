import React from 'react'
import './indexComponent.scss'
import '../../libs/base.css'
// import $ from '../../libs/jquery.min.js'

import '../../libs/icon/iconfont.css'

export default  class IndexComponent extends React.Component{
        tapChange(e){
            Array.prototype.forEach.call(this.refs.li_nav.children,function(item){
                item.className='';
            })
            
            if(e.target.tagName.toLowerCase()==='li'){
                e.target.className='red';
            }
        }
        down(){
            console.log(666);
        }
    render(){
        const nav=['li1','li2','li3','li4'];
        const li_inner=['推荐','手提包','斜跨包','单肩包'];
        let _style={width: window.innerWidth*nav.length+'px'}
        return (
            <div id="container">
                <div className="indexheader">
                    <div className="li_imfor iconfont">
                     <p>
                        <span className="icon-wxbsousuotuiguang"></span>
                        <span><input type="text" placeholder="搜一搜全球好货"/></span>
                     </p>
                            <span className="icon-tips"></span>
                     </div>
                        <ul className="li_nav" onClick={this.tapChange.bind(this)} ref="li_nav">
                             {nav.map(function(item,idx){
                                return <li className={item} key={idx}>{li_inner[idx]}</li>
                              })}    
                        </ul>
                     </div>
                <div className="indexmain">
                    <div className="indexbanner">
                        <ul className="bannerul" style={_style} >
                                {
                                    nav.map(function(item,idx){
                                            return <li className={'banner'+idx} key={'banner'+idx} style={{width:window.innerWidth+'px',backgroundImage:'url(http://10.3.135.243:1706/git_react/React-Project/html/libs/images/banner'+(idx+1)+'.jpg)',backgroundSize:'cover'}}></li>
                                    })
                                }
                           </ul>
                    </div>
                </div>
                
            </div>
        )
    }
            componentDidMount(){
                    var theul=document.querySelector('.bannerul');
                    theul.addEventListener('touchstart',function(){
                        console.log(666);
                    })
            }

}