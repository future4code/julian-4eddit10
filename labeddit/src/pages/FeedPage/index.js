import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import { useHistory, useParams } from "react-router-dom";
import axios from "axios"
import { useForm } from '../../hooks/useForm'
import LikeButtons from '../../components/LikeButtons';


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
`
/*---------------------------- */

//********* CONTAINER DO HEADER   ********** */
const Header = styled.div`
    border: 1px black solid;
    width:100%;
    height: 12vh;
    display: flex;
    justify-content: center;
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
    border: 1px black solid;
    background-color:pink;
    height: fit-content;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:1%;
`
const InputTitulo = styled.input``
const InputTexto = styled.textarea``
const BotaoPostar = styled.button``
/*---------------------------- */


//********* FEED ********** */
const FeedContainer = styled.div`
    border: 1px black solid;
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
    border: 1px black solid;
    background-color:pink;
    height:fit-content;
    width:30vw;
    padding: 5vh;
    margin-top: 5vh;
`
const HeaderPost = styled.div``
const MainPost = styled.div``
const FooterPost = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5vh;;
`


const ContadoComentario = styled.p``
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
            history.push("/login");
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
        if (aux == 2){
            voto = 0
        }
        if (aux == -2){
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

    return (
        <PageContainer>
            <Header></Header>
            <CriarPostContainer>
                <CriarPostForm onSubmit={onClickPostar}>
                    <InputTitulo
                        name="titulo"
                        value={form.titulo}
                        onChange={handleInputChange} />
                    <InputTexto
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
                    if (post.userVoteDirection == 1){
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
                                <h1>{post.title}</h1>
                                <p>{post.text}</p>
                            </MainPost>

                            <FooterPost>
                                    <LikeButtons 
                                    votesCount={post.votesCount}
                                    likeValue={likeAtivadoValue}
                                    dislikeValue={dislikeAtivadoValue}
                                    onClickButtons={onClickVotar}
                                    id={post.id}
                                    userVoteDirection={post.userVoteDirection}></LikeButtons>
                                <ContadoComentario>{post.commentsCount}</ContadoComentario>
                                <button onClick={() => goToPostPage(post.id)}>Post page</button>
                            </FooterPost>

                        </PostContainer>
                    )
                })}

            </FeedContainer>
        </PageContainer>
    )
};

export default FeedPage;