import type from '../type';
const {vote: {VOTE_SUPPORT, VOTE_OPPOSE}} = type;

const vote = function (state = {
    n: 0,
    m: 0,
    title: 'test title'
}, {type}) {
    switch (type) {
        case VOTE_SUPPORT:
            state = { ...state, n: state.n + 1 };
            break;
        case VOTE_OPPOSE:
            state = { ...state, m: state.m + 1 };
            break;
        default: 
        break;
    }
    return state;
}
export default vote;