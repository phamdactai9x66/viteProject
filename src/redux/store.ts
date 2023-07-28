import { configureStore } from '@reduxjs/toolkit'
import notification from './notificationSlice'
import reduxThunk from 'redux-thunk'

export const store = configureStore({
    reducer: {
        notification: notification
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxThunk),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>