import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
  },
  reducers: {
    userLogin: state => {
        state.token = 'token'
    },
  },
});

export const {userLogin} = slice.actions;

export default slice.reducer;
