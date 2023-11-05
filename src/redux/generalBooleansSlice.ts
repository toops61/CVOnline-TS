import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode: false,
    language: 'french'
}

const generalBooleansSlice = createSlice({
    name: "generalBooleans",
    initialState,
    reducers: {
        updateGeneralBooleans: (state,action: PayloadAction<{[key:string]:string|boolean}>) => {
            state = {...state,...action.payload};
            return state;
        }
    }
})

export const {updateGeneralBooleans} = generalBooleansSlice.actions;

export default generalBooleansSlice.reducer;