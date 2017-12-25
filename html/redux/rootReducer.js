import {combineReducers} from 'redux'
import Cart_p from '../components/cart_p/cartReducer.js'
import Commodity_p from '../components/commodity_p/commodityReducer.js'
import Comments_p from '../components/comments_p/commentsReducer.js';
import Order_p from '../components/order_p/orderReducer.js';

import LoginReducer from '../components/login/loginReducer.js'
import RegisterReducer from '../components/register/registerReducer.js'
import indexReducer from '../components/index/indexReducer.js'
import zhekouReducer from '../components/zhekou/zhekouReducer.js'
import thepagelist from '../components/thepagelistComponent/thepageReducer.js'


import order from '../components/x_myComponent/components/x_order/x_order_reducer.js'
import address from '../components/x_myComponent/components/x_address/x_address_reducer.js'
import say from '../components/x_myComponent/components/x_say/x_say.js'
import collect from '../components/x_myComponent/components/x_collect/x_collection_reducer.js'
import set from '../components/x_myComponent/components/x_set/x_set_reducer.js'

export default combineReducers({
    //datagrid,
    order,
    address,
    collect,
    set,
    LoginReducer,RegisterReducer,
    Cart_p,
    Commodity_p,
    Comments_p,
    Order_p,indexReducer,
    zhekouReducer,
    thepagelist 

})