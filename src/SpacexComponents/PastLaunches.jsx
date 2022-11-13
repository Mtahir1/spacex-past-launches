import React, {useState, useEffect} from 'react';

const PastLaunches = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://api.spacexdata.com/v4/launches/past')
        .then((res) => res.json())
        .then((resJson) => {
          resJson.sort(function (a, b) {
            return a.date_local.localeCompare(b.date_local);
          });
          setItems(resJson)
        })
    }, [])

    return <div>
            <h4>Past Launches</h4>
            <div className='pastLaunches'>
              {items.reverse().slice(0, 3).map((item) =>  
                <div key={item.id} style={{ padding: '5px',}}>
                  <h5>{item.name}</h5>
                  <h6> {item.id} </h6>
                </div>
              )}
            </div>      
          </div>
};
  
export default PastLaunches;