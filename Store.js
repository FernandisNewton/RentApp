import { createStore } from "redux";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";
const middleware = [thunk];
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(rootReducer);

export default store;
