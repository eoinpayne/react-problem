// import {ADD_ARTICLE, UPDATE_UNITS} from "../constants/action-types.js"
import { ADD_ARTICLE, UPDATE_UNITS } from "../constants/action-types";


const initialState = {
    esppRowData:
  [
    { id: 0, date: "2017-11-30", acquiredPriceUSD: 83.63, acquiredPriceEUR: 70.29,     fmvUSD: 103,    fmvEUR: 86.57 },
    { id: 1, date: "2018-05-31", acquiredPriceUSD: 85.44, acquiredPriceEUR: 73.07,     fmvUSD: 130.96, fmvEUR: 112 },
    { id: 2, date: "2018-11-30", acquiredPriceUSD: 107.34, acquiredPriceEUR: 94.83,    fmvUSD: 164,    fmvEUR: 144.89 },
    { id: 3, date: "2019-05-31", acquiredPriceUSD: 142.63, acquiredPriceEUR: 127.37,   fmvUSD: 204.12, fmvEUR: 182.28, units: 10 },
    { id: 4, date: "2019-11-30", acquiredPriceUSD: 152.25, acquiredPriceEUR: 138.,     fmvUSD: 179.12, fmvEUR: 162.57, units: 10 },
    { id: 5, date: "2020-05-31", acquiredPriceUSD: 146.14, acquiredPriceEUR: 131.45,   fmvUSD: 183.43, fmvEUR: 164.99, units: 10 },
    { id: 6, date: "2020-11-30", acquiredPriceUSD: 999,      acquiredPriceEUR: 999,        fmvUSD: 0,      fmvEUR: 0,      units: 99 }
]
};

//use concat, slice, or the spread operator for arrays
//use Object.assign or object spread of objects

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
      return Object.assign({}, state, {
          articles: state.articles.concat(action.payload)         
      })
  }
  if (action.type === UPDATE_UNITS) {
    return Object.assign({}, state, {
        esppRowData: state.esppRowData.concat(action.payload)         
    })
}
  return state;
}


// const rootReducer = (state = initialState, action) => {
//     switch(action.type){
//         case ADD_ARTICLE: return (
//             Object.assign({}, state, {
//                 articles: state.articles.concat(action.payload)         
//             })
//         )
//         case UPDATE_UNITS: return
//         default: return state
    
//     }//switch
//   }

export default rootReducer;


