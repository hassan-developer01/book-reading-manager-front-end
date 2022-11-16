import {LayoutSliceType} from "@service/types/layout-slice.type";
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "@app/store";

const initialState: LayoutSliceType = {
  status: true
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    enableLayout: (state) => {
      state.status = true;
    },
    disableLayout: (state) => {
      state.status = false;
    }
  }
})

export const selectLayout = (state: RootState) => state.entities.layout
export const {enableLayout, disableLayout} = layoutSlice.actions