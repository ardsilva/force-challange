import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

const StartButton = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 1em 1.25em;
    border: 2px solid #2C97D1;
    border-radius: 10px;
    background: #2C97D1;
    color: #FFFFFF;
    letter-spacing: 0.35em;
    cursor: pointer;
`;

const Title = styled.h2`
    font-size: 72px;
    font-weight: 100;
    color: #2C97D1;
`;

const SubTitle = styled.h3`
    color: #2C97D1;
    font-size: 14px;
    font-weight: 400;
    margin: -60px 0px 60px 0px;
    letter-spacing: 0.35em;
`;

const Welcome = () => {
    const history = useHistory();
    return(
        <div>
            <Title>Welcome to <strong>iClinic</strong></Title>
            <SubTitle>FRONTEND CHALLENGE</SubTitle>
            <StartButton onClick={() => history.push('/force-side')}>START</StartButton>
        </div>
    )
}

export default Welcome;
