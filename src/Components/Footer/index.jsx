import React from "react"; 
import styled from "styled-components";
import facebook from "../../assest/w-facebook.png";
import instagram from "../../assest/w-instagram.png";
import whatsapp from "../../assest/w-whatsapp.png";
import email from "../../assest/w-email.png";
import youtube from "../../assest/w-youtube.png";
import { Link } from "react-router-dom";

const DivFooter = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 4.5rem 0 2rem 0;
    background-color: #586E66;

    @media (max-width: 800px) {
        padding-top: 3rem;
    }
`

const DivTexto = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 2rem 6rem;
    gap: 8rem;

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
    }
`

const DivNav = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 800px) {
        text-align:center;
    }
`

const DivGra = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 800px) {
        text-align:center;
    }
`

const DivUbi = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 800px) {
        text-align:center;
    }
`

const DivCopyIconos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 6rem;
    border-top: 1px solid #ffffff;

    @media (max-width: 800px) {
        flex-direction: column;
        text-align:center;
        gap:1rem;
    }
`

const Iconos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;

    @media (max-width: 800px) {
        margin-bottom: 1rem;
    }
`

const Redes = styled.img`
    width: 2rem;
    cursor: pointer;
    &:hover{
        transition: .3s;
        opacity:.7;
    }
`

const Titulos = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: #D6D582;
    letter-spacing: 1.5px;
    padding: 0.5rem 0;
    border-bottom: 1px solid #ffffff;
`

const Texto = styled.p`
    width: 17rem;
    margin: 0.3rem 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8rem;
    font-weight: 300;
    letter-spacing: 0.66px;
    color: #ffffff;
`



const Copy = styled.div`
    display: flex;
    margin: 0.8rem 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8rem;
    font-weight: 300;
    letter-spacing: 0.66px;
    color: #ffffff;
`

const UbiLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    &:hover{
        text-decoration:none;
        transition: .3s;
        opacity:.7;     
    }
`

const StyledLink = styled(Link)`
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8rem;
    font-weight: 300;
    color: #ffffff;
    margin: 0.3rem 0;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        text-decoration: none;
        color: #D6D582;
        transition: .3s;
        opacity:.7;
    }

    @media (max-width: 800px) {
    
    }
`;

const Footer = () => {
    return(
        <DivFooter>
            <DivTexto>
                <DivNav>
                    <Titulos>NAVEGACIÓN</Titulos>
                    <StyledLink to="/" style={{}}>Inicio</StyledLink>
                    <StyledLink to="/quienes-somos" style={{}}>Quiénes somos</StyledLink>
                    <StyledLink to="/contacto" style={{}}>Contacto</StyledLink>
                    <StyledLink to="/padrinos" style={{}}>Padrinos</StyledLink>
                    <StyledLink to="/donar" style={{}}>Donar</StyledLink>
                </DivNav>
                <DivGra>
                    <Titulos>GRANJA LOS PIBES</Titulos>
                    <Texto>¡No dudes en contactarnos! Puedes hacerlo a través de nuestras redes sociales, números telefónicos o visitando nuestros lugares.</Texto>
                    <Texto>¡Juntos podemos marcar la diferencia!</Texto>
                </DivGra>
                <DivUbi>
                    <Titulos>UBICACIÓN</Titulos>
                    <UbiLink href="https://goo.gl/maps/NsSM96JGPmbQ9DVY6"><Texto>Granja Los Pibes: Pje el Centinela - Tandil.</Texto></UbiLink>
                    <UbiLink href="https://goo.gl/maps/gnQSLhbHuYQH8ZuA8"><Texto>Humedal: Km 139 de la ruta Nacional 226.</Texto></UbiLink>
                </DivUbi>
            </DivTexto>
            <DivCopyIconos>
                <Copy>
                    © Copyright - Todos los derechos reservados | Desarrollado por Granja Los Pibes - 2023.
                </Copy>
                <Iconos>
                    <UbiLink href='https://www.facebook.com/GranjaLosPibes/'><Redes src={facebook}/></UbiLink>
                    <UbiLink href='https://instagram.com/granja_los_pibes/'><Redes src={instagram}/></UbiLink>
                    <UbiLink href=''><Redes src={youtube}/></UbiLink>
                    <UbiLink href=''><Redes src={email}/></UbiLink>
                    <UbiLink href="tel:+542494545992"><Redes src={whatsapp}/></UbiLink>
                </Iconos>
            </DivCopyIconos>
        </DivFooter>
    )
}

export default Footer