import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";

const aleaMax = 10;

const initialState = {
    number: 0,
    parity: null,
    step: 0
}

const parityName = {
    even: "even",
    odd: "odd"
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: {
            // le reducer modifie le state
            reducer: (state, action) => {
                const { number } = action.payload;
                console.log("actioncreateslice", action);

                state.number += number;
                state.parity = (state.number % 2) ? parityName.odd : parityName.even
                state.step = number;
            },
            // prépare le payload petite couche avant le reducer
            prepare: (coeff) => {
                // valeur aléatoire 
                const alea = Math.floor(Math.random() * aleaMax * coeff) + 1;
                console.log("paramter of prepare que l'on retrouve dans la méthode incremente dans le component", coeff)

                return {
                    payload: {
                        number: alea
                    }
                }
            }
        }
    }
});

export const { increment } = counterSlice.actions;

// async compteur

function delay(number, time) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // if (number < 0) {
            //     reject(`Number < 0, ${number} `)

            //     return;
            // }

            // ce que la promesse retourne comme valeur dans la fonction de callback 
            resolve(number);

        }, time)
    });
}

export const counterAsync = createAsyncThunk(
    'counterAsync',
    async () => {
        const num = await delay(1, 500);

        return num;
    }
);
 
const counterSliceAsync = createSlice({
    name: 'counter2',
    initialState : { count : 0 },
    reducers: {
    },
    extraReducers: (builder) => {
      builder.addCase(counterAsync.pending, (state, action) => {
        console.log(state)
      });
      builder.addCase(counterAsync.fulfilled, (state, action) => {
        console.log(action.payload)

        state.count = 1
      });
      builder.addCase(counterAsync.rejected, (state, action) => {
        console.log(state)

      })
    },
  })

export default configureStore({
    reducer: counterSlice.reducer, // passe le state pour lecture dans useSelector
});