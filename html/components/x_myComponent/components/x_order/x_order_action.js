// import orderDispatcher from './x_order_dispatch.js'

// export default function orderAction(type){
// 	orderDispatcher.dispatch(type);
// }

export function getData(url,params){
	return {
		types: ['beforeRequestOrder', 'RequestedOrder', 'requestErrorOrder'],
        url: url,
        params: params
	}
}

