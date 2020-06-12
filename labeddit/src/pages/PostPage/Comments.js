import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    margin: 1rem;
`
const List = styled.div`
    margin: 1rem;

`

const CommentBox = styled.div`
    width: 40rem;
    height: 4.5rem;
    border: 1px solid #9e9e9e;
    border-radius: 3rem;
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
                                <h4>{comment.username}:</h4>
                                <p>{comment.text}</p>
                            </CommentBox>
                        </List>
                    )
                })}

        </Container>
    )
}

export default Comments;