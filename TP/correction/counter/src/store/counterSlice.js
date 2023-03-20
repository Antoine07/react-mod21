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
    async (number) => {
        const mum = await delay(number, 500);

        return mum;
    }
);
 
export const counterSliceAsync = createSlice({
    name: 'counter2',
    initialState : { countA : 0, active: true },
    reducers: {
        // pour des méthodes qui ne sont pas asynchrone
    },
    // asynchrone 
    extraReducers: (builder) => {
      builder.addCase(counterAsync.pending, (state, action) => {
        console.log(state)
      });
      // payload = c'est le résultat de la resolve dans la promesse
      builder.addCase(counterAsync.fulfilled, (state, action) => {
        let count = action.payload ;
        // si la valeur dépasse 10 
        if( state.countA + count > 10){
            count  = 2*count;
        }

        if(state.countA + count > 20 ) {
            state.active = false;

            return ;
        }

        state.countA += count;
      });
      builder.addCase(counterAsync.rejected, (state, action) => {
        console.log(state)
      })
    },
  })

export default configureStore({
    // combine reducer == lorsqu'il y a plusieurs reducers 
    reducer: { 
        c : counterSlice.reducer,  
        ca: counterSliceAsync.reducer 
    }, // passe le state pour lecture dans useSelector
});