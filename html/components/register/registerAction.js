export function RegisterAction(_url,_method,_params){
    return {
        types: ['RegisterBeforeRequest', 'RegisterRequested', 'RegisterRequestError'],
        url:_url,
        method:_method || 'post',
        params:_params
    }
}