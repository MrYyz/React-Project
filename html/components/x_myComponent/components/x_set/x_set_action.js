// export default function getDate()
export function getData(url,params){
	return {
		types: ['beforeRequestSet', 'RequestedSet', 'requestErrorSet'],
        url: url,
        params: params
	}
}
