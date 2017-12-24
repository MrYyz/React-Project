import $ from '../../libs/jquery.min.js'
import React from 'react'


// import * as Indexcomponents from './indexcomponents'
const nav=['li1','li2','li3','li4'];
const li_inner=['推荐','手提包','斜跨包','单肩包'];
let _style={width: window.innerWidth*nav.length+'px'}
let set;


//轮播图
 function banner(theWidth,theul){
             
                clearInterval(set);
                                                  
                
                let i=0;
               
              set=setInterval(function(){
                    
                    i++;
                        if(i>3){
                            i=0;
                        }
                      
                    $(theul).stop().animate({
                        left : -theWidth*i
                    })
                    
                },3000)

                // theul.addEventListener('touchstart',function(event){
                //     console.log(event.screenX);
                // })
            $(theul).on('touchstart',function(e){
            
                var event=e.originalEvent.targetTouches[0];
                var thex=event.clientX;
                var k=i;
                
                clearInterval(set);
              
                $(this).on('touchmove',function(e){
                    clearInterval(set);
                var event=e.originalEvent.targetTouches[0];
                   
                    if(event.clientX-thex<-100){
                        i=k+1;
                        if(i>3){
                            i=0;
                        }
                        $(theul).stop().animate({
                            left : -theWidth*i
                        })
                        return false;
                    }else if(event.clientX-thex>100){
                        i=k-1;
                        if(i<0){
                            i=3;
                        }
                        $(theul).stop().animate({
                            left : -theWidth*i
                        })
                        return false;
                    }
                })
                
            })
            $(theul).on('touchend',function(){
                set=setInterval(function(){
                
                    i++;
                        if(i>3){
                            i=0;
                        }
                        
                    $(theul).stop().animate({
                        left : -theWidth*i
                    })
                    
                },3000)
            })
    return {
        type: []
        
    }
}

export function recommed(_url){
  
    return {
        type:['beforeRequset','Requested','requestError'],
        url: _url,
        banner: banner,
        components:indextui,
        handbag:handbag
    }
}
function indextui(arr){
            
    return (
       <div>
            <div>
                    <div className="indexbanner" ref="indexbanner">
                                <ul className="bannerul" style={_style}>
                                        {
                                            nav.map(function(item,idx){
                                                    return <li className={'banner'+idx} key={'banner'+idx} style={{width:window.innerWidth+'px',backgroundImage:'url(http://10.3.135.243:1706/git_react/React-Project/html/libs/images/banner'+(idx+1)+'.jpg)',backgroundSize:'cover'}}></li>
                                            })
                                        }
                                </ul>
                    </div>
                    <ul className="index_routes iconfont">
                            <li >
                                <span className="icon-qiandao"></span>
                                <span>签到</span>
                                
                            </li>
                            <li>
                            <span className="icon-daifukuan"></span>
                                <span>积分兑换</span>
                            </li>
                            <li>
                            <span className="icon-wxbbiaowang"></span>
                                <span>抢折扣</span>
                            </li>
                            <li>
                            <span className="icon-iconset0206"></span>
                                <span>新人礼</span>
                            </li>                
                    </ul>

                </div>    
                    <div className="thelist">
                                            <h1>--- 为你推荐 ---</h1>
                        <div className="indexgoodslist">{
                            arr.map(function(item,idx){
                                return  <div className="indexlist"  key={'list'+idx}>
                                            <div style={{backgroundImage: 'url('+item.imgUrl+')'}} className="Indeximg"> </div>                     
                                            <p>{item.name}</p>
                                            <p>￥{item.price}</p>
                                            <p>美国亚马逊供货</p>
                                        </div>
                            })
                        }
                        </div>
                    </div>
          </div>
    )
}
function handbag(arr){
    return       <div className="thelist">
                                            <h1>--- 为你推荐 ---</h1>
                        <div className="indexgoodslist">{
                            arr.map(function(item,idx){
                                return  <div className="indexlist"  key={'list'+idx}>
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