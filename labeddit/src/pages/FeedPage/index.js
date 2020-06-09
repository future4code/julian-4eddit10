import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import { useHistory, useParams } from "react-router-dom";
import axios from "axios"

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

const InputTexto = styled.input``

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

const VotosContainer = styled.div`
    display:flex;
`

const BotaoVotos = styled.button`
    width:30px;
    height: 30px;
`

const ContadoComentario = styled.p``
/*---------------------------- */

const FeedPage = () => {
    const history = useHistory();

    const [listaPosts, setListaPosts] = useState([])

    useEffect(() => {
        // Contante que pega o valor de "token" que está salvo no localStorage
        const token = localStorage.getItem("token");
        // Condicional que verifiva se a variavel "token" está vazia ou se contém algo,
        if (token === null) {
            // caso o token esteja vazio, significa que o usuário precisa validar o login para
            // salvar o valor do token no localStorage, então ocorre o redirecionamento da rota
            //para a página de login.
            history.push("/login");
        }
        axios
            .get('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        //pega o valor do token e insere na autorização de requisição
                        'Authorization': `${token}`
                    }
                }
            )
            .then(response => {
                // salva o array de posts que foi retornado pela API em listaPosts"
                setListaPosts(response.data.posts)
            })
            .catch(error => {
                alert(error)
            })
    }, [])

    // Função que redireciona para a página de post individual, recebendo como parâmetro o
    // id do post clicado
    const goToPostPage = (id) => {
        //Redireciona a página mandando o id na URL
        history.push(`/post/${id}`);
    }

    return (
        <PageContainer>
            <Header></Header>
            <CriarPostContainer>
                <CriarPostForm>
                    <InputTitulo></InputTitulo>
                    <InputTexto></InputTexto>
                    <BotaoPostar>Postar</BotaoPostar>
                </CriarPostForm>
            </CriarPostContainer>
            <FeedContainer>
                {listaPosts.map((post) => {
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
                                <VotosContainer>
                                    <BotaoVotos>+</BotaoVotos>
                                    <p>{post.votesCount}</p>
                                    <BotaoVotos>-</BotaoVotos>
                                </VotosContainer>
                                <ContadoComentario>{post.commentsCount}</ContadoComentario>
                                {/* o onClick manda o id do post como parâmetro da função goToPostPage */}
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