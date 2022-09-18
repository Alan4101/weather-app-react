import { createContext, Reducer, Dispatch } from "react";
import { getFromLocalStorage, setToLocalStorage } from "../utils/utils";

export const defaultContext = getFromLocalStorage('language') || 'ua';
export const languageContext = createContext(null);

type LanguageAction = 'language' | 'setLanguage';

interface LangContext {
    state: any;
    dispatch: Dispatch<any>;
}
interface LanguageReduserAction {
    type: LanguageAction;
    payload: string;
  }
  interface ReduserState {
    locale: string;
  }
export const languageReducer:Reducer<ReduserState, LanguageReduserAction > = (state, action) => {
    const { type, payload } = action; 
    switch (type) {
        case 'language':
            return {...state, defaultContext}
        case 'setLanguage':
            setToLocalStorage('language', payload)
            return {...state, locale: payload}            
        default:
            return state;
    }
}



