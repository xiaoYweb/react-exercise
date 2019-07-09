import React, { Component } from 'react';
import PropTypes from 'prop-types'

class VoteBody extends Component {
    static contextTypes = {
        n: PropTypes.number,
        m: PropTypes.number
    }
    constructor(props, context) {
        super(props, context)
        console.log('VoteBody poops', this)
        this.state = {
            refresh: 0
        }
    }
    render() {
        console.log('render body', this)
        const {n, m} = this.context;
        let rate = n / (n + m);
        rate = rate ? (rate*100).toFixed(2) : 0;
        return (
            <div className={'panel-body'}>
                支持人数:<span onClick={this.support}>{n}</span><br/>
                反对人数:<span onClick={this.oppose}>{m}</span>
                支持率: <span>{rate}%</span>
            </div>
        );
    }
    support = () => {
        this.context.n ++;
        console.log(this.context)
        // this.render()// 可以 执行render函数  但不渲染context中改变的值
        this.setState(() => ({refresh: this.state.refresh +1}))
    }
    oppose = () => {
        this.context.m ++;
        console.log(this.context)
        this.setState(() => ({refresh: this.state.refresh +1}))
        // this.render()

    }
    
}

export default VoteBody;