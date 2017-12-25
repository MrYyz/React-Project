

export function getData(url,params){
	return {
		types: ['beforeRequestOrder', 'RequestedOrder', 'requestErrorOrder'],
        url: url,
        params: params
	}
}