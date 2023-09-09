import { createSlice } from "@reduxjs/toolkit";


const calcSlice = createSlice({
    name: 'calcSlice',
    initialState: {
        propertyCost: 1000000,
        firstPayment: 100000,
        period: 30,
        monthlyPayment: 2654,
    },
    reducers: {
        changePropertyCost(state, {payload}){
            state.propertyCost = parseInt(payload);
        },
        changeFirstPayment(state, {payload}){
            state.firstPayment = parseInt(payload);
        },
        changePeriod(state, {payload}){
            state.period = parseInt(payload);
        },
        changeMonthlyPayment(state, {payload}){
            state.monthlyPayment = parseInt(payload);
        },
    }
})

export const {
    changeFirstPayment,
    changePeriod,
    changeMonthlyPayment,
    changePropertyCost
} = calcSlice.actions;

export default calcSlice.reducer;
