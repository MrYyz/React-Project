export default function zhekouReducer(state={},action){
    var theres=Object.assign({},action);
    var thedata = JSON.parse(JSON.stringify(state));
    // console.log(action,'-------------');
    switch(theres.type){
        case 'beforeRequest':
            thedata.status= 0;
            break;
        
        case 'Requested':
          thedata.status= 1;
          thedata.res=theres.response;
          break;
        case 'requestError':
          thedata.status = -1;
          thedata.error = action.error;

          break;
          default :
          thedata.status = 404;
        
    }

    return thedata;
}