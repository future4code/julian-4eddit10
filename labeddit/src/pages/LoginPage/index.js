import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import { useHistory, useParams } from "react-router-dom";
import axios from "axios"

//********* CONTAINER DA PÁGINA   ********** */
const PageContainer = styled.div`
    width:100vw;
    height: 100vh;
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
    height: 12%;
    display: flex;
    justify-content: center;
`

const BotaoCadastrar = styled.button``
/*---------------------------- */

//********* CONTAINER DO FORM   ********** */
const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px black solid;
    height:40%;
    width:30%;
    padding:3%;
`
const Input = styled(TextField)``
const BotaoEntrar = styled.button``
/*---------------------------- */

//********* CONTAINER DO FOOTER   ********** */
const Footer = styled.div``
/*---------------------------- */

const LoginPage = (props) => {
    const history = useHistory();

    const onClickEntrar = () => {
        history.push("/feed");
    }

    const onClickCadastrar = () => {
        history.push("/signup");
    }


    return (
        <PageContainer>
            <Header>
                <BotaoCadastrar onClick={onClickCadastrar}>Cadastrar-se</BotaoCadastrar>
            </Header>
            <FormContainer>
                <Input
                    label="e-mail" />
                <Input
                    label="senha" />
                <BotaoEntrar onClick={onClickEntrar}>Entrar</BotaoEntrar>
            </FormContainer>
            <Footer></Footer>
        </PageContainer>
    )
};

export default LoginPage;