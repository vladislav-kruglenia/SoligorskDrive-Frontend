import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {EditCurrentPagePayload} from "./Types/Actions.types";
import {AppStartState} from "./StartState/AppStartState";


const appReducer = createSlice({
    name: 'appReducer',
    initialState: new AppStartState().getAppStartState(),
    reducers:{
        editCurrentPage(state, action: PayloadAction<EditCurrentPagePayload>){
            state.currentPage = action.payload
        }
    }
});

export const {editCurrentPage} = appReducer.actions;

export default appReducer.reducer