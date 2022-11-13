import React, {useState} from 'react';
import SearchResult from './SearchResult';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = event => {
    setErrorMessage('');
    event.preventDefault();
    search !== '' && fetch('https://api.spacexdata.com/v4/launches/'+search)
    .then((res) => res.json())
    .then((resJson) => {
      setResults(resJson)
      setErrorMessage('')
    })
    .catch(error => setErrorMessage(error+''),setResults(''));
    if (search === '') {
      setErrorMessage('');
      setResults('');
    }
  };
    return <div>
      <form className='searchBar' onSubmit={handleSubmit}>
        <input type="text" 
        className='searchInput'
          placeholder="Please input ID" 
          value={search}
          onChange={handleChange}
        />
        <button type="submit" className='searchButton'>SUBMIT</button>     
      </form>
      <SearchResult 
        errorMessage={errorMessage}
        results={results}
      />
    </div>
  };
  
export default SearchBar;