import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import GameInput from "../components/GameInput";
import { configureAnchors, goToAnchor } from 'react-scrollable-anchor'

const QuizzScreen = () => {
    configureAnchors({offset: -60, scrollDuration: 2000});
    const [champList, setChampList] = useState([]);
    useEffect(() => {
        if (champList.length === 0) {
            if (localStorage.getItem('champList')) {
                console.log(JSON.parse(localStorage.getItem('champList')));
                setChampList(JSON.parse(localStorage.getItem('champList')));
            } else {
                fetchChamps().then(() => {
                    setChampList(JSON.parse(localStorage.getItem('champList')));
                });
            }
        }
    }, [champList.length]);
    const [guess, setGuess] = useState('');

    function setVisible(championId) {
        console.log('Set Visible : ', championId);
        goToAnchor(championId);
    }

    useEffect(() => {
        for (let key in champList) {
            if (champList[key].name.toLowerCase().replace(/\s/g, '') === guess.toLowerCase().replace(/\s/g, '')) {
                setVisible(champList[key].id);
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
            <GameInput setGuess={setGuess}/>
            <ChampListContainer>
                {champList.map(champion => (
                    <Champion id={champion.id} key={champion.id}>
                        <div className='champion-image-container'>
                            <img
                                className='champion-image'
                                src={'http://ddragon.leagueoflegends.com/cdn/10.4.1/img/champion/'+champion.id+'.png'}
                                alt={champion.name}
                            />
                        </div>
                        <div className='champion-details'>
                            <h2 className='champion-name'>{champion.name}</h2>
                            <p className='champion-desc'>{champion.title}</p>
                        </div>
                    </Champion>
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

const Champion = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90vw;
  margin-bottom: 20px;

  & .champion-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 10px 0 0 10px;

    & .champion-image {
      height: 100%;
    }
  }

  & .champion-details {
    width: 60%;
    opacity: 0.7;
    background-color: white;
    border-radius: 0 10px 10px 0;

    & .champion-name {
      padding-left: 10px;
    }

    & .champion-desc {
      position: relative;
      line-height: 1.2em;
      padding-left: 10px;
    }

    & .champion-link {
      color: black;
      padding-left: 10px;
      cursor: pointer;
    }
  }
`;

export default QuizzScreen;
