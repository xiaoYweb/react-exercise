import React, { Component } from 'react';
import VoteHeader from './VoteHeader'
import VoteBody from './VoteBody'
import VoteFooter from './VoteFooter'

class Vote extends Component {
    constructor(props) {
        super(props)
        console.log('vote props', props)
    }
    render() {
        console.log('render, vote')
        return (
            <section className={'panel panel-default'}>
                <VoteHeader title={this.props.title}/>
                <VoteBody content={this.props.content}/>
                <VoteFooter/>
                <button>render</button>
            </section>
        );
    }
    
}

export default Vote;