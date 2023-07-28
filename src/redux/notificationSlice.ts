import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface NotificationState {
  value: number,
  previousValue: number
}

const initialState: NotificationState = {
  value: 0,
  previousValue: 0
}

export const NotificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.previousValue = state.value;
      state.value += action.payload.jump || 1;
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = NotificationSlice.actions

export default NotificationSlice.reducer