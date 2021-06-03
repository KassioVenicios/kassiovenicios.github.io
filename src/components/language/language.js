import React, {useState} from 'react';
import {
  CurriculumTextPtBr,
  CurriculumTextEnUs,
} from '../curriculum/curriculumData';

const langs = {
  'pt-br': CurriculumTextPtBr,
  'en-us': CurriculumTextEnUs,
};

export const LangContext = React.createContext();

export function LanguageStore({children}) {
  const defaultLang = 'pt-br';
  const [lang, setLang] = useState(defaultLang);

  const text = name => langs[lang][name];

  const changeLang = lang => setLang(lang);

  return (
    <LangContext.Provider value={{lang, text, changeLang}}>
      {children}
    </LangContext.Provider>
  );
}
