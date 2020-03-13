import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const IndexScreen = () => {

    return (
        <IndexContainer>
            <Sh1>Welcome to the LOLQuizz!</Sh1>
            <Sh2>Test your memory, and try to guess the name of each League of legends Champion!</Sh2>
            <Sspan>You have 25 minutes to guess all the champions. Good luck!</Sspan>
            <LinkContainer>
                <SLink to={"/quizz"}>BEGIN</SLink>
            </LinkContainer>
        </IndexContainer>
    );
};

const Sspan = styled.span`
  text-align: center;
  display: block;
`;

const IndexContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px 0;
`;

const Sh1 = styled.h1`
  margin: 0;
  text-align: center;
`;

const Sh2 = styled.h2`
  text-align: center;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const SLink = styled(Link)`
  text-align: center;
  display: block;
  width: 50%;
  border-radius: 5px;
  color: black;
  padding: 20px;
`;

export default IndexScreen;
