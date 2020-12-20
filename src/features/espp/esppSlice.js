import { createSlice } from '@reduxjs/toolkit'

export const esppSlice = createSlice({
  name: "espp",
  initialState: [
    { id: 0, date: "2017-11-30", acquiredPriceUSD: 83.63, acquiredPriceEUR: 70.29,    fmvUSD: 103,    fmvEUR: 86.57 , units: 0, totalLiab: 0, amountGain: 0  },
    { id: 1, date: "2018-05-31", acquiredPriceUSD: 85.44, acquiredPriceEUR: 73.07,    fmvUSD: 130.96, fmvEUR: 112.02, units: 0, totalLiab: 0, amountGain: 0  },
    { id: 2, date: "2018-11-30", acquiredPriceUSD: 107.34, acquiredPriceEUR: 94.83,   fmvUSD: 164.06, fmvEUR: 144.89, units: 0, totalLiab: 0, amountGain: 0  },
    { id: 3, date: "2019-05-31", acquiredPriceUSD: 142.63, acquiredPriceEUR: 127.37,  fmvUSD: 204.12, fmvEUR: 182.28, units: 0, totalLiab: 0, amountGain: 0  },
    { id: 4, date: "2019-11-30", acquiredPriceUSD: 152.25, acquiredPriceEUR: 138.11,  fmvUSD: 179.12, fmvEUR: 162.57, units: 0, totalLiab: 0, amountGain: 0  },
    { id: 5, date: "2020-05-31", acquiredPriceUSD: 146.14, acquiredPriceEUR: 131.45,  fmvUSD: 183.43, fmvEUR: 164.99, units: 0, totalLiab: 0, amountGain: 0  },
    { id: 6, date: "2020-11-30", acquiredPriceUSD: 151.27, acquiredPriceEUR: 126.21,  fmvUSD: 224.79, fmvEUR: 187.76, units: 0, totalLiab: 0, amountGain: 0  }
    ],

    //using "createSlice" used immer, meaning we can acheive immutability with regular syntax. immer uses JS tool called a Proxy to warp data, which we then mutate
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      //   state.value += 1
    },
    decrement: (state) => {
      //   state.value -= 1
    },
    incrementByAmount: (state, action) => {
      //   state.value += action.payload
    },
    updateEsppRow: (state, action) =>{
        state.map( row => {
            if(row.date === action.payload.date){
                row.units       = action.payload.units
                row.totalLiab   = action.payload.totalLiab
                row.amountGain  = action.payload.amountGain
            }
        })

    }
  },
});

export const { increment, decrement, updateEsppRow } = esppSlice.actions

export default esppSlice.reducer

// export const selectEspp = state => state.espp



//for async, use a "Thunk"..  redux-thunk middleware required for store when created (Toolkit's "configureStore" provides)

// export const incrementAsync = amount => dispatch => {
//     setTimeout(() => {
//       dispatch(incrementByAmount(amount))
//     }, 1000)
//   }

//call them with     store.dispatch(incrementAsync(5))
