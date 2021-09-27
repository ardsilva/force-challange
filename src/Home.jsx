import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import vader from './darth-vader.png';
import luke from './luke-skywalker.png';

const Home = () => {
    const history = useHistory();
    const [forceSide, setForceSide] = useState({});
    const [isLoading, setIsLoading] = useState(true);

  const getForceSide = () => {
    setIsLoading(true);
    Promise.race([axios
      .get("https://swapi.dev/api/people/1"), axios
      .get("https://swapi.dev/api/people/4")])
    .then(res => {console.log(res.data);
      setForceSide(res.data);
    }).catch(err => console.log(err))
    .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    getForceSide();
  }, []);

    return (
      <React.Fragment>
        <div><button onClick={() => history.push('/force-challange')}>back</button></div>
        <div>
            <button disabled={isLoading} onClick={() => getForceSide()}>choose your path again, Padawan</button>
        </div>
        <div>
          {!isLoading ? (
              <>
                <img 
                    style={{ borderRadius: '50%' }}
                    src={forceSide.name === 'Darth Vader' ? vader : luke} 
                    alt="Master" 
                />
                <p>Your master is <strong>{forceSide.name}</strong></p>
            </>
          ) : (
            <p>Checking ...</p>
          )}
        </div>
      </React.Fragment>
    );
  }

export default Home;
