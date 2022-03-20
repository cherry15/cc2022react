import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

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

export const selectModal = (state: RootState) => state.showModal.isOpen

export default showModalSlice.reducer