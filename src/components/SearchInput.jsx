import { useState } from 'react';

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

// const SearchBox = ({ onSubmit }) => {
//   const [inputMovie, setInputMovie] = useState('');
//   const handleChange = evt => {
//     setInputMovie(evt.currentTarget.value.toLowerCase());
//   };
//   const handleSubmit = evt => {
//     setInputMovie('');
//     evt.preventDefault();
//     onSubmit(inputMovie);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <input value={inputMovie} type="text" onChange={handleChange} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };
// export default SearchBox;
