import React, { useEffect, useState } from 'react';

const SearchResult = ({errorMessage,results}) => {
  const [elapsedTime, setElapsedTime] = useState('');
  useEffect(() => {
    setElapsedTime('hh:mm:ss');
    if(results !=='' && results !== undefined) {
      var now = new Date();
      var launchDay = new Date(results.date_local);
      var elapsedSeconds = now - launchDay;
      const interval = setInterval(()=> {
        elapsedSeconds +=1;
        var hours = elapsedSeconds / 3600,
        minutes = (hours % 1) * 60,
        seconds = (minutes % 1) * 60;
        var Timer =  Math.floor(hours) + ":" + Math.floor(minutes) + ":" + Math.round(seconds);
        setElapsedTime(Timer);
      },1000);
      return () => clearInterval(interval);
    }
  }, [results]);

  return <div className='searchResultPosition'> 
          { errorMessage ==='' && results  && 
            <div key={results.id}>
              <h4 style={{ color: 'grey',}}>Search result </h4>
              <div className='resultTitle'> 
                <h2> {results.name} </h2>
                {results.success ? <div className='greenCircle' /> : <div className='redCircle' /> }
              </div>
              <h5> Elapsed time since launch </h5>
              <div className='resultStyle'>
                <h5> {elapsedTime} </h5>
                <h5> {results.id} </h5>
              </div>
            </div>
          } 
          { errorMessage !=='' && results === '' && 
            <div>
              <h4 style={{ color: 'grey', textAlign: 'left'}}>Search result </h4>
              <h6 style={{ textAlign: 'center'}}>{errorMessage}</h6>
            </div>
          }
        </div>
};
  
export default SearchResult;