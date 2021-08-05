//Styles
import css from './ContactList.module.css';

import { connect } from 'react-redux';
import { deleteContact } from 'redux/actions';
import { getFiltredContacts } from 'utils/getFiltredContacts';

const ContactList = ({ filteredContacts, contacts, deleteContact }) => {
  function onDeleteBtnClick(id) {
    deleteContact(id);
  }

  return (
    <>
      <h2 className={css.header}>Your contacts</h2>
      <ul className={css.list}>
        {filteredContacts.map(el => {
          return (
            <li className={css.listItem} key={el.id}>
              <span>{el.name}</span>
              <span>{el.phone}</span>
              <button type="button" onClick={e => onDeleteBtnClick(el.id)}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
    filteredContacts: getFiltredContacts(state),
  };
};

const mapDispathToProps = dispatch => {
  return {
    deleteContact: id => dispatch(deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispathToProps)(ContactList);
