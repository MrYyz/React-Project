export function MessageAction(_url,_method,_params){
    return{
        types:['MessageBeforedRequest','MessageRequested','MessageRequestError'],
        url:_url,
        method:_method || 'post',
        params:_params
    }    
}