import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import counterSlice from '../counter/counterSlice'

interface vpcNameState {
  name: string;
}

const initialState: vpcNameState = {
  name: "exampleVPC"
}

export const vpcSlice = createSlice({
  name: 'vpcName',
  initialState,
  reducers: {
    saveVpcName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
  },
})

export const { saveVpcName } = counterSlice.actions

export const selectCount = (state: RootState) => state.vpcName.name

export default vpcSlice.reducer
