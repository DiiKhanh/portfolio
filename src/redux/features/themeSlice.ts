import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type ThemeType = {
  theme: 'light' | 'dark'
};


const initialState:ThemeType = {
  theme: 'light'
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state, action:PayloadAction<'light' | 'dark'>) => {
      const theme = action.payload;
      if (theme === 'light') {
        state.theme = 'dark';
        window.localStorage.setItem('theme', 'dark');
        document.documentElement.classList.add('dark');
      } else {
        state.theme = 'light';
        window.localStorage.setItem('theme', 'light');
        document.documentElement.classList.remove('dark');
      }
    },
    setTheme: (state, action:PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    }
  }
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;