export function getOrderData(_url, _params,_method){
    return {
        types: ['beforeRequestOrder_p', 'RequestedOrder_p', 'requestErrorOrder_p'],
        url: _url,
        params: _params,
        method:_method
    }
}