export default function OrderReducer(state = {},action){
	var newState = JSON.parse(JSON.stringify(state));
	switch(action.type){
		case 'beforeRequestOrder':
            newState.status = 0;
            break;
        case 'RequestedOrder':
            newState.status = 1;
            newState.response = action.response;
            break;
        case 'requestErrorOrder':
            newState.status = -1;
            newState.error = action.error
            break;
	}
	return newState;
}