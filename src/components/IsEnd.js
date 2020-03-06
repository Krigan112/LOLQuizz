import React, {} from 'react';
import winImage from '../assets/images/victory.png';
import lostImage from '../assets/images/defeat.png';
import styled from 'styled-components';

const IsWin = () => {
    return (
        <div>
            <img src={winImage} alt='Victory'/>
        </div>
    );
};

const IsLost = () => {
    return (
        <div>
            <img src={lostImage} alt='Defeat'/>
        </div>
    );
};

const IsEnd = ({isWin, isLost}) => {
    if (isWin) {
        return (
            <SDiv>
                <IsWin/>
            </SDiv>
        );
    } else if (isLost) {
        return (
            <SDiv>
                <IsLost/>
            </SDiv>
        );
    } else {
        return null;
    }
};

const SDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    & img {
      max-height: 100%;
      max-width: 100%;
    }
`;

export default IsEnd;
