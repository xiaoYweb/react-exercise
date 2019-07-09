import React, { Component } from 'react';
import {connect} from 'react-redux';
// import action from '../../store/action';
// const {vote: {support, oppose}} = action;
class VoteBody extends Component {
    constructor(props) {
        super(props)
        console.log('voteBody props', props)
    }
    render() {
        const {n, m} = this.props;
        let rate = n / (n + m);
        rate = rate ? (rate*100).toFixed(2) : 0;
        return (
            <div className={'panel-body'}>
                支持人数:<span>{n}</span><br/>
                反对人数:<span>{m}</span>
                支持率: <span>{rate}%</span>
            </div>
        );
    }
}
function mapStateToProps (state) {
    return {
        ...state.vote
    }; //返回的是什么 就挂载在当前组件的props中
}
export default connect(mapStateToProps, {})(VoteBody);