import { Toaster } from 'react-hot-toast';

import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

import './App.css';
import css from './App.module.css';

const App = () => {
  return (
    <div className={css.phoneBookArea}>
      <Toaster position="top-right" toastOptions={{ duration: 1500 }} />
      <h3 className={css.mainTitle}>Phonebook goit-react-hw-07</h3>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
