import type from '../type';
const {vote: {VOTE_SUPPORT, VOTE_OPPOSE}} = type;
const vote = {
    support () {
        return {
            type: VOTE_SUPPORT
        }
    },
    oppose () {
        return {
            type: VOTE_OPPOSE
        }
    }
}
export default vote;