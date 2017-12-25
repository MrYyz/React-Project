import React from 'react'
const nav=['li1','li2','li3','li4'];
let _style={width: window.innerWidth*nav.length+'px'}


export function banner(){
   
    return (
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
)}
