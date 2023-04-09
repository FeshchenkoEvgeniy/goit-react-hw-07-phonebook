import { useDispatch } from 'react-redux';
import { Div, Label } from './Filter.styled';
import { setFilter } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Div>
      <Label>
        Find contacts by name
        <input
          type="text"
          onChange={e => dispatch(setFilter(e.target.value))}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </Label>
    </Div>
  );
};

export default Filter;
