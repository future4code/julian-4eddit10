import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';


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
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

const FormContainer = styled.form`
    width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    margin-top: 10rem;

`

const SignUpPage = () => {
    const classes = useStyles();
    const history = useHistory();
    const { form, onChange } = useForm({username: '', email: '', password: ''});


    const goToLogin = () => {
        history.push('/');
    }

    const handleInputChange = event => {
        const { value, name } = event.target;
        onChange(name, value);

    };

    const signUp = async () => {
        try {
            const response = await axios.post(baseUrl, {
                email: form.email,
                password: form.password,
                username: form.username
            });
            window.localStorage.setItem('token', response.data.token)
            history.replace('/feed')
        } catch(err) {
            alert("Algo deu errado")
        }
    }

    return (
        <LoginPageContainer>

            <h3>Cadastro</h3>
            {/* TODO Required dos inputs */}
            <FormContainer className={classes.root}>
                <TextField type="text" label="username" name="username" onChange={handleInputChange} value={form.username}/>
                <TextField type="email" label="e-mail" name="email" onChange={handleInputChange} value={form.email} />
                <TextField type="password" label="senha" name="password" onChange={handleInputChange} value={form.password}/>
                <Button variant="contained" color="primary" onClick={signUp}>Cadastrar</Button>
                <Button variant="contained" color="secondary" onClick={goToLogin}>Login</Button>
            </FormContainer>

            
            
        </LoginPageContainer>
    )
};

export default SignUpPage;