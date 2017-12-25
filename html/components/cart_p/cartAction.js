export function getCartData(_url, _params,_method){
    return {
        types: ['beforeRequestCart', 'RequestedCart', 'requestErrorCart'],
        url: _url,
        params: _params,
        method:_method
    }
}