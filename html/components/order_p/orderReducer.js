export default function OrderReducer(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'beforeRequestOrder':
            newState.status = 0;
            break;
        case 'RequestedOrder':
            newState.status = 1;
            newState.data1 = action.response.data1;
            newState.data2 = action.response.data2;
            break;
        case 'requestErrorOrder':
            newState.status = -1;
            newState.error = action.error
            break;
    }

    return newState;
}