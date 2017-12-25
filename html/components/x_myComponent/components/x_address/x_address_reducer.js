export default function AddressReducer(state = {},action){
	var newState = JSON.parse(JSON.stringify(state));
	switch(action.type){
		case 'beforeRequestAddress':
            newState.status = 0;
            break;
        case 'RequestedAddress':
            newState.status = 1;
            newState.response = action.response;
            break;
        case 'requestErrorAddress':
            newState.status = -1;
            newState.error = action.error
            break;
	}
	return newState;
}