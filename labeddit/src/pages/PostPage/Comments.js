import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const Container = styled.div`
    margin: 1rem;
`
const List = styled.div`
    margin: 1rem;

`

const CommentBox = styled.div`
    width: 40rem;
    height: 5.5rem;
    border: 1px solid #9e9e9e;
    border-radius: 3rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;

`

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

const Comments = ({comments, id}) => {
    const onClickVotar = (commentId, userVoteDirection, voto) => {
        let aux = userVoteDirection + voto
        if (aux === 2) {
            voto = 0
        }
        if (aux === -2) {
            voto = 0
        }
        const body = {
            "direction": voto
        }
        axios
            .put(
                `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/comment/${commentId}/vote`,
                body,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${localStorage.token}`
                    }
                }
            )
            .then((response) => {
                alert("foi!")
                //window.location.reload()
            })
            .catch((error) => {
                alert(error.message)
            })
            console.log(voto)
    }
    return (
        <Container>
                {comments.map(comment => {
                    let likeAtivadoValue = false;
                    let dislikeAtivadoValue = false;
                    if (comment.userVoteDirection === 1) {
                        likeAtivadoValue = true
                        dislikeAtivadoValue = false
                    }
                    if (comment.userVoteDirection === -1) {
                        likeAtivadoValue = false
                        dislikeAtivadoValue = true
                    }
                    if (comment.userVoteDirection === 0) {
                        likeAtivadoValue = false
                        dislikeAtivadoValue = false
                    }
                    return (
                        <List key={comment.id}>
                            <CommentBox >
                                <h4>{comment.username}:</h4>
                                <p>{comment.text}</p>
                                <VotosContainer>
                                    <BotaoLike
                                        likeAtivado={likeAtivadoValue}
                                        onClick={() => onClickVotar(comment.id, comment.userVoteDirection, 1)}>
                                        <ArrowUpwardIcon/>
                                    </BotaoLike>
                                    <p>{comment.votesCount}</p>
                                    <BotaoDislike
                                        dislikeAtivado={dislikeAtivadoValue}
                                        onClick={() => onClickVotar(comment.id, comment.userVoteDirection, -1)}>
                                        <ArrowDownwardIcon/>
                                    </BotaoDislike>
                                </VotosContainer>
    
                            </CommentBox>
                            
                        </List>
                    )
                })}

        </Container>
    )
}

export default Comments;