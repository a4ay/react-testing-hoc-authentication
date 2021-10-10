import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import async from 'middleware/async';

import reducers from 'reducers';

export default function Root({children,initialState={}}){
    const store = createStore(reducers,initialState,applyMiddleware(async));
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}