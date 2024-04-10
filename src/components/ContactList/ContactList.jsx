import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import { deleteContact } from '../../redux/contactsOps';

import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contListArea}>
      {filteredContacts.map(elm => {
        return <Contact key={elm.id} deleteContact={deleteContact} {...elm} />;
      })}
    </ul>
  );
};

export default ContactList;
