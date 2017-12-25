import {combineReducers} from 'redux'
import LoginReducer from '../components/login/loginReducer.js'
import RegisterReducer from '../components/register/registerReducer.js'
import indexReducer from '../components/index/indexReducer.js'
import zhekouReducer from '../components/zhekou/zhekouReducer.js'
export default combineReducers({
    LoginReducer,RegisterReducer,indexReducer,zhekouReducer
})