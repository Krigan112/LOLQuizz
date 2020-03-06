import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import GameInput from "../components/GameInput";
import Champion from "../components/Champion";
import { configureAnchors, goToAnchor } from 'react-scrollable-anchor';
import firstBloodSound from '../assets/sounds/firstblood.mp3';
import IsEnd from '../components/IsEnd';

const QuizzScreen = () => {
    configureAnchors({offset: -85, scrollDuration: 1000});
    const [isFirstBlood, setFirstBlood] = useState(true);
    const [isEnd, setEnd] = useState(false);
    const [isWin, setWin] = useState(false);
    const [isLost, setLost] = useState(false);
    const [championCount, setChampionCount] = useState(0);
    useEffect(() => {
        if (champList.length > 0 && championCount >= champList.length) {
            setEnd(true);
            setWin(true);
        }
    });
    const [champList, setChampList] = useState([]);
    useEffect(() => {
        if (champList.length === 0) {
            if (localStorage.getItem('champList')) {
                setChampList(JSON.parse(localStorage.getItem('champList')));
            } else {
                fetchChamps().then(() => {
                    setChampList(JSON.parse(localStorage.getItem('champList')));
                });
            }
        }
    }, [champList.length]);

    function setVisible(championListKey) {
        if(isFirstBlood) {
            setFirstBlood(false);
            const audio = new Audio(firstBloodSound);
            audio.play().finally();
        }
        champList[championListKey].isVisible = true;
        setChampList(champList);
        setGuess('');
    }

    const [guess, setGuess] = useState('');

    useEffect(() => {
        for (let key in champList) {
            if (champList[key].name.toLowerCase().replace(/\s/g, '') === guess.toLowerCase().replace(/\s/g, '') && !champList[key].isVisible) {
                goToAnchor(champList[key].id);
                setVisible(key);
                setChampionCount(championCount+1);
            }
        }
    });
    async function fetchChamps() {
        const result = await axios({
            method: 'get',
            url: 'http://ddragon.leagueoflegends.com/cdn/10.4.1/data/en_US/champion.json'
        });
        localStorage.setItem('champList', JSON.stringify(Object.values(result.data.data)));
    }
    return (
        <div>
            <GameInput isEnd={isEnd} setEnd={setEnd} setLost={setLost} champList={champList} guess={guess} setGuess={setGuess} championCount={championCount}/>
            <ChampListContainer>
                {champList.map(champion => (
                    <Champion key={champion.id} champion={champion}/>
                ))}
            </ChampListContainer>
            <IsEnd isWin={isWin} isLost={isLost}/>
        </div>
    );
};

const ChampListContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

export default QuizzScreen;
