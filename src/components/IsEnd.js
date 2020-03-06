import React, {} from 'react';
import winImage from '../assets/images/victory.png';
import lostImage from '../assets/images/defeat.png';

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

const IsEnd = (isWin, isLost) => {

    if (isWin) {
        return (
            <div>
                <IsWin/>
            </div>
        );
    } else if (isLost) {
        return (
            <div>
                <IsLost/>
            </div>
        );
    } else {
        return null;
    }
};

export default IsEnd;
