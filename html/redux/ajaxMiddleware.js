import http from '../utils/httpClient';

export function ajaxMiddleware(api){
    return function(dispatch){
        return function(action){
// <<<<<<< HEAD
//             const {types, url, method, params = {}} = action;
// =======

            const {types, url, method = 'get', components,params={},banner,handbag} = action
            let response='';

// >>>>>>> 900ec6ae8cb67784ce7d872919e2ea674c144d10
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
// <<<<<<< HEAD
//                         response: res
//                     })
//                 }).catch(error => {
//                     api.dispatch({
//                         type: types[2],
//                         error
//                     })
// =======
                        response: res,
                        components: components,
                        banner:banner,
                        handbag:handbag
                    })
                   
                }).catch(error => {
                    api.dispatch({
                        type: types[2],
                        error
                    })
// >>>>>>> 900ec6ae8cb67784ce7d872919e2ea674c144d10
                })
            }
        }
    }
}