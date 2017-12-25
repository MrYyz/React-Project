export function getComData(_url, _params,_method){
    return {
        types: ['beforeRequestCom_p', 'RequestedCom_p', 'requestErrorCom_p'],
        url: _url,
        params: _params,
        method:_method
    }
}