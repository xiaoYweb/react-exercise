import React, { Component } from 'react';

class VoteFooter extends Component {
    constructor(props,context) {
        super(props)
        console.log('VoteFooter', context)
    }
    render() {
        console.log('render footer')
        const {store: {dispatch}} = this.props;
        return (
            <div className={'panel-footer'}>
                <button className={'brn btn-success'} style={{marginRight: '10px'}} onClick={() => {dispatch({type: 'VOTE_SUPPORT'})}}>支持</button>
                
                <button className={'brn btn-danger'} onClick={() => {dispatch({type:'VOTE_OPPOSE'})}}>反对</button>
            </div>
        );
    }
}

export default VoteFooter;