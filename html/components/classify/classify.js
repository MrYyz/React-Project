import React from 'react';
import { hashHistory } from 'react-router'
import './classify.scss';
export default class classifyComponent extends React.Component{
        throughit(e){
           if(e.target.tagName.toLowerCase()=='div'||e.target.tagName.toLowerCase()=='p'){
                var params=e.target.parentNode.children[1].innerHTML;
                hashHistory.push('/thepagelist/'+params);
           }
        }

      render(){
        const nav=['li1','li2','li3','li4'];
        const li_inner=['推荐','手提包','斜挎包','单肩包'];
        const imgurl=['','html/img/good25.jpg','html/img/good8.jpg','html/img/good18.jpg','html/img/good12.jpg','html/img/good9.jpg','html/img/good17.jpg','html/img/good4.jpg','html/img/good16.jpg'];
        const imgfont=['全部','单肩包','卡包*零钱包','钱包','手拿包*晚宴包','手提包','女双肩包','斜挎包','女钥匙包'];
        let _style={width: window.innerWidth*nav.length+'px'}
           return ( <div className="classifydiv">
                            <div className="indexheader">
                                <div className="li_imfor iconfont" ref="xx">
                                <p>
                                    <span className="icon-wxbsousuotuiguang"></span>
                                    <span><input type="text" placeholder="搜一搜全球好货"/></span>
                                </p>
                                        <span className="icon-tips"></span>
                                </div>
                             
                        </div>
                        <ul className="classifydiv1 iconfont" onClick={this.throughit}>
                            {
                                imgurl.map(function(item,idx){
                                    return (<li  key={'name'+idx}>
                                                 <div className={'name'} style={{backgroundImage:'url('+item+')',backgroundSize: '100% 100%'}}></div>
                                                    <p>{imgfont[idx]}</p>
                                            </li>)
                                })
                            }

                        </ul>
                    </div>)
      }
      componentDidMount(){
          document.querySelector('.name').className+=' icon-wxbpinpaibao';
      }
}

