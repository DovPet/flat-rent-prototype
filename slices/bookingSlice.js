import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: []
}

const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        bookNow: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeStay: (state, action) => {
            const filteredList = state.items.filter(x => x.image !== action.payload.image)
            state.items = filteredList
        },
        removeAllStays: (state, action) => {
            state.items = []
        }
    }
});

export const { bookNow, removeStay, removeAllStays } = bookingSlice.actions

export const selectItems = (state) => state.booking.items

export default bookingSlice.reducer