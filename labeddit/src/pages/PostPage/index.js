import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comments from './Comments';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import Header from '../../components/Header'
import { PostPageContainer, Post, Title, User, Text, FormContainer, CommentsContainer, SendButton } from './PostPageStyles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
        width: '40ch',
      },
    },
}));

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
    })

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
            <Header
                onClickButton1={goToFeed}
                ButtonLabel={'Feed'} />
            <Post>
                <Title>{post.title}</Title>
                <User>{post.username}</User>
                <Text>{post.text}</Text>
            </Post>

            <FormContainer className={classes.root}>
                <TextField label="Comentário" name="comment" onChange={handleInputChange} value={form.comment}/>
                <SendButton variant="contained" onClick={sendComment}>Enviar</SendButton>
            </FormContainer>
            
            <CommentsContainer>
                <p>{comentarios.length} Comentários:</p>
                <Comments comments={comentarios} id={pathParams.idPost}/>
            </CommentsContainer>
            
        </PostPageContainer>
    )
};

export default PostPage;