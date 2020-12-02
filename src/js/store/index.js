import {createStore} from "redux";
import rootReducer from "../reducers/";
// import rootReducer from "../reducers";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());   //may also pass initial state, useful for server side rendering & state preloading.. 
//->The state in Redux comes from reducers. 
// store.subscribe(()=> console.log(store.getState()))



export default store;
