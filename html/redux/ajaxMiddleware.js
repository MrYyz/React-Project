import http from '../utils/httpClient';

export function ajaxMiddleware(api){
    return function(dispatch){
        return function(action){
            const {types, url, method, params = {}} = action
            if(!url){
                return dispatch(action)
            }

            api.dispatch({
                type: 'beforeRequest',
                res: response
            })
            if(url){
                http[method](url, params).then(res => {
                    api.dispatch({
                        type: 'Requested',
                        res: response
                    })
                   
                })
            
            }
            
          
        }
    }
}