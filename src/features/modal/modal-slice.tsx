import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ShowModalState {
  isOpen: boolean
}

const initialState: ShowModalState = {
  isOpen: false,
}

export const showModalSlice = createSlice({
  name: 'showModal',
  initialState,
  reducers: {
    show: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    }
  }
})

export const { show } = showModalSlice.actions

export default showModalSlice.reducer