import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, hashHistory,Link} from 'react-router';
import * as CommentsAction from './commentsAction.js'
import './comments.scss';

class CommentsComponent extends React.Component{
    componentDidMount(){
        this.props.getCommentsData('comments_p.php',{guId:this.props.params.guId},'get')
    }
    publish(event){
        let val = event.target.parentElement.previousElementSibling.children[0].value;
        this.props.getCommentsData('comments_p.php',{guId:this.props.params.guId,username:window.localStorage.username,Comment:val,sort:'publish'},'get')
    }
    //返回键
    backtrack(){
        this.props.router.goBack();
    }
    render (){
        return(
            <div id="Comments_p">
                <div className="header">
                    <i className="iconfont icon-fanhui" onClick={this.backtrack.bind(this)}></i>
                    商品评论
                </div>
                <div className="main">
                    <ul>
                        {
                            this.props.dataset_Com1.map(function(item,idx){
                                return <li className="clearfix" key={item.id}><div><img src="/html/imgs/1.png" /></div><div><p>{item.username}</p><p>{item.discussTime}</p><p>{item.Comment}</p></div></li>
                            })
                        }
                        
                    </ul>
                </div>
                <div className="footer">
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <span onClick={this.publish.bind(this)}>发&nbsp;&nbsp;表</span>
                    </div>
                </div>
            </div>
        )
    }
}

const mapToState = function(store){
    return {
        dataset_Com1: store.Comments_p.response || [],
    }
}
export default connect(mapToState, CommentsAction)(CommentsComponent);

// <li className="clearfix">
//     <div>
//         <img src="/html/imgs/1.png" />
//     </div>
//     <div>
//         <p>username</p>
//         <p>评论时间</p>
//         <p>评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容</p>
//     </div>
// </li>
// <li className="clearfix">
//     <div>
//         <img src="/html/imgs/1.png" />
//     </div>
//     <div>
//         <p>username</p>
//         <p>评论时间</p>
//         <p>评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容</p>
//     </div>
// </li>
// <li className="clearfix">
//     <div>
//         <img src="/html/imgs/1.png" />
//     </div>
//     <div>
//         <p>username</p>
//         <p>评论时间</p>
//         <p>评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容</p>
//     </div>
// </li>
// <li className="clearfix">
//     <div>
//         <img src="/html/imgs/1.png" />
//     </div>
//     <div>
//         <p>username</p>
//         <p>评论时间</p>
//         <p>评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容</p>
//     </div>
// </li>
