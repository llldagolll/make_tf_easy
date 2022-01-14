import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'


interface VpcNameState {
  value: string
}

const initialState:VpcNameState = {
  value: "exampleVpc",
}

export const vpcSlice = createSlice({
  name: 'vpcName',
  initialState,
  reducers: {
    saveVpcName: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { saveVpcName } = vpcSlice.actions

export const customVpcName = (state: RootState) => state.vpcName.value

export default vpcSlice.reducer
