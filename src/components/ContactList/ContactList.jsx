import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';

export const ContactList = ({ contacts }) => {

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contacts.id));

  return (
    <ul className={css.list}>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={css.listItem}>
          <span className={css.text}>
            {name}: {number}
          </span>
          <button
            type="text"
            onClick={handleDelete}
            className={css.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
