import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LanguageDataType {
    [key: string]: { [key: string]: string };
  }
type LanguageVariantType = 'en' | 'bn';

type LanguageState = {
    en: LanguageDataType;
    bn: LanguageDataType;
    currentLang: LanguageVariantType;
};

const initialState: Partial<LanguageState> = {};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage(state, action: PayloadAction<string>) {
            state.currentLang = action.payload as LanguageVariantType;
        },
    },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;