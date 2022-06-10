import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const inc = createAction('inc');
export const dec = createAction('dec');
export const zero = createAction('zero')
export const rand = createAction('rand');

export const counterReducer = createReducer(initialState, (builder) => {
    builder.addCase(inc, (state) => {
        state.value += 1;
    });
    builder.addCase(dec, (state) => {
        state.value > 0 ? state.value-- : state.value = 0
    });
    builder.addCase(zero, (state) => {
        state.value = initialState.value;
    });
    builder.addCase(rand, (state, action) => {
        state.value = action.payload;
    });
});