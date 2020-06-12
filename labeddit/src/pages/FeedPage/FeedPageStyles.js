import styled from 'styled-components'


//********* CONTAINER DA PÁGINA   ********** */
export const PageContainer = styled.div`
    width:100vw;
    height: auto;
    max-width:100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #162635;
`
/*---------------------------- */


//********* CRIAR POST ********** */
export const CriarPostContainer = styled.div`
    height:30vh;
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const CriarPostForm = styled.form`
    background-color:white;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:30vw;
    border-radius: 5px;
    border: none;
    border-bottom-left-radius: 10px;
`
export const InputTitulo = styled.input`
    width:100%;
    height: 14vh;
    border-radius: 5px;
    border-bottom-left-radius:0;
    border-bottom-right-radius:0;
    border:none;
    border-bottom: 1px black solid;
`
export const InputTexto = styled.textarea`
    width:100%;
    max-width: 100%;
    height:100%;
    border:none;

`
export const BotaoPostar = styled.button`
    width:100%;
    border-top-left-radius:0;
    border-top-right-radius:0;
    background-color:#00c300;
    border:none;
    height: 9vh;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    box-shadow: inset 0 0 7px 2px #000000ab;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
/*---------------------------- */


//********* FEED ********** */
export const FeedContainer = styled.div`
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
export const PostContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    border: 1px black solid;
    background-color:white;
    height:fit-content;
    width:30vw;
    border-bottom: 1px black solid;
    height: fit-content;
    margin-top:4vh;
    border-radius: 5px;

`
export const Titulo = styled.h3`
    font-family: 'Special Elite', cursive;
`
export const Texto = styled.p`
    font-family: 'Roboto', sans-serif;
`
export const HeaderPost = styled.div`
    font-family: 'Roboto', sans-serif;
    display:flex;
    align-items:center;
    height: 45px;
    padding:2vh;
    border-bottom: 1px black solid;
    box-shadow: inset 0 0 4px 0px #0000006b;

`
export const MainPost = styled.div`
    height: fit-content;
    padding:2vh;
    border-bottom: 1px black solid;

`
export const FooterPost = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:2vh;
    box-shadow: inset 0 0 4px 0px #0000006b;

`

export const ComentarioContainer = styled.div`
display:flex;
`

export const ContadoComentario = styled.p`
margin-right: 1vh;
`

export const Comentario = styled.button`
    border: none;
    background-color: transparent;
    transition: 0.6s;
    :hover{
        color:#ec6e00;
    }
`

/*---------------------------- */
