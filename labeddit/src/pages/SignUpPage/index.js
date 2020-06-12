import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import Header from '../../components/Header';

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
            width: '25ch',
        },
    },
}));

const LoginPageContainer = styled.div`
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
    padding-top: 2%;
    background-color: white;
`
const Input = styled(TextField)``

const BotaoCadastrar = styled.button`
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
const Footer = styled.footer``

const SignUpPage = () => {
    const classes = useStyles();
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