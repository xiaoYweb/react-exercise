import React, { Component } from 'react';
import PropTypes from 'prop-types'

class VoteFooter extends Component {
    constructor(props,context) {
        super(props)
        console.log('VoteFooter', context)
    }
    static contextTypes = {
        support: PropTypes.func,
        oppose: PropTypes.func,
        n: PropTypes.number,
        m: PropTypes.number
    }
    render() {
        console.log('render footer')
        // const {support, oppose} = this.context;
        return (
            <div className={'panel-footer'}>
                <button className={'brn btn-success'} style={{marginRight: '10px'}} onClick={this.support}>支持</button>
                
                <button className={'brn btn-danger'} onClick={this.oppose}>反对</button>
            </div>
        );
    }
    support = () => {
        // console.log('support', this.context)
        this.context.support()
    }
    oppose = () => {
        // console.log('oppose', this.context)
        this.context.oppose()
    }
}

export default VoteFooter;