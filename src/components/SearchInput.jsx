import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ onSubmit }) => {
  const [formSub, setFormSub] = useState('');
  const handleChange = event => {
    setFormSub(event.currentTarget.value.toLowerCase());
  };
  const handleSubmit = event => {
    event.preventDefault();
    setFormSub('');
    onSubmit(formSub);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={formSub} />
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchInput;

SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
