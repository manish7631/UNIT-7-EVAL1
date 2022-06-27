import { legacy_createStore } from "redux";
import { reducer } from "./reducer";
const store=legacy_createStore(reducer)
 
//export const store = {};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}

export {store}