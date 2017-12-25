export default function DataGridReducer(state = {}, action){
   var theres=Object.assign({},action);
   

    var newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'beforeRequest':
            newState.status = 0;
          
            
            break;
        case 'Requested':
            newState.status = 1;
            newState.res = theres.response;
            newState.components=theres.components;
            newState.banner=theres.banner;
            newState.handbag=theres.handbag;
            break;
        case 'requestError':
            newState.status = -1;
            newState.error = action.error;
           
            
            break;
            default :
            newState.status = 404;
            
            newState.components=theres.components;
                
    }
       
           
    return newState;
}