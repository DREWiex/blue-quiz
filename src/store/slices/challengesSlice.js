import { createSlice } from '@reduxjs/toolkit';

export const challengeSlice = createSlice({

    name: 'challenge',

    initialState: {
        cluster1: {
            smartBlue: false,
            meatLess: false,
            ecoMode: false,
            showerLess: false,
            washMachine: false
        },

        cluster2: {
            smartBlue: false,
            waterReUse: false,
            recycle: false,
            meatLess: false,
            ecoMode: false,
            showerLess: false
        }
    },


    reducers: {
        setSmartBlue: (state) => {
            state.cluster1.smartBlue = true;
            state.cluster2.smartBlue = true;
        },
        setMeatLess: (state) => {
            state.cluster1.meatLess = true;
            state.cluster2.meatLess = true; 
        },
        setEcoMode: (state) => {
            state.cluster1.ecoMode = true;
            state.cluster2.ecoMode = true; 
        },
        setShowerLess: (state) => {
            state.cluster1.showerLess = true;
            state.cluster2.showerLess = true; 
        },
        setWashMachine: (state) => {
            state.cluster1.washMachine = true;
        },
        setWaterReUse: (state) => {
            state.cluster2.waterReUse = true;
        },
        setRecycle: (state) => {
            state.cluster2.recycle = true;
        }

    }

});

export const {
    setSmartBlue,
    setMeatLess,
    setEcoMode,
    setShowerLess,
    setWashMachine,
    setWaterReUse,
    setRecycle
} = challengeSlice.actions;