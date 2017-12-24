import {combineReducers} from 'redux'
import Cart_p from '../components/cart_p/cartReducer.js'
import Commodity_p from '../components/commodity_p/commodityReducer.js'
import Comments_p from '../components/comments_p/commentsReducer.js';
import Order_p from '../components/order_p/orderReducer.js';

export default combineReducers({
    Cart_p,
    Commodity_p,
    Comments_p,
    Order_p
})