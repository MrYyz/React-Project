export function getData(url,params){
	return {
		types: ['beforeRequestCollect', 'RequestedCollect', 'requestErrorCollect'],
        url: url,
        params: params
	}
}
