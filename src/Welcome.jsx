import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

const StartButton = styled.button`
`;

const Welcome = () => {
    const history = useHistory();
    return(
        <div>
            <h2>Welcome to <strong>iClinic</strong></h2>
            <h6>FRONTEND CHALLENGE</h6>
            <main>
                <StartButton onClick={() => history.push('/side-pick')}>START</StartButton>
            </main>
        </div>
    )
}

export default Welcome;
