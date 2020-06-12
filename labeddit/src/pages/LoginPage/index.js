import React from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios"
import { useForm } from '../../hooks/useForm'
import Header from '../../components/Header'
import { PageContainer, FormContainer, Input, BotaoEntrar, Footer } from './LoginPageStyles';

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