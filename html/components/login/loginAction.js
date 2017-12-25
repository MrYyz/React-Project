export function LoginAction(_url,_method,_params){
    console.log('LoginAction=')
    return {
        types: ['RegisterBeforeRequest', 'RegisterRequested', 'RegisterRequestError'],
        url: _url,
        method:_method || 'get',
        params: _params
    }
}