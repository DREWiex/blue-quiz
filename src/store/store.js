import { configureStore } from '@reduxjs/toolkit';
import { challengeSlice, quizSlice } from './slices';

export const store = configureStore({

  reducer: {
    quiz: quizSlice.reducer,
    challenges: challengeSlice.reducer
  },

});