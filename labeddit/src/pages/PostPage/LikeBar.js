import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 1.5rem;
    border: 1px solid black;
`

const LikeBar = () => {
    return (
        <Container>
            <button>Like</button> 0 <button>Dislike</button>
        </Container>
    )
}

export default LikeBar;