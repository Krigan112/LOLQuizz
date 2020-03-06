import React, {} from 'react';
import winImage from '../assets/images/victory.png';
import lostImage from '../assets/images/defeat.png';
import styled from 'styled-components';
import victory from '../assets/sounds/victory.mp3';
import defeat from '../assets/sounds/defeat.mp3';

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
        console.log('isWin', isWin);
        const victoryAudio = new Audio(victory);
        victoryAudio.play().finally();
        return (
            <SDiv>
                <IsWin/>
            </SDiv>
        );
    } else if (isLost) {
        const defeatAudio = new Audio(defeat);
        defeatAudio.play().finally();
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
