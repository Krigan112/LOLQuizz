import React, {useEffect, useState} from 'react';

const GameTimer = () => {
    const [seconds, setSeconds] = useState(120);

    useEffect(() => {
        setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds-1);
                console.log('seconds - 1');
            } else {
                clearInterval();
            }
        }, 1000);
    }, [seconds]);

    return (
        <div>
            {Math.floor(seconds / 60)}:{seconds % 60 } remaining
        </div>
    );
};

export default GameTimer;
