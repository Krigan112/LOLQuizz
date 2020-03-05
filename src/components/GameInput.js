import React, {useState} from 'react';
import styled from 'styled-components';
import GameTimer from './Timer';

const GameInput = ({guess, setGuess}) => {
    const [isLost, setLost] = useState(false);
    return (
        <InputContainer>
            <StyledLabel>
                <span>Champion name</span>
                <input
                    disabled={isLost ? 'disabled' : ''}
                    value={guess}
                    type='text'
                    onChange={event => setGuess(event.target.value)}
                />
                <GameTimer setLost={setLost}/>
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
