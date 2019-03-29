import { createStore, combineReducers } from "redux";
import userReducer from './reducers/user'
import guidelineReducer from "./reducers/guideline";

const reducers = combineReducers({
  user: userReducer,
  guideline: guidelineReducer
})

const storeConfig = () => {
  return createStore(reducers)
}

export default storeConfig; 
