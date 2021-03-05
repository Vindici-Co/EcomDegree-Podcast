import { createReducer } from "@reduxjs/toolkit";
import { increment } from "../actions/counter/counterActions";


interface CounterState {
  currentValue: number;
}

const initialState: CounterState = {
  currentValue: 0,
};

/**
 * @Reducer counterReducer
 * @case increment - adds the incremented payload to the store.currentvalue
 */
const counterReducer = createReducer(initialState, (builder) => {
  builder.addCase(increment, (state: CounterState, action) => {
    state.currentValue += action.payload.amount;
  });
});


export default counterReducer
