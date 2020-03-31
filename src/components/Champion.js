import React from 'react';
import styled from "styled-components";
import ScrollableAnchor from "react-scrollable-anchor";

const Champion = ({ champion }) => {
    return (
        <ScrollableAnchor id={champion.key}>
            <ChampionContainer className={champion.isVisible ? 'visible' : ''}>
                <div className='champion-image-container'>
                    <img
                        className='champion-image'
                        src={'http://ddragon.leagueoflegends.com/cdn/10.4.1/img/champion/' + champion.id + '.png'}
                        alt={champion.name}
                    />
                </div>
                <div className='champion-details'>
                    <h2 className='champion-name'>{champion.name}</h2>
                    <p className='champion-desc'>{champion.title}</p>
                </div>
            </ChampionContainer>
        </ScrollableAnchor>
    );
};

const ChampionContainer = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90vw;
  margin-bottom: 20px;
  opacity: 0;
  
  &.visible {
    opacity: 1;
  }

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

export default Champion;
