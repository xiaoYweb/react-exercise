import React, { Component } from 'react';
import VoteHeader from './VoteHeader'
import VoteBody from './VoteBody'
import VoteFooter from './VoteFooter'

class Vote extends Component {
    // static defaultProps = {
    //     title:'default title',
    //     content: {
    //         n: 0,
    //         m: 0
    //     }
    // }
    constructor(props) {
        super(props)
        console.log('vote poops', props)
        
    }
    render() {
        const {store} = this.props;
        console.log('render, vote')
        return (
            <section className={'panel panel-default'}>
                <VoteHeader title={this.props.title}/>
                <VoteBody content={this.props.content} store={store}/>
                <VoteFooter store={store}/>
                <button>render</button>
            </section>
        );
    }
    
}

export default Vote;