export function getOrderData(_url, _params,_method){
    return {
        types: ['beforeRequestOrder', 'RequestedOrder', 'requestErrorOrder'],
        url: _url,
        params: _params,
        method:_method
    }
}