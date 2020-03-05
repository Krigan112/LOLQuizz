import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import GameInput from "../components/GameInput";
import Champion from "../components/Champion";
import { configureAnchors, goToAnchor } from 'react-scrollable-anchor'
import firstBloodSound from '../assets/sounds/firstblood.mp3'

const QuizzScreen = () => {
    configureAnchors({offset: -85, scrollDuration: 1000});
    const [isFirstBlood, setFirstBlood] = useState(true);
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
        goToAnchor(champList[championListKey].id);
        setGuess('');
    }

    const [guess, setGuess] = useState('');

    useEffect(() => {
        for (let key in champList) {
            if (champList[key].name.toLowerCase().replace(/\s/g, '') === guess.toLowerCase().replace(/\s/g, '')) {
                setVisible(key);
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
            <GameInput guess={guess} setGuess={setGuess}/>
            <ChampListContainer>
                {champList.map(champion => (
                    <Champion key={champion.id} champion={champion}/>
                ))}
            </ChampListContainer>
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
