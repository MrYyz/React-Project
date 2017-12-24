import {combineReducers} from 'redux'
import datagrid from '../components/datagrid/datagridReducer'

// my
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
})