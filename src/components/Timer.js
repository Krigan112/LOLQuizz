import React, {useEffect, useState} from 'react';

const GameTimer = ({setLost}) => {
    const [seconds, setSeconds] = useState(1500);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (seconds > 0) {
                setSeconds(seconds-1);
                console.log('seconds - 1');
            } else {
                timer.toFixed(0);
                clearTimeout(timer);
                setLost(true);
            }
        }, 1000);
        return () => {
            clearTimeout(timer);
        }
    }, [seconds]);

    return (
        <div>
            {Math.floor(seconds / 60)}:{seconds % 60 } remaining
        </div>
    );
};

export default GameTimer;
