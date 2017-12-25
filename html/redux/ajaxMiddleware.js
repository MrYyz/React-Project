import http from '../utils/httpClient';

export function ajaxMiddleware(api){
    return function(dispatch){
        return function(action){
            const {types, url, method, params = {}} = action;
            if(!url){
                return dispatch(action)
            }
            api.dispatch({
                type: types[0]
            })
            if(url){
                http[method](url, params).then(res => {
                    api.dispatch({
                        type: types[1],
                        response: res
                    })
                }).catch(error => {
                    api.dispatch({
                        type: types[2],
                        error
                    })
                })
            }
        }
    }
}