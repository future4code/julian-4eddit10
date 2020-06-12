import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios"
import { useForm } from '../../hooks/useForm'
import LikeButtons from '../../components/LikeButtons';
import Header from '../../components/Header'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { PageContainer, CriarPostContainer, CriarPostForm, InputTitulo, InputTexto, BotaoPostar, FeedContainer, PostContainer, Titulo, Texto, HeaderPost, MainPost, FooterPost, ComentarioContainer, ContadoComentario, Comentario } from './FeedPageStyles';

const FeedPage = (props) => {
    const history = useHistory();
    const { form, onChange } = useForm({ titulo: "", texto: "" });
    const token = localStorage.getItem("token");
    //let posts = useProducts();
    const [posts, setPosts] = useState([]); 
    const handleInputChange = event => {
        const { name, value } = event.target;
        onChange(name, value);
    };

    const pegaPosts = () => {
        axios
            .get('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${localStorage.token}`
                    }
                }
            )
            .then(response => {
                setPosts(response.data.posts)
            })
            .catch(error => {
                alert(error)
            })
            
    }

    if (token === null) {
        history.push("/");
    }


    useEffect(() => {
        
        pegaPosts()
    })


    const goToPostPage = (id) => {
        history.push(`/post/${id}`);
    }

    const onClickPostar = event => {
        event.preventDefault();
        const body = {
            title: form.titulo,
            text: form.texto
        }
        if ((form.titulo !== '') && (form.texto !== '')) {
            axios
                .post(
                    'https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts',
                    body,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `${token}`
                        }
                    }
                )
                .then((response) => {
                    alert("Post publicado!")
                    window.location.reload()
                })
                .catch((error) => {
                    alert(error.message)
                })
        }
    }

    const onClickVotar = (id, userVoteDirection, voto) => {
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
                `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/vote`,
                body,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${token}`
                    }
                }
            )
            .then((response) => {
                alert("foi!")
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    const logout = () => {
        localStorage.clear();
        history.push(`/`);
    }

    return (
        <PageContainer>
            <Header
                onClickButton1={logout}
                ButtonLabel={'Logout'} />
            <CriarPostContainer>
                <CriarPostForm onSubmit={onClickPostar}>
                    <InputTitulo
                        placeholder="Título"
                        name="titulo"
                        value={form.titulo}
                        onChange={handleInputChange} />
                    <InputTexto
                        placeholder="texto"
                        name="texto"
                        value={form.texto}
                        onChange={handleInputChange}></InputTexto>
                    <BotaoPostar>Postar</BotaoPostar>
                </CriarPostForm>
            </CriarPostContainer>
            <FeedContainer>
                {posts.map((post) => {
                    let likeAtivadoValue = false;
                    let dislikeAtivadoValue = false;
                    if (post.userVoteDirection === 1) {
                        likeAtivadoValue = true
                        dislikeAtivadoValue = false
                    }
                    if (post.userVoteDirection === -1) {
                        likeAtivadoValue = false
                        dislikeAtivadoValue = true
                    }
                    if (post.userVoteDirection === 0) {
                        likeAtivadoValue = false
                        dislikeAtivadoValue = false
                    }
                    return (
                        <PostContainer>
                            <HeaderPost>
                                <p>{post.username}</p>
                            </HeaderPost>
                            <MainPost>
                                <Titulo>{post.title}</Titulo>
                                <Texto>{post.text}</Texto>
                            </MainPost>

                            <FooterPost>
                                <LikeButtons
                                    votesCount={post.votesCount}
                                    likeValue={likeAtivadoValue}
                                    dislikeValue={dislikeAtivadoValue}
                                    onClickButtons={onClickVotar}
                                    id={post.id}
                                    userVoteDirection={post.userVoteDirection}></LikeButtons>
                                <ComentarioContainer>
                                    <ContadoComentario>{post.commentsCount}</ContadoComentario>
                                    <Comentario onClick={() => goToPostPage(post.id)}><ChatBubbleIcon /></Comentario>
                                </ComentarioContainer>
                            </FooterPost>

                        </PostContainer>
                    )
                })}

            </FeedContainer>
        </PageContainer>
    )
};

export default FeedPage;