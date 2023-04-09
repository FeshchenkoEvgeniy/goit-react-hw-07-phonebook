import { ListItem, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { MdAccountCircle, MdDeleteForever } from 'react-icons/md';
import { selectFilterContacts, selectIsLoading } from '../../redux/selectors';
import { deleteContact } from '../../redux/operation';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilterContacts);
  const loading = useSelector(selectIsLoading);
  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <ul>
      {loading && <p>Loading...</p>}
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <MdAccountCircle size={16} /> <span>{name}: </span>
          <span>{number}</span>
          <Button type="button" onClick={() => handleDelete(id)}>
            <MdDeleteForever />
            delete
          </Button>
        </ListItem>
      ))}
    </ul>
  );
};
