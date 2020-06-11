import React from 'react';
import styled from 'styled-components'

const VotosContainer = styled.div`
    display:flex;
    width:50%;
`
const BotaoLike = styled.button`
    width:30px;
    height: 30px;
    background-color: ${({ likeAtivado }) => (likeAtivado ? 'green' : 'white')};
`
const BotaoDislike = styled.button`
    width:30px;
    height: 30px;
    background-color: ${({ dislikeAtivado }) => (dislikeAtivado ? 'red' : 'white')};
`

const LikeButtons = (props) => {
    return (
        <VotosContainer>
        <BotaoLike
            likeAtivado={props.likeValue}
            onClick={() => props.onClickButtons(props.id, props.userVoteDirection, 1)}>
            +
            </BotaoLike>
        <p>{props.votesCount}</p>
        <BotaoDislike 
        dislikeAtivado={props.dislikeValue} 
        onClick={() => props.onClickButtons(props.id, props.userVoteDirection, -1)}>-
        </BotaoDislike>
        </VotosContainer>
    )
};
export default LikeButtons;