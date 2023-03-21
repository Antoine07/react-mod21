import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    count: 0
}
const urlUsers = `https://jsonplaceholder.typicode.com/users`;

export const fetchUsers = createAsyncThunk(
    'users/fetch',
    async () => {
        const response = await fetch(urlUsers);
        const users = await response.json()

        return users.data
    }
)

export const usersSliceAsync = createSlice({
    name: 'users',
    initialState,
    reducers: {
    },
    // asynchrone 
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            console.log(state)
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users.concat(action.paylaod)
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            console.log(state)
        })
    },
})

export default configureStore({
    reducer: usersSliceAsync.reducer
});