export default function DataGridReducer(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'beforeRequestCom_p':
            newState.status = 0;
            break;
        case 'RequestedCom_p':
            newState.status = 1;
            newState.data1 = action.response.data1;
            newState.data2 = action.response.data2;
            newState.data3 = action.response.data3;
            newState.data4 = action.response.data4;
            newState.data5 = action.response.data5;
            newState.data6 = action.response.data6;
            break;
        case 'requestErrorCom_p':
            newState.status = -1;
            newState.error = action.error
            break;
    }

    return newState;
}