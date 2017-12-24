export default function RegisterReducer(state={},action){
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type){
        case "beforeRequest":
            newState.status = 0;
            break;
        case "Requested":
            newState.status = 1;
            newState.body = action.response;//为了安全性问题，可考虑在这筛选用户信息
            break;
        case "requestError":
            newState.status = -1;
            break;    
    }
    return newState;
}
