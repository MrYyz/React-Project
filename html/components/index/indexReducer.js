export default function DataGridReducer(state = {}, action){
   var theres=Object.assign({},action);
   console.log(theres,'theres-----------------');
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'beforeRequest':
            newState.status = 0;
            break;
        case 'Requested':
            newState.status = 1;
            newState.res = theres.res;
            break;
        case 'requestError':
            newState.status = -1;
            newState.error = action.error
            break;
    }

    return newState;
}