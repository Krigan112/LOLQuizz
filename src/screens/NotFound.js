import React from 'react';
import styled from 'styled-components';

const NotFoundScreen = () => {
    return (
        <Styled404>
            <img
                alt='John Travolta is confused'
                src='https://thumbs.gfycat.com/FailingDeterminedIbadanmalimbe-max-1mb.gif'
            />
        </Styled404>
    );
};

const Styled404 = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default NotFoundScreen;
