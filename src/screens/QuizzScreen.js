import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import GameInput from "../components/GameInput";
import Champion from "../components/Champion";
import { configureAnchors, goToAnchor } from 'react-scrollable-anchor';
import firstBloodSound from '../assets/sounds/firstblood.mp3';
import IsEnd from '../components/IsEnd';
import dk from '../assets/sounds/doublekill.mp3';
import tk from '../assets/sounds/triplekill.mp3';
import qk from '../assets/sounds/quadrakill.mp3';
import pk from '../assets/sounds/pentakill.mp3';
import hk from '../assets/sounds/hexakill.mp3';

const QuizzScreen = () => {
    configureAnchors({offset: -110, scrollDuration: 1000});
    const [isFirstBlood, setFirstBlood] = useState(true);
    const [isEnd, setEnd] = useState(false);
    const [isWin, setWin] = useState(false);
    const [isLost, setLost] = useState(false);
    const [comboTime, setComboTime] = useState(0);
    useEffect(() => {
        const comboTimer = setTimeout(() => {
            if (comboTime > 0) {
                setComboTime(comboTime - 1);
            } else if (comboTime <= 0) {
                setCombo(0);
                clearTimeout(comboTimer);
            }
        }, 1000);
        return () => {
            clearTimeout(comboTimer);
        }
    }, [comboTime]);
    const [combo, setCombo] = useState(0);
    useEffect(() => {
        if(!isEnd) {
            switch(combo){
                case 2:
                    const dka = new Audio(dk);
                    dka.play().finally();
                    break;
                case 3:
                    const tka = new Audio(tk);
                    tka.play().finally();
                    break;
                case 4:
                    const qka = new Audio(qk);
                    qka.play().finally();
                    break;
                case 5:
                    const pka = new Audio(pk);
                    pka.play().finally();
                    break;
                case 6:
                    const hka = new Audio(hk);
                    hka.play().finally();
                    break;
                default:
                    return;
            }
        }
    }, [isEnd, combo]);
    const [championCount, setChampionCount] = useState(0);
    useEffect(() => {
        if (champList.length > 0 && championCount >= champList.length) {
            setEnd(true);
            setWin(true);
        }
    }, [championCount]);
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
        setCombo(combo + 1);
        setComboTime(2);
    }

    const [guess, setGuess] = useState('');
    useEffect(() => {
        for (let key in champList) {
            if (champList[key].name.toLowerCase().replace(/\s/g, '') === guess.toLowerCase().replace(/\s/g, '') && !champList[key].isVisible) {
                goToAnchor(champList[key].key, false);
                setVisible(key);
                setChampionCount(championCount+1);
            }
        }
    }, [guess]);

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
                    <Champion key={champion.key} champion={champion}/>
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
