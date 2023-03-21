import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";

const urlUsers = `https://jsonplaceholder.typicode.com/users`;

const initialState = {
    users: [],
    count: 0
}

// FETCH pour récupérer les users 
export const fetchUsers = createAsyncThunk(
    'users/fetch',
    async () => {
        const response = await fetch(urlUsers);
        const users = await response.json();

         // action.payload
        return users.map(u => ({
            id : u.id,
            username: u.username,
            name: u.name,
            phone: u.phone,
            len: ( u.username + u.name).length
        }) )
    }
)

export const usersSliceAsync = createSlice({
    name: 'users',
    initialState,
    reducers: {
        deleteUser: {
            reducer : (state, action) => {
                state.users = state.users.filter(u => u.id !== action.payload);
            }
        }
    },
    // asynchrone pour le fetch 
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload ;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
        })
    },
}) ;

export const { deleteUser } = usersSliceAsync.actions;

export default configureStore({
    reducer: usersSliceAsync.reducer
});