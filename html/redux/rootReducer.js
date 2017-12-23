import {combineReducers} from 'redux'
import LoginReducer from '../components/login/loginReducer.js'
import RegisterReducer from '../components/register/registerReducer.js'

export default combineReducers({
    LoginReducer,RegisterReducer
})