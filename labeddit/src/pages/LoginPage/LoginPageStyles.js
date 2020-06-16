import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import floresta from '../../image/floresta.jpg'
//********* CONTAINER DA PÁGINA   ********** */
export const PageContainer = styled.div`
    width:100vw;
    height: 100vh;
    max-width:100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: url(${floresta});
    background-size: cover;
`
/*---------------------------- */

//********* CONTAINER DO FORM   ********** */
export const FormContainer = styled.form`
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
export const Input = styled(TextField)``
export const BotaoEntrar = styled.button`
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
export const Footer = styled.div``
/*---------------------------- */


