import { useDispatch } from 'react-redux';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';

const Contact = ({ id, name, number, deleteContact }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    console.log('id to delete: ', id);

    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contItem}>
      <div className={css.textBoxWrap}>
        <span className={css.spanThumb}>
          <FaUser className={css.iconArea} />
          {name}
        </span>
        <span className={css.spanThumb}>
          <FaPhoneAlt className={css.iconArea} />
          {number}
        </span>
      </div>
      <button
        className={css.delButton}
        type="button"
        // onClick={() => dispatch(deleteContact(id))} // чому тут передаю цифру id, а contactSlice отримує об'єкт?
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
