export function RegisterAction(_url,_method,_params){
    return {
        types: ['beforeRequest', 'Requested', 'requestError'],
        url:_url,
        method:_method || 'post',
        params:_params
    }
}