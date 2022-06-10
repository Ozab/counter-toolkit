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
        if (state.value > 0) {
            state.value -= 1
        } else {
            state.value = 0
        }
    });
    builder.addCase(zero, (state) => {
        state.value = 0;
    });
    builder.addCase(rand, (state, action) => {
        state.value = action.payload;
    });
});