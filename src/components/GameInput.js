import React from 'react';
import styled from 'styled-components';
import GameTimer from './Timer';

const GameInput = ({guess, setGuess}) => {

    return (
        <InputContainer>
            <StyledLabel>
                <span>Champion name</span>
                <input
                    value={guess}
                    type='text'
                    onChange={event => setGuess(event.target.value)}
                />
                <GameTimer/>
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
  text-align: left;
  align-self: flex-start;
  justify-content: space-between;
  margin: 5px 0;
  color: black;
  align-items: center;
  & input {
    margin-left: 50px;
    padding: 5px;
    background-color: white;
    border: none;
  }
`;

export default GameInput;
