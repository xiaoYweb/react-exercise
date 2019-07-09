import React, { Component } from 'react';

class VoteHeader extends Component {
    constructor(props) {
        super(props)
        console.log('VoteHeader poops', props)
    }
    render() {
        console.log('render header')
        return (
            <div className={'panel-heading'}>
                <h3 className={'panel-title'}>
                    {this.props.title}
                </h3>
            </div>
        );
    }
}

export default VoteHeader;