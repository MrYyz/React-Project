export default function SetReducer(state = {},action){
	var newState = JSON.parse(JSON.stringify(state));
	switch(action.type){
		case 'beforeRequestSet':
            newState.status = 0;
            break;
        case 'RequestedSet':
            newState.status = 1;
            newState.response = action.response;
            break;
        case 'requestErrorSet':
            newState.status = -1;
            newState.error = action.error
            break;
	}
	return newState;
}