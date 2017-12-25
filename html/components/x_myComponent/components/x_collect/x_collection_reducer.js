export default function AddressReducer(state = {},action){
	var newState = JSON.parse(JSON.stringify(state));
	switch(action.type){
		case 'beforeRequestCollect':
            newState.status = 0;
            break;
        case 'RequestedCollect':
            newState.status = 1;
            newState.response = action.response;
            break;
        case 'requestErrorCollect':
            newState.status = -1;
            newState.error = action.error
            break;
	}
	return newState;
}