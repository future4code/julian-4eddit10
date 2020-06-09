import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

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
    /* height: 20rem; */
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

    const goToLogin = () => {
        history.push('/');
    }

    return (
        <LoginPageContainer>

            <h3>Cadastro</h3>

            <FormContainer className={classes.root}>
                <TextField id="standard-basic" label="username" />
                <TextField id="standard-basic" label="e-mail" />
                <TextField id="standard-basic" label="senha" />
                <Button variant="contained" color="primary">Cadastrar</Button>
                <Button variant="contained" color="secondary" onClick={goToLogin}>Login</Button>
            </FormContainer>
            
        </LoginPageContainer>
    )
};

export default SignUpPage;