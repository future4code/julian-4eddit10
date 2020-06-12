import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import { useHistory, useParams } from "react-router-dom";
import axios from "axios"
import { useForm } from '../../hooks/useForm'
import Header from '../../components/Header'

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
    background-image: url('https://image3.uhdpaper.com/wallpaper-hd/minimalist-nature-forest-mountains-digital-art-uhdpaper.com-hd-36.jpg');
    background-size: cover;
`
/*---------------------------- */

//********* CONTAINER DO FORM   ********** */
const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 16px;
    box-shadow: inset 0px 0px 20px -8px #0000005c;
    border: 1px #00000038 solid;
    height: 45%;
    width: 30%;
    padding: 3%;
    padding-bottom: 5%;
    padding-top: 5%;
    background-color: white;
`
const Input = styled(TextField)``

const BotaoEntrar = styled.button`
   color: #ec6e00;
   width: 24vh;
   height: fit-content;
   min-height:fit-content;
   min-width:fit-content;
   padding:1.5vh;
   margin-top:8%;
   background-color:white;
   border:none;
   border: 1px #ec6e00 solid;
   border-radius:3px;
   font-size:1rem;
   text-transform: uppercase;
   transition: 0.7s;
   :hover{
    color: white;
    background-color: #ec6e00;
    border: 1px #7b7b7b solid;
   }
`
/*---------------------------- */

//********* CONTAINER DO FOOTER   ********** */
const Footer = styled.div``
/*---------------------------- */



const LoginPage = (props) => {
    const history = useHistory();
    const { form, onChange } = useForm({ emailInserido: "Terezinha", senha: "123" });

    const handleInputChange = event => {
        const { name, value } = event.target;
        onChange(name, value);
    };

    const onClickEntrar = event => {
        event.preventDefault();
        const body = {
            email: form.emailInserido,
            password: form.senha
        }
        console.log(form.emailInserido, form.senha)
        axios
            .post(
                'https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login',
                body,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            .then((response) => {
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("username", response.data.user.username);
                history.push("/feed");
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    const goToSignUpPage = () =>{
        history.push("/signup")
    }
 

    return (
        <PageContainer>
            <Header
                ButtonLabel={'Cadastrar-se'}
                onClickButton1 = {goToSignUpPage}
            />
            <FormContainer onSubmit={onClickEntrar}>
                <Input
                    label="e-mail"
                    name="emailInserido"
                    value={form.emailInserido}
                    onChange={handleInputChange} />
                <Input
                    label="senha"
                    name="senha"
                    value={form.senha}
                    onChange={handleInputChange}
                    type={"password"} />
                <BotaoEntrar>Entrar</BotaoEntrar>
            </FormContainer>
            <Footer></Footer>
        </PageContainer>
    )
};

export default LoginPage;