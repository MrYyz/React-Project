export default function LoginReducer(state={},action){
    // console.log('LoginReducer=')
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type){
        case "RegisterBeforeRequest":
            newState.status = 0;
            break;
        case "RegisterRequested":
            newState.status = 1;
            newState.body = action.response;//为了安全性问题，可考虑在这筛选用户信息
            break;
        case "RegisterRequestError":
            newState.status = -1;
            newState.error = action.error;
            break;    
    }
    return newState;
}
