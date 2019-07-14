import type from '../type';
const {vote: {VOTE_SUPPORT, VOTE_OPPOSE}} = type;
const vote = {
    support (params) {
        return {
            type: VOTE_SUPPORT,
            params
        }
    },
    oppose (params) {
        return {
            type: VOTE_OPPOSE,
            params
        }
    }
}
export default vote;