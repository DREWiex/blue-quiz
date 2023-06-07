import { createSlice } from '@reduxjs/toolkit';

export const quizSlice = createSlice({

    name: 'quiz',

    initialState: {
        answers: {
            quiz1: undefined,
            quiz2: 1,
            quiz3: undefined,
            quiz4: undefined,
            quiz5: undefined,
            quiz6: undefined,
            quiz7: undefined,
            quiz8: undefined,
            quiz9: undefined,
            quiz10: undefined,
            quiz11: undefined,
            quiz12: undefined,
            quiz13: undefined,
            quiz14: undefined,
            quiz15: undefined
        },

        liters: {
            quiz5: 0,
            quiz6: 0,
            quiz7: 0,
            quiz8: 0,
            quiz9: 0,
            quiz10: 0,
            quiz11: 0,
            quiz12: 0,
            quiz13: 0,
            quiz14: 0,
        },

        euros: {
            quiz5: 0,
            quiz6: 0,
            quiz7: 0,
            quiz8: 0,
            quiz9: 0,
            quiz10: 0,
            quiz11: 0,
            quiz12: 0,
            quiz13: 0,
            quiz14: 0,
        },

        pixels: {
            quiz5: 0,
            quiz6: 0,
            quiz7: 0,
            quiz8: 0,
            quiz9: 0,
            quiz10: 0,
            quiz11: 0,
            quiz12: 0,
            quiz13: 0,
            quiz14: 0,
        },

        person: ['*'],

        backRequestState:'',
        dataRequestState:'',
        dataRequest:''
    },


    reducers: {
        setAnswer1: (state, { payload }) => {
            state.answers.quiz1 = payload.answer;
        },

        setAnswer2: (state, { payload }) => {
            state.answers.quiz2 = payload.answer;
            payload.operation == 'sumar' ? state.person.push('*') : state.person.pop(); // 'person.length' será el total de iconos a renderizar en el map de la QQ2.
        },

        setAnswer3: (state, { payload }) => {
            state.answers.quiz3 = payload.answer;
        },

        setAnswer4: (state, { payload }) => {
            state.answers.quiz4 = payload.answer;
        },

        setAnswer5: (state, { payload }) => {
            state.liters.quiz5 = 0;
            state.euros.quiz6 = 0;
            state.pixels.quiz5 = 0;
            state.answers.quiz5 = payload.answer;
            state.liters.quiz5 = payload.liters;
            state.euros.quiz5 = payload.euros;
            state.pixels.quiz5 = payload.pixels;
        },

        setAnswer6: (state, { payload }) => {
            state.liters.quiz6 = 0;
            state.euros.quiz6 = 0;
            state.pixels.quiz6 = 0;
            state.answers.quiz6 = payload.answer;
            state.liters.quiz6 = payload.liters;
            state.euros.quiz6 = payload.euros;
            state.pixels.quiz6 = payload.pixels;
        },

        setAnswer7: (state, { payload }) => {
            state.liters.quiz7 = 0;
            state.euros.quiz7 = 0;
            state.pixels.quiz7 = 0;
            state.answers.quiz7 = payload.answer;
            state.liters.quiz7 = payload.liters;
            state.euros.quiz7 = payload.euros;
            state.pixels.quiz7 = payload.pixels;
        },

        setAnswer8: (state, { payload }) => {
            state.liters.quiz8 = 0;
            state.euros.quiz8 = 0;
            state.pixels.quiz8 = 0;
            state.answers.quiz8 = payload.answer;
            state.liters.quiz8 = payload.liters;
            state.euros.quiz8 = payload.euros;
            state.pixels.quiz8 = payload.pixels;
        },

        setAnswer9: (state, { payload }) => {
            state.liters.quiz9 = 0;
            state.euros.quiz9 = 0;
            state.pixels.quiz9 = 0;
            state.answers.quiz9 = payload.answer;
            state.liters.quiz9 = payload.liters;
            state.euros.quiz9 = payload.euros;
            state.pixels.quiz9 = payload.pixels;
        },

        setAnswer10: (state, { payload }) => {
            state.liters.quiz10 = 0;
            state.euros.quiz10 = 0;
            state.pixels.quiz10 = 0;
            state.answers.quiz10 = payload.answer;
            state.liters.quiz10 = payload.liters;
            state.euros.quiz10 = payload.euros;
            state.pixels.quiz10 = payload.pixels;
        },

        setAnswer11: (state, { payload }) => {
            state.liters.quiz11 = 0;
            state.euros.quiz11 = 0;
            state.pixels.quiz11 = 0;
            state.answers.quiz11 = payload.answer;
            state.liters.quiz11 = payload.liters;
            state.euros.quiz11 = payload.euros;
            state.pixels.quiz11 = payload.pixels;
        },

        setAnswer12: (state, { payload }) => {
            state.liters.quiz12 = 0;
            state.euros.quiz12 = 0;
            state.pixels.quiz12 = 0;
            state.answers.quiz12 = payload.answer;
            state.liters.quiz12 = payload.liters;
            state.euros.quiz12 = payload.euros;
            state.pixels.quiz12 = payload.pixels;
        },

        setAnswer13: (state, { payload }) => {
            state.liters.quiz13 = 0;
            state.euros.quiz13 = 0;
            state.pixels.quiz13 = 0;
            state.answers.quiz13 = payload.answer;
            state.liters.quiz13 = payload.liters;
            state.euros.quiz13 = payload.euros;
            state.pixels.quiz13 = payload.pixels;
        },

        setAnswer14: (state, { payload }) => {
            state.liters.quiz14 = 0;
            state.euros.quiz14 = 0;
            state.pixels.quiz14 = 0;
            state.answers.quiz14 = payload.answer;
            state.liters.quiz14 = payload.liters;
            state.euros.quiz14 = payload.euros;
            state.pixels.quiz14 = payload.pixels;
        },

        setAnswer15: (state, { payload }) => {
            state.answers.quiz15 = payload.answer;
        },

        setRequestState: (state, action) => {
            state.backRequestState = action.payload
        },
        setDataPredictions: (state, action) => {
            state.dataRequest = action.payload
            console.log(state.dataRequest)
        },
        setDataRequestState: (state, action) => {
            state.dataRequestState = action.payload
            console.log(state.dataRequestState)
        }

    }

});

export const {
    setAnswer1,
    setAnswer2,
    setAnswer3,
    setAnswer4,
    setAnswer5,
    setAnswer6,
    setAnswer7,
    setAnswer8,
    setAnswer9,
    setAnswer10,
    setAnswer11,
    setAnswer12,
    setAnswer13,
    setAnswer14,
    setAnswer15,
    setRequestState,
    setDataPredictions,
    setDataRequestState
} = quizSlice.actions;