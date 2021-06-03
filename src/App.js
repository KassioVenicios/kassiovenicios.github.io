import {LanguageStore} from './components/language/language';
import Curriculum from './components/curriculum/curriculum';

export default function App() {
  return (
    <LanguageStore>
      <Curriculum />
    </LanguageStore>
  );
}
