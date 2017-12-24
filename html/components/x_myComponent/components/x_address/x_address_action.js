export function getData(url,params){
	return {
		types: ['beforeRequestAddress', 'RequestedAddress', 'requestErrorAddress'],
        url: url,
        params: params
	}
}
