import React, { Component } from 'react';

class VoteBody extends Component {
    constructor(props) {
        super(props)
        const {store: {getState}} = this.props;
        let {n, m} = getState().vote;
        this.state = {
            n, m
        }
    }
    componentDidMount () {
        const {store: {getState, subscribe}} = this.props;
        subscribe(() => {
            let {n, m} = getState().vote;
            this.setState(() => {
                return {n, m}
            })
        })
    }
    render() {
        console.log('render body', this)
        const {n, m} = this.state;
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

export default VoteBody;