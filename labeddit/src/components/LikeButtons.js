import React from 'react';
import styled from 'styled-components'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const VotosContainer = styled.div`
    display:flex;
    width:50%;
    align-items:center;
`
const BotaoLike = styled.button`
    width:30px;
    height: 30px;
    background-color: transparent;
    color: ${({ likeAtivado }) => (likeAtivado ? 'green' : 'black')};
    border: none;
    transition: 0.6s;

    :hover{
        color:green;
    }
`
const BotaoDislike = styled.button`
    width:30px;
    height: 30px;
    background-color: transparent;
    color: ${({ dislikeAtivado }) => (dislikeAtivado ? 'red' : 'black')};
    border: none;
    transition: 0.6s;

    :hover{
        color:red;
    }

`

const LikeButtons = (props) => {
    return (
        <VotosContainer>
            <BotaoLike
                likeAtivado={props.likeValue}
                onClick={() => props.onClickButtons(props.id, props.userVoteDirection, 1)}>
                <ArrowUpwardIcon/>
            </BotaoLike>
            <p>{props.votesCount}</p>
            <BotaoDislike
                dislikeAtivado={props.dislikeValue}
                onClick={() => props.onClickButtons(props.id, props.userVoteDirection, -1)}>
                <ArrowDownwardIcon/>
            </BotaoDislike>
        </VotosContainer>
    )
};
export default LikeButtons;