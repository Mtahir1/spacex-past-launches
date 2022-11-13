import React from 'react';
import SearchBar from './SpacexComponents/SearchBar';
import SearchResult from './SpacexComponents/SearchResult';
import PastLaunches from './SpacexComponents/PastLaunches';

const App = () => (

    <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5rem',
        flexDirection: 'column',
      }}
      >
      <div> <SearchBar /> </div>
      <div className='searchResult'><SearchResult /> </div>
      <div className='pastLaunches'><PastLaunches /> 
      </div>
  </div>
); 

export default App;
