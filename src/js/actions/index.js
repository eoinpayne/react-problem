import { ADD_ARTICLE, UPDATE_UNITS } from "../constants/action-types";
// import {  } from "../constants/action-types";


export function addArticle(payload){
    return {type: ADD_ARTICLE, payload}
}
export function updateUnits(payload){
    return {type: UPDATE_UNITS, payload}
}


// const updateUnits = (payload) => {
//     return {type: UPDATE_UNITS, payload}
// }