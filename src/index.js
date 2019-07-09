import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import Vote from './components/vote/Vote'


// ReactDOM.render(<Vote title={'here is the title'} content={{n: 100, m: 78}}/>, document.getElementById('root'), function() {console.log('dom render', React)});

// import Vote from './components/vote-redux/Vote'
// import { createStore } from 'redux'

// let reducer = (state = { n: 2, m: 1 }, action) => {
//     switch (action.type) {
//         default:
//             break;
//         case 'VOTE_SUPPORT':
//             state = { ...state, n: state.n + 1 };
//             break;
//         case 'VOTE_OPPOSE':
//             state = { ...state, m: state.m + 1 };
//             break;
//     }
//     return state;
// }
// let store = createStore(reducer)
// ReactDOM.render(<Vote store={store} />, document.getElementById('root'), function () { console.log('dom render', React) });

// import Vote from './components/vote-redux-progress/Vote';
// import store from './store';
// ReactDOM.render(<Vote store={store} />, document.getElementById('root'), function () { console.log('dom render', React) });

import Vote from './components/vote-redux-progress/Vote';
import store from './store';
import {Provider} from 'react-redux';
ReactDOM.render(
    <Provider store={store}><Vote/></Provider>, 
    document.getElementById('root'), 
    function () { console.log('dom render', React) }
);





