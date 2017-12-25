export default function CommentsReducer(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'beforeRequestComments':
            newState.status = 0;
            break;
        case 'RequestedComments':
            newState.status = 1;
            newState.response = action.response;
            break;
        case 'requestErrorComments':
            newState.status = -1;
            newState.error = action.error
            break;
    }

    return newState;
}