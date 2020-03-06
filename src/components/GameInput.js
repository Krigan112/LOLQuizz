import React from 'react';
import styled from 'styled-components';
import GameTimer from './Timer';
import Counter from "./Counter";

const GameInput = ({isEnd, setEnd, guess, setGuess, champList, championCount}) => {
    return (
        <InputContainer>
            <StyledLabel>
                <span>Champion name</span>
                <input
                    disabled={isEnd ? 'disabled' : ''}
                    value={guess}
                    type='text'
                    onChange={event => setGuess(event.target.value)}
                />
                <GameTimer setEnd={setEnd}/>
                <Counter championCount={championCount} maxChamp={champList.length}/>
            </StyledLabel>
        </InputContainer>
    );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  position:fixed;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.7);
`;

const StyledLabel = styled.label`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: left;
  align-self: flex-start;
  justify-content: space-between;
  margin: 5px 0;
  color: black;
  align-items: center;
  & span {
    width: 30%;
  }
  & input {
    width: 70%;
    padding: 5px 0;
    background-color: white;
    border: none;
    
    &[disabled] {
      background-color: darkred;
    }
  }
`;

export default GameInput;
