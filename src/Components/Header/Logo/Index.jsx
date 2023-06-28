import React, {useState} from "react";
import styled from "styled-components";
import imagenlogo from "../../../assest/logoglp.png";
import { Link } from "react-router-dom";
import menu from "../../../assest/menu.png";
import close from "../../../assest/close.png";


const BoxLogo = styled.div` 
    display: flex;
    align-items: center;
    width: 15%;
    height: 4.5rem;
    background-color: #586E66;
    @media (max-width: 800px) {
        display: flex;
        justify-content: space-evenly;
        gap: 60%;
        width: 100%;
    }
`
const BoxImgText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    margin: 1rem 0 1rem 15%;
    @media (max-width: 800px) {
        margin:0;
    }
`
const ImgLogo = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.6);

    @media (max-width: 800px) {
        margin-left: 1rem;
    }
`
const DivText = styled.div`
    font-family: 'Roboto', sans-serif;
    color: #ffffff;

    @media (max-width: 800px) {
        display: none;
    }
`

const TextLogo1 = styled.h2`
    font-weight: 600;
    margin:0;
    font-size: 0.8rem;
`
const TextLogo2 = styled.h1`
    font-weight: 600;
    margin:0;
    font-size: 1rem;
`

const BoxBarraNav = styled.div`
    display: none;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    width: 85%;

    @media (max-width: 800px) {
        display: ${props => props.showMenu ? 'flex' : 'none'};
        flex-direction: column;
        text-align: flex-start;
        font-size: 0.8rem;
        width: 100%;
        margin:0;

        &.show {
            transition: opacity 0.2s ease-in-out;
        }
    }
`

const BotonMenu = styled.button`
    display: none;
     
    @media (max-width: 800px) {
        display: flex;
        justify-content:center;
        align-items: center;
        background-color: #586E66;
        border-radius: 10px;
        width: 3rem;
        height: 2rem;
        margin: 1rem;
        border: none;
        font-family: Manrope;
        font-size: 0.8rem;
        font-weight: 400;
        letter-spacing: 0.05em;
        color: #464646;
        cursor: pointer;

        &:hover {
            transition: .3s;
            opacity: 80%;
        }
    }
`

const ImgMenu = styled.img`
    display: flex;
    align-items: center;
    width: 3rem;
    height: 3rem;

    &:hover {
            transition: .3s;
            opacity: 80%;
        }
`

const ImgClose = styled.img`
    display: flex;
    align-items: center;
    width: 2rem;
    height: 2rem;

    &:hover {
            transition: .3s;
            opacity: 80%;
        }
`

const DivBarra1 = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-left: 4%;

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        width: auto;
        gap:0.5rem;
        margin: 0.5rem auto;
    }
`

const Marcador = styled.div`
    &:hover{
        border-bottom: 2px solid #D6D582;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    font-family: Manrope;
    font-size: .8rem;
    font-weight: bold;
    letter-spacing: 0.05em;
    color: #464646;
  &:hover {
    text-decoration: none;
  }

  @media (max-width: 800px) {
        display: flex;
        justify-content:center; 
        align-items:center; 
        font-size:.8rem; 
        width:auto; 
        height:auto; 
        margin-top: 0.5rem;
    }
`;



const Logo = () => {
    const [showMenu, setShowMenu] = useState(false);
    return(
        <>
        <BoxLogo>
            <BoxImgText>
                <ImgLogo src={imagenlogo} alt="Logo"/>
                <DivText>
                    <TextLogo1>GRANJA</TextLogo1>
                    <TextLogo2>LOS PIBES</TextLogo2>
                </DivText>
            </BoxImgText>
                <BotonMenu onClick={() => setShowMenu(!showMenu)}>
                    {showMenu ? <ImgClose src={close} alt="close"/> : <ImgMenu src={menu}/>}
                </BotonMenu>
        </BoxLogo>
        <BoxBarraNav showMenu={showMenu}>
                    <DivBarra1>
                        <Marcador><StyledLink to="/" style={{}}>INICIO</StyledLink></Marcador>
                        <Marcador><StyledLink to="/quienes-somos" style={{}}>QUIÉNES SOMOS</StyledLink></Marcador>
                        <Marcador><StyledLink to="/contacto" style={{}}>CONTACTO</StyledLink></Marcador>
                        <Marcador><StyledLink to="/padrinos" style={{}}>PADRINOS</StyledLink></Marcador>
                        <Marcador><StyledLink to="/donar" style={{}}>DONAR</StyledLink></Marcador>
                    </DivBarra1>
        </BoxBarraNav>
        </>
    )
}

export default Logo
