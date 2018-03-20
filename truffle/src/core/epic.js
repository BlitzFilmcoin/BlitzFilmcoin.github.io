

const fetchUserFulfilled = payload => ({ type: 'FETCH_USER_FULFILLED', payload });

import { getCrowdsaleStats } from './action'
// export const getStats = ( action$, store )=>
//     action$.ofType('WEB3_INITIALIZED')
//     .delay(10)
//     .mapTo(
//         console.log('====================================')
//     )