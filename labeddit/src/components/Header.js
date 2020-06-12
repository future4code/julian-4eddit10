import React from 'react';
import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';

const HeaderContainer = styled.header`
    background-color:#f5f5f5;
    width:100%;
    height: 12vh;
    min-height:72px;
    display:flex;
    align-items:center;
    padding-right: 4vw;
    padding-left: 4vw;
    justify-content:space-between;
    box-shadow: inset 0px 0 4px 3px rgba(0, 0, 0, 0.08);
`

const LogoContainer = styled.div`
    display:flex;
    height: 100%;
    width: fit-content;
    justify-content:space-between;
    align-items:center;
`

const Botao = styled.button`
   color: #ec6e00;
   width: 24vh;
   height: fit-content;
   min-height:fit-content;
   min-width:fit-content;
   padding:1.5vh;
   margin-left:1vw;
   margin-right:1vw;
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
const ContainerBotoes = styled.div`
  height:100%;
  display:flex;
  justify-content:space-between;
  align-items: center;

`

const ImgRaposa = styled.img`
max-height:70%;
`

const Eddit = styled.p`
font-family: 'Special Elite', cursive;
align-self: flex-end;
margin-bottom: 1vh;
font-size: 1.5em;
color: #ec6e00;
`

const Labe = styled.p`
font-family: 'Special Elite', cursive;
align-self: flex-end;
margin-bottom: 1vh;
font-size: 1.5em;
`

const Header = (props) => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Tooltip title="abstract PNG Designed By hublot90 from Pngtree.com">
                    <ImgRaposa src="https://png.pngtree.com/element_our/png_detail/20180926/elegant-flame-unique-animal-fox-logo-vector-png_113190.jpg" />
                </Tooltip>
                <Labe>Labe</Labe><Eddit>ddit</Eddit>
            </LogoContainer>
            <ContainerBotoes>
                <Botao onClick={props.onClickButton1}>{props.ButtonLabel}</Botao>
            </ContainerBotoes>
        </HeaderContainer>
    );
}
export default Header;