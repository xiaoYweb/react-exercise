import type from '../type';
const {vote: {VOTE_SUPPORT, VOTE_OPPOSE}} = type;
const defaultState = {
    n: 0,
    m: 0,
    title: 'test title'
}
const vote = function (state = defaultState, {type,params}) {
    switch (type) {
        case VOTE_SUPPORT:
            console.log('support params --> ', params)
            state = { ...state, n: state.n + 1 };
            break;
        case VOTE_OPPOSE:
            console.log('oppose params --> ', params)
            state = { ...state, m: state.m + 1 };
            break;
        default: 
        break;
    }
    return state;//必须返回 state 
}
export default vote;