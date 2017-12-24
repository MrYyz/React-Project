export function getCommentsData(_url, _params,_method){
    return {
        types: ['beforeRequestComments', 'RequestedComments', 'requestErrorComments'],
        url: _url,
        params: _params,
        method:_method
    }
}