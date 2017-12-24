import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, hashHistory} from 'react-router'
import store from './redux/configStore'
import Routes from './router/rootRouter'

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>
    ,document.getElementById('app'))