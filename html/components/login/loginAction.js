export function LoginAction(_url,_method,_params){
    // console.log(_url,_method,_params)
    return {
        types: ['beforeRequest', 'Requested', 'requestError'],
        url: _url,
        method:_method || 'get',
        params: _params
    }
}