import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import vader from './darth-vader.png';
import luke from './luke-skywalker.png';
import styled, {ThemeProvider} from 'styled-components';
import theme from 'styled-theming';

const boxBackgroundColor = theme('mode', {
  Darth: '#2A2A2A',
  Luke: '#FBFE63',
});

const boxColor = theme('mode', {
    Darth: '#FFFFFF',
    Luke: '#2A2A2A',
  });

const Box = styled.div`
  background-color: ${boxBackgroundColor};
  color: ${boxColor};
`;

const StyledButton = styled.button`
    background-color: ${boxColor};
    color: ${boxBackgroundColor};
    cursor: pointer;
`;

const BackButton  = styled.button`
    background-color: ${boxColor};
    color: ${boxBackgroundColor};
    cursor: pointer;
`;

const Image = styled.img`
    border-radius: 50%;
`;

const Home = () => {
    const history = useHistory();
    const [forceSide, setForceSide] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [theme, setTheme] = useState('');

  const getForceSide = () => {
    setIsLoading(true);
    Promise.race([axios
      .get("https://swapi.dev/api/people/1"), axios
      .get("https://swapi.dev/api/people/4")])
    .then(res => {console.log(res.data);
      setForceSide(res.data);
      setTheme(res.data.name.split(' ')[0]);
    }).catch(err => console.log(err))
    .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    getForceSide();
  }, []);

    return (
    <ThemeProvider theme={{ mode: theme }}>
        <Box>
            <div>
                <BackButton onClick={() => history.push('/force-challange')}>back</BackButton>
            </div>
            <div>
                <StyledButton
                disabled={isLoading} 
                onClick={() => getForceSide()}>choose your path again, Padawan</StyledButton>
            </div>
            <div>
            {!isLoading ? (
                <div>
                    <Image 
                        src={forceSide.name === 'Darth Vader' ? vader : luke} 
                        alt="Master" 
                    />
                    <p>Your master is <strong>{forceSide.name}</strong></p>
                </div>
            ) : (
                <p>Checking ...</p>
            )}
            </div>
        </Box>
      </ThemeProvider>
    );
  }

export default Home;
