import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import Header from '../../components/Header';
import { LoginPageContainer, FormContainer, Input, BotaoCadastrar, Footer} from './SignUpPageStyles'

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup'



const SignUpPage = () => {
    const history = useHistory();
    const { form, onChange } = useForm({ username: '', email: '', password: '' });

    const goToLogin = () => {
        history.push('/');
    }

    const handleInputChange = event => {
        const { value, name } = event.target;
        onChange(name, value);

    };

    const signUp = async event => {
        event.preventDefault();
        try {
            const response = await axios.post(baseUrl, {
                email: form.email,
                password: form.password,
                username: form.username
            });
            window.localStorage.setItem('token', response.data.token)
            history.replace('/feed')
        } catch (err) {
            alert("Algo deu errado")
        }
    }

    return (
        <LoginPageContainer>
            <Header
                ButtonLabel={'Login'}
                onClickButton1={goToLogin}></Header>
            {/* TODO Required dos inputs */}
            <FormContainer onSubmit={signUp}>
                <Input type="text" label="username" name="username" onChange={handleInputChange} value={form.username} />
                <Input type="email" label="e-mail" name="email" onChange={handleInputChange} value={form.email} />
                <Input type="password" label="senha" name="password" onChange={handleInputChange} value={form.password} />
                <BotaoCadastrar>Cadastrar</BotaoCadastrar>
            </FormContainer>
            <Footer></Footer>
        </LoginPageContainer>
    )
};

export default SignUpPage;