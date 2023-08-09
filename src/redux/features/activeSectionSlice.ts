import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { SectionName } from '@/lib/types';

const initialState: initialStateType = {
  activeSection: 'Home',
  isClick: 0
};
type initialStateType = {
  activeSection: SectionName,
  isClick: number
};

export const activeSectionSlice = createSlice({
  name: 'activeSection',
  initialState,
  reducers: {
    setActiveSection: (state, action: PayloadAction<SectionName>) => {
      state.activeSection = action.payload;
    },
    setIsClick: (state, action: PayloadAction<number>) => {
      state.isClick = action.payload;
    }
  }
});

export const { setActiveSection, setIsClick } = activeSectionSlice.actions;

export default activeSectionSlice.reducer;