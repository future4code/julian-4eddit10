import React from 'react';
import styled from 'styled-components';
import LikeBar from './LikeBar';


const Container = styled.div`
    margin: 1rem;
`

const Comment = styled.div`
    width: 100%;
    height: 6.5rem;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    padding: 1rem;

`

const Comments = () => {
    return (
        <Container>

            <Comment>
                <h4>usuário</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Quisque ut purus in ligula porttitor commodo.</p>            
            </Comment>

            <LikeBar />

        </Container>
    )
}

export default Comments;