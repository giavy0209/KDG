import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import reducers from './reducers'

const store = createStore(reducers,applyMiddleware(thunk ))

store.subscribe(()=>{
    // console.log(store.getState());
})

export default store