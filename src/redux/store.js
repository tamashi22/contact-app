import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./ContactReducer";

const setLocalData = (state) => {
  try {
    const Data = JSON.stringify(state);
    localStorage.setItem("LocalData", Data);
  } catch (error) {
    console.log(error);
  }
};
const getLocalData = () => {
  try {
    const localData = localStorage.getItem("LocalData");
    if (localData === null) return undefined;
    return JSON.parse(localData);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
const store = createStore(
  reducer,
  getLocalData(),
  composeWithDevTools(applyMiddleware(thunk))
);
store.subscribe(() => setLocalData(store.getState()));
export default store;
