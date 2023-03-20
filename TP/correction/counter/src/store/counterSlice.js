import { createSlice, configureStore } from "@reduxjs/toolkit";

const aleaMax = 10;

const initialState = {
    number: 0,
    parity: null,
    step: 0
}

const parityName = {
    even : "even",
    odd: "odd"
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment:{
            // le reducer modifie le state
            reducer: (state, action) => {
               const { number } =  action.payload;
               console.log("actioncreateslice", action);

               state.number += number;
               state.parity = ( state.number % 2 ) ? parityName.odd : parityName.even
               state.step = number; 
            },
            // prépare le payload petite couche avant le reducer
            prepare: (coeff) => {
                // valeur aléatoire 
                const alea = Math.floor(Math.random() * aleaMax * coeff) + 1 ;
                console.log("paramter of prepare que l'on retrouve dans la méthode incremente dans le component", coeff)

                return {
                    payload:{
                        number: alea
                    }
                }
            }
        }
    }
});


export const { increment } = counterSlice.actions; 

export default configureStore({
    reducer: counterSlice.reducer // passe le state pour lecture dans useSelector
});