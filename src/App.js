import { ThemeStore } from './components/theme/theme';
import {LanguageStore} from './components/language/language';
import Curriculum from './components/curriculum/curriculum';

export default function App() {
  return (
    <LanguageStore>
      <ThemeStore>
        <Curriculum />
      </ThemeStore>
    </LanguageStore>
  );
}
