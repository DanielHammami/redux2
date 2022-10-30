import store from './store';
import * as actions from './actionTypes';

store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
        description: 'bug1'
    }
});


console.log(store.getState());