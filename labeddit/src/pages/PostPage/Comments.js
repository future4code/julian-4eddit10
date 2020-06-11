import React from 'react';
import styled from 'styled-components';
import LikeBar from './LikeBar';


const Container = styled.div`
    margin: 1rem;
`
const List = styled.div`
    margin: 1rem;

`

const CommentBox = styled.div`
    width: 100%;
    height: 6.5rem;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    padding: 1rem;

`

const Comments = ({comments}) => {
    return (
        <Container>
        
                {comments.map(comment => {
                    return (
                        <List key={comment.id}>
                            <CommentBox >
                                <h4>{comment.username}</h4>
                                <p>{comment.text}</p>
                            </CommentBox>
                            <LikeBar />
                        </List>
                    )
                })}

        </Container>
    )
}

export default Comments;