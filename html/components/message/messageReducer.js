export default function MessageReducer(state = {},action){
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'MessageBeforedRequest':
            newState.type = 0;
            break;
        case 'MessageRequested':
            state.type = 1;
            newState.system = action.response.system;
            newState.goodsMsg = action.response.goodsMsg;
            newState.orderMsg = action.response.orderMsg;
            break;
        case 'MessageRequestError':
            newState.type = -1;
            newState.error = action.error;
            break;
    }
    return newState;
}