import http from '../utils/httpClient'

export function ajaxMiddleware(api){
    return function(dispatch){
        return function(action){
           
            const {types, url, method = 'get', params = {}} = action
            let response='';
            if(!url){
                return dispatch(action)
            }

            api.dispatch({
                type: 'beforeRequest',
                res: response
            })
            if(url){

                http.get(url, params).then(res => {
                    response=res;
                    
                    api.dispatch({
                        type: 'Requested',
                        res: response
                    })
                   
                })
            
            }
            
          
        }
    }
}