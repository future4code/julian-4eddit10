import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import { useHistory, useParams } from "react-router-dom";
import axios from "axios"
import { useForm } from '../../hooks/useForm'
import LikeButtons from '../../components/LikeButtons';
import Header from '../../components/Header'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

//********* CONTAINER DA PÁGINA   ********** */
const PageContainer = styled.div`
    width:100vw;
    height: auto;
    max-width:100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #162635;
`
/*---------------------------- */


//********* CRIAR POST ********** */
const CriarPostContainer = styled.div`
    height:30vh;
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const CriarPostForm = styled.form`
    background-color:white;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:30vw;
    border-radius: 5px;
    border: none;
    border-bottom-left-radius: 10px;
`
const InputTitulo = styled.input`
    width:100%;
    height: 14vh;
    border-radius: 5px;
    border-bottom-left-radius:0;
    border-bottom-right-radius:0;
    border:none;
    border-bottom: 1px black solid;
`
const InputTexto = styled.textarea`
    width:100%;
    max-width: 100%;
    height:100%;
    border:none;

`
const BotaoPostar = styled.button`
    width:100%;
    border-top-left-radius:0;
    border-top-right-radius:0;
    background-color:#00c300;
    border:none;
    height: 9vh;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    box-shadow: inset 0 0 7px 2px #000000ab;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
/*---------------------------- */


//********* FEED ********** */
const FeedContainer = styled.div`
    width:80%;
    height:fit-content;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
/*---------------------------- */


//********* POST ********** */
const PostContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    border: 1px black solid;
    background-color:white;
    height:fit-content;
    width:30vw;
    border-bottom: 1px black solid;
    height: fit-content;
    margin-top:4vh;
    border-radius: 5px;

`
const Titulo = styled.h3`
    font-family: 'Special Elite', cursive;
`
const Texto = styled.p`
    font-family: 'Roboto', sans-serif;
`
const HeaderPost = styled.div`
    font-family: 'Roboto', sans-serif;
    display:flex;
    align-items:center;
    height: 45px;
    padding:2vh;
    border-bottom: 1px black solid;
    box-shadow: inset 0 0 4px 0px #0000006b;

`
const MainPost = styled.div`
    height: fit-content;
    padding:2vh;
    border-bottom: 1px black solid;

`
const FooterPost = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:2vh;
    box-shadow: inset 0 0 4px 0px #0000006b;

`

const ComentarioContainer = styled.div`
display:flex;
`

const ContadoComentario = styled.p`
margin-right: 1vh;
`

const Comentario = styled.button`
    border: none;
    background-color: transparent;
    transition: 0.6s;
    :hover{
        color:#ec6e00;
    }
`

/*---------------------------- */

const FeedPage = (props) => {
    const history = useHistory();
    const [listaPosts, setListaPosts] = useState([])
    const { form, onChange } = useForm({ titulo: "", texto: "" });
    const token = localStorage.getItem("token");
    const [teste, setTeste] = useState(0)
    const handleInputChange = event => {
        const { name, value } = event.target;
        onChange(name, value);
    };

    useEffect(() => {
        if (token === null) {
            history.push("/");
        }
        pegaPosts()
    }, [])

    const pegaPosts = () => {
        axios
            .get('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${token}`
                    }
                }
            )
            .then(response => {
                setListaPosts(response.data.posts)
            })
            .catch(error => {
                alert(error)
            })
    }

    const goToPostPage = (id) => {
        history.push(`/post/${id}`);
    }

    const onClickPostar = event => {
        event.preventDefault();
        const body = {
            title: form.titulo,
            text: form.texto
        }
        console.log(form.titulo, form.texto)
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
        if (aux == 2) {
            voto = 0
        }
        if (aux == -2) {
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
                pegaPosts()
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
                {listaPosts.map((post) => {
                    let likeAtivadoValue = false;
                    let dislikeAtivadoValue = false;
                    if (post.userVoteDirection == 1) {
                        likeAtivadoValue = true
                        dislikeAtivadoValue = false
                    }
                    if (post.userVoteDirection == -1) {
                        likeAtivadoValue = false
                        dislikeAtivadoValue = true
                    }
                    if (post.userVoteDirection == 0) {
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