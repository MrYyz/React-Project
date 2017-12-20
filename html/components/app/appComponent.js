import React from 'react'

export default class AppComponent extends React.Component{
    render(){
        return (
            <div>
                <h1>AppComponent</h1>
                <div>{this.props.children}</div>
            </div>
        )
    }
}