import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import CollabList from "../components/CollabList";

const usersData = "../src/data/users.json"


// FETCH pour récupérer les users 
export const fetchUsers = createAsyncThunk(
    'users/fetch',
    async () => {
        const response = await fetch(usersData);
        const users = await response.json();

        // action.payload
        return users;
    }
)

const initialState = {
    users: [],
    randomUser: [],
    copyUsers: [],
    old:[]
}

export const usersSliceAsync = createSlice({
    name: 'users',
    initialState,
    reducers: {
        search: (state, action) => {
            const { value, type } = action.payload;

            if (type === "name") {
                state.users = state.copyUsers;
                state.users = state.users.filter(user => user.lastname.includes(value) || user.firstname.includes(value));
                state.old = state.users;
            }

            if (type === "category") {
                state.users = state.old.filter(user => user.category.includes(value));
            }
        }
    },
    // asynchrone pour le fetch 
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            console.log("pending");
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            console.log("fulfilled");

            state.users = action.payload;
            const index = Math.floor(Math.random() * state.users.length);

            state.randomUser = state.users[index]

            // Calcul de l'âge

            const dateOfTheDay = new Date();
            const birthdate = new Date(state.randomUser.birthdate);


            state.randomUser.age = dateOfTheDay.getFullYear() - birthdate.getFullYear();

            if (dateOfTheDay.getMonth() < birthdate.getMonth() || (dateOfTheDay.getMonth() == birthdate.getMonth() && dateOfTheDay.getDate() < birthdate.getDate())) {
                state.randomUser.age--;
            }
            console.log(state.randomUser);

            state.users.map(user => {
                const birthdate = new Date(user.birthdate);
                user.age = dateOfTheDay.getFullYear() - birthdate.getFullYear()

                if (dateOfTheDay.getMonth() < birthdate.getMonth() || (dateOfTheDay.getMonth() == birthdate.getMonth() && dateOfTheDay.getDate() < birthdate.getDate())) {
                    user.age--;
                }
            });
            state.copyUsers = state.users;

        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            console.log("rejected");
        })
    },
});

export const { filterByCategory, search } = usersSliceAsync.actions;

export default configureStore({
    reducer: usersSliceAsync.reducer,
    // listReducer: ListSliceAsync.reducer
});