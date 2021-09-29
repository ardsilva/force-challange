import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import vader from '../assets/darth-vader.png';
import luke from '../assets/luke-skywalker.png';
import styled, {ThemeProvider} from 'styled-components';
import theme from 'styled-theming';
import Loading from './Loading';

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
    font-size: 1em;
    font-weight: bold;
    margin: 1em;
    padding: 1em;
    border: 2px solid ${boxColor};
    border-radius: 10px;

    &:disabled {
      opacity: .5;
      cursor: wait;
    }

    @media(max-width: 799px) {
      display: none
    }
`;

const MobileStyledButton = styled.button`
    background-color: ${boxColor};
    color: ${boxBackgroundColor};
    cursor: pointer;
    font-size: 1em;
    font-weight: bold;
    margin: 1em;
    padding: 1em;
    border: 2px solid ${boxColor};
    border-radius: 10px;

    &:disabled {
      opacity: .5;
      cursor: wait;
    }

    @media(min-width: 800px) {
      display: none
    }
`;

const BackButton  = styled.button`
    cursor: pointer;
    background-color: ${boxBackgroundColor};
    border: none;
    display: grid;
`;

const Icon = styled.svg`
    fill: currentColor;
    color: ${boxColor};
`;

const Label = styled.span`
    color: ${boxColor};
    font-size: 18px;
    line-height: 22px;
`;

const Image = styled.img`
    border-radius: 50%;
    width: 20%;
    @media(max-width: 768px) {
      width: 50%;
  }
`;

const P = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 44px;
`;

const Strong = styled.strong`
  @media(max-width: 768px) {
    display: list-item;
  }
`;

const ForceSide = () => {
    const history = useHistory();
    const [forceSide, setForceSide] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [theme, setTheme] = useState('');

  const getForceSide = () => {
    setIsLoading(true);
    Promise.race([
      axios.get("https://swapi.dev/api/people/1"),
      axios.get("https://swapi.dev/api/people/4")
    ]).then(res => {
      setForceSide(res.data);
      setTheme(res.data.name.split(' ')[0]);
    }).catch(err => console.log(err))
    .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    getForceSide();
    
    return () => {
    setIsLoading(false)
  }
  }, []);

    return (
    <ThemeProvider theme={{ mode: theme }}>
        <Box>
            <div>
                <BackButton onClick={() => history.push('/force-challenge')}>
                  <Icon viewBox="0 0 32 32" data-testid="svg-left-arrow">
                    <path d="M26.025 14.496l-14.286-.001 6.366-6.366L15.979 6 5.975 16.003 15.971 26l2.129-2.129-6.367-6.366h14.29z"/>
                  </Icon>
                  <Label>back</Label>
                </BackButton>
            </div>
            {!isLoading ? (
                <div>
                  <div>
                    <StyledButton
                        disabled={isLoading} 
                        onClick={() => getForceSide()}>choose your path again, Padawan
                    </StyledButton>
                  </div>
                    <Image 
                        src={forceSide.name === 'Darth Vader' ? vader : luke} 
                        alt="Master" 
                    />
                    <P>Your master is <Strong>{forceSide.name}</Strong></P>
                    <div>
                      <MobileStyledButton
                          disabled={isLoading} 
                          onClick={() => getForceSide()}>choose your path again, Padawan
                      </MobileStyledButton>
                    </div>
                </div>
            ) : (
              <div>
                <Loading window={window.innerWidth} />
              </div>
            )}
        </Box>
      </ThemeProvider>
    );
  }

export default ForceSide;
