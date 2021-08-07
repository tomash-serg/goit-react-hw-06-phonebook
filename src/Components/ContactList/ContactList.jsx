//Styles
import css from './ContactList.module.css';
//Utils
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/actions';
import { getFiltredContacts } from 'utils/getFiltredContacts';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFiltredContacts);

  const hangleContactDelete = id => () => dispatch(deleteContact(id));
  return (
    <>
      <h2 className={css.header}>Your contacts</h2>
      <ul className={css.list}>
        {filteredContacts.map(el => {
          return (
            <li className={css.listItem} key={el.id}>
              <span>{el.name}</span>
              <span>{el.tel}</span>
              <button type="button" onClick={hangleContactDelete(el.id)}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
