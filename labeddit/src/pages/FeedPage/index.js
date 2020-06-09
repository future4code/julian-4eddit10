import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import { useHistory, useParams } from "react-router-dom";

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
    border: 1px black solid;
    height:30vh;
    width:100%;
    background-color:blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const CriarPostForm = styled.form`
    border: 1px black solid;
    background-color:yellow;
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
    height:500px;
    min-height: 100%;
    background-color:red;
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
                <PostContainer>
                    <HeaderPost>
                        <p>Usuário</p>
                    </HeaderPost>
                    <MainPost>
                        <h1>Titulo</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur nulla sapien, in tristique sem faucibus quis. Cras sit amet urna volutpat, sagittis eros at, feugiat risus. Nunc vel diam eu ipsum consectetur sollicitudin. Quisque at venenatis elit. Phasellus vestibulum fermentum erat, non imperdiet lorem. Etiam nisi ex, volutpat ac aliquam a, maximus in leo.</p>
                    </MainPost>
                    <FooterPost>
                        <VotosContainer>
                            <BotaoVotos>+</BotaoVotos>
                            <p>0</p>
                            <BotaoVotos>-</BotaoVotos>
                        </VotosContainer>
                        <ContadoComentario>0</ContadoComentario>
                    </FooterPost>
                </PostContainer>
            </FeedContainer>
        </PageContainer>
    )
};

export default FeedPage;