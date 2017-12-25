export default function DataGridReducer(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'beforeRequestCart':
            newState.status = 0;
            break;
        case 'RequestedCart':
            newState.status = 1;
            newState.response = action.response;
            break;
        case 'requestErrorCart':
            newState.status = -1;
            newState.error = action.error
            break;
    }

    return newState;
}