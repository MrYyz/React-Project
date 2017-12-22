import http from '../utils/httpClient';

export function ajaxMiddleware(api){
    // console.log('Running ajaxMiddleware')
    return function(dispatch){
        return function(action){
            const {types, url, method, params = {}} = action
            if(!url){
                return dispatch(action)
            }

            api.dispatch({
                type: 'beforeRequest'
            })
            if(url){
                http[method](url, params).then(res => {
                    api.dispatch({
                        type: 'Requested',
                        response: res
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