export default function OrderReducer(state = {},action){
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'beforeRequestLv':
            newState.status = 0;
            break;
        case 'RequestedLv':
            newState.status = 1;
            newState.response = action.response;
            break;
        case 'requestErrorLv':
            newState.status = -1;
            newState.error = action.error
            break;
    }
    return newState;
}