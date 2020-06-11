import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import LikeBar from './LikeBar';
import Comments from './Comments';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';




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
    const pathParams = useParams();
    const [post, setPost] = useState([]); 
    const [comentarios, setComentarios] = useState([])
    const { form, onChange } = useForm({comment: ''})
    

    const postDetails = async () => {
        try {
            const response = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.idPost}`, {
                headers: {
                    "Authorization": localStorage.token
            }})
            setPost(response.data.post)
            setComentarios(response.data.post.comments)

        } catch (error) {
            console.log("ERROR")
        }
    }

    useEffect(() => {
        postDetails();
        
    }, [])

    const handleInputChange = event => {
        const { name, value } = event.target;
        onChange(name, value);
    };

    const sendComment = async () => {
        const body = {
            text: form.comment
        }
        try {
            await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.idPost}/comment`, body, {
                headers: {
                    "Authorization": localStorage.token
            }})
            alert("Comentário enviado com sucesso!")
            postDetails();
        } catch (err) {
            console.error(err)
        }
    }
    const goToFeed = () => {
        history.push('/feed');
    }

    return (
        <PostPageContainer>
            <button onClick={goToFeed}>Voltar para Feed</button>
            <Post>
                <h2>{post.title}</h2>
                <h3>{post.username}</h3>
                <p>{post.text}</p>
                <LikeBar />
            </Post>

            <FormContainer className={classes.root}>
                <TextField label="Comentário" name="comment" onChange={handleInputChange} value={form.comment}/>
                <Button variant="contained" color="primary" onClick={sendComment}>Enviar</Button>
            </FormContainer>
            
            <CommentsContainer>
                <p>{comentarios.length} Comentários:</p>
                <Comments comments={comentarios}/>
            </CommentsContainer>
            
        </PostPageContainer>
    )
};

export default PostPage;