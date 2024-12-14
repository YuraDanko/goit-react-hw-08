import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import style from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  if (!contacts || contacts.length === 0) {
    return <p>No contacts found.</p>;
  }

  return (
    <ul className={style.wraper}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <strong>{name}:</strong> {number}{" "}
          <button onClick={() => handleDelete(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
