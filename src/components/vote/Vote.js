import React, { Component } from 'react';
import VoteHeader from './VoteHeader'
import VoteBody from './VoteBody'
import VoteFooter from './VoteFooter'
import PropTypes from 'prop-types'

class Vote extends Component {
    static defaultProps = {
        title:'default title',
        content: {
            n: 0,
            m: 0
        }
    }
    static childContextTypes = {
        n: PropTypes.number,
        m: PropTypes.number,
        support: PropTypes.func,
        oppose: PropTypes.func
    }
    getChildContext () {
        console.log('context')
        let {n , m} = this.state;
        function support() {
            n ++;
        }
        function oppose () {
            m ++;
        }
        return {
            n, m, 
            support: support,
            oppose: oppose
        }
    }
    constructor(props) {
        super(props)
        console.log('vote poops', props)
        this.state = {
            n: 100,
            m: 78,
            test: 0
        }
    }
    render() {
        console.log('render, vote')
        return (
            <section className={'panel panel-default'}>
                <VoteHeader title={this.props.title}/>
                <VoteBody content={this.props.content}/>
                <VoteFooter/>
                <button onClick={this.test}>render</button>
            </section>
        );
    }
    test = () => {
        this.setState(() => ({test: this.state.test + 1}))
    }
    support = () => {
        this.setState(() => {
            return {
                n: this.state.n + 1
            }
        })
    }
    oppose = () => {
        this.setState(() => {
            return {
                n: this.state.n + 1
            }
        })
        // console.log('oppose', this)
    }
    
}

export default Vote;