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

        return users // action.payload
    }
)

export const usersSliceAsync = createSlice({
    name: 'users',
    initialState,
    reducers: {
    },
    // asynchrone pour le fetch 
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
        })
    },
})

export default configureStore({
    reducer: usersSliceAsync.reducer
});