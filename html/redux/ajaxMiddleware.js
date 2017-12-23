import http from '../utils/httpClient'

export function ajaxMiddleware(api){
    return function(dispatch){
        return function(action){
           console.log(action,'---------------action');
            const {types, url, method = 'get', components,params={},banner,handbag} = action
            let response='';
            if(!url){
                return dispatch(action)
            }

            api.dispatch({
                type: 'beforeRequest'
                
            })
            if(url){

                http.get(url, params).then(res => {
                   
                    
                    api.dispatch({
                        type: 'Requested',
                        response: res,
                        components: components,
                        banner:banner,
                        handbag:handbag
                    })
                   
                }).catch(error => {
                    api.dispatch({
                        type: 'requestError',
                        error
                    })
                })
            
            }
            
          
        }
    }
}