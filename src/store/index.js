import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  greeting: '',
};

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    const response = await axios.get('http://localhost:3000/random_greeting');
    return response.data.greeting;
  }
);

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchGreeting.fulfilled.type:
      return {
        ...state,
        greeting: action.payload,
      };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

