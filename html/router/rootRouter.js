import React from 'react'
import {Router, Route, hashHistory} from 'react-router'
import AppComponent from '../components/app/appComponent'

import ProductsComponent from '../components/products/productsComponent'
import IndexComponent from '../components/index/indexComponent'

export default (
    <Route path="/" component={AppComponent}>
        <Route path="products" component={ProductsComponent}></Route>
        <Route path="index" component={IndexComponent}></Route>
        
    </Route>
)


// import AppComponent from '../components/app/appComponent.js'
import ProductsComponent from '../components/products/productsComponent.js'

import ReactDOM from 'react-dom'
// import store from '../redux/configStore.js'
import LoginComponent from '../components/login/loginComponent.js'


// export default (
//     <Route path="/" component={AppComponent}>
//         <Route path="products" component={ProductsComponent}></Route>
//     </Route>
// )


export default class RootRouter extends React.Component{
    render(){
        return(
            <Router history={hashHistory}>
                <Route path="/" component={AppComponent}>
                    <Route path="products" component={ProductsComponent}></Route>
                </Route>

                <Route path="/login" component={LoginComponent}></Route>
            </Router>
        )
    }
}




// import React from 'react'
// import ReactDOM from 'react-dom'
// import {Provider} from 'react-redux'
// import {Router, Route, hashHistory} from 'react-router'
// import store from './redux/configStore'
// import routes from './router/rootRouter'

// ReactDOM.render(
//     <Provider store={store}>
//         <Router history={hashHistory} routes={routes}/>
//     </Provider>
//     ,document.getElementById('app'))

