import React from 'react';
import { useHistory } from "react-router-dom";

const About = () => {
    const history = useHistory();
    return(
        <div>
            <h2>Welcome to <strong>iClinic</strong></h2>
            <h6>FRONTEND CHALLENGE</h6>
            <main>
            <button onClick={() => history.push('/side-pick')}>START</button>
            </main>
        </div>
    )
}

export default About;