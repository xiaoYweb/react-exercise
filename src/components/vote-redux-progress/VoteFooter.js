import React, { Component } from 'react';
import {connect} from 'react-redux';
import action from '../../store/action';
// const {vote: {support, oppose}} = action;
class VoteFooter extends Component {
    constructor(props,context) {
        super(props)
        console.log('constructor VoteFooter', this)
    }
    render() {
        console.log('render footer', this.props)
        const {support, oppose} = this.props;
        return (
            <div className={'panel-footer'}>
                <button className={'brn btn-success'} style={{marginRight: '10px'}} onClick={() => {support('support111')}}>支持</button>
                <button className={'brn btn-danger'} onClick={() => {oppose('oppose111')}}>反对</button>
            </div>
        );
    }
}
function mapStateToProps (state) {
    return {
        ...state.vote
    }; //返回的是什么 就挂载在当前组件的props中
}
// function mapDispatchToProps (dispatch) {
//     return {
//         support () {
//             dispatch(support()) 
//         },
//         oppose () {
//             dispatch(oppose()) 
//         }
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(VoteFooter);
export default connect(mapStateToProps, action.vote)(VoteFooter);
