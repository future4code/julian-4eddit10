import styled from 'styled-components';
import Button from '@material-ui/core/Button';


export const PostPageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Post = styled.div`
    width: 40rem;
    
`
export const Title = styled.h2`
    font-family: 'Special Elite', cursive;
    font-size: 3rem;
    margin: 1rem 0;
`
export const User = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 1rem;
`
export const Text = styled.p`
    font-size: 1.3rem;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
`
export const CommentsContainer = styled.div`
    width: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const SendButton = styled(Button)`
    background-color: #ff5722;
    color: white;
    :hover {
        color: #ff5722;
        background-color: white;
        border: 1px solid #ff5722;
    }
`