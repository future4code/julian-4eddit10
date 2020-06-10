import React from 'react';
import styled from 'styled-components';
import LikeBar from './LikeBar';
import Comments from './Comments';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
        width: '40ch',
      },
    },
}));

const PostPageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Post = styled.div`
    width: 20rem;
`
const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
`
const CommentsContainer = styled.div`
    width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const PostPage = () => {
    const classes = useStyles();
    const history = useHistory();

    const goToFeed = () => {
        history.push('/feed');
    }

    return (
        <PostPageContainer>
            <button onClick={goToFeed}>Voltar para Feed</button>
            <Post>
                <h2>Título</h2>
                <h3>usuário</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Quisque ut purus in ligula porttitor commodo. 
                    Aliquam eleifend leo vel posuere elementum. 
                    Nam quis nisl bibendum, euismod nibh non, laoreet dolor. </p>
                <LikeBar />
            </Post>

            <FormContainer className={classes.root}>
                <TextField id="standard-basic" label="Comentário" />
                <Button variant="contained" color="primary">Enviar</Button>
            </FormContainer>
            
            <CommentsContainer>
                <p>3 Comentários:</p>
                <Comments />
                <Comments />
                <Comments />
            </CommentsContainer>
            
        </PostPageContainer>
    )
};

export default PostPage;