import {combineReducers} from 'redux'
import LoginReducer from '../components/login/loginReducer.js'
import RegisterReducer from '../components/register/registerReducer.js'
import MessageReducer from '../components/message/messageReducer.js'

export default combineReducers({
    LoginReducer,RegisterReducer,MessageReducer
})