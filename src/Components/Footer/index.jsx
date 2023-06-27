import React from "react"; 
import styled from "styled-components";
import facebook from "../../assest/w-facebook.png";
import instagram from "../../assest/w-instagram.png";
import whatsapp from "../../assest/w-whatsapp.png";
import email from "../../assest/w-email.png";
import youtube from "../../assest/w-youtube.png";

const DivFooter = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #586E66;
`

const DivTexto = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 1rem 6rem;
    gap: 8rem;
`

const DivNav = styled.div`
    display: flex;
    flex-direction: column;
`

const DivGra = styled.div`
    display: flex;
    flex-direction: column;
`

const DivUbi = styled.div`
    display: flex;
    flex-direction: column;
`

const DivCopyIconos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 6rem;
    border-top: 1px solid #ffffff;
`

const Iconos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
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
    font-family: Manrope;
    font-size: 1rem;
    font-weight: 500;
    color: #D6D582;
    letter-spacing: 1.5px;
    padding: 0.5rem 0;
    border-bottom: 1px solid #ffffff;
`

const LinkNav = styled.a`
    font-family: Manrope;
    font-size: 0.8rem;
    font-weight: 300;
    color: #ffffff;
    text-decoration: none;
    margin: 0.3rem 0;
    cursor: pointer;
    &:hover{
        transition: .3s;
        opacity:.7;
    }
`

const Texto = styled.p`
    width: 17rem;
    margin: 0.3rem 0;
    font-family: Manrope;
    font-size: 0.8rem;
    font-weight: 300;
    letter-spacing: 0.66px;
    color: #ffffff;
`



const Copy = styled.div`
    display: flex;
    margin: 0.8rem 0;
    font-family: Manrope;
    font-size: 0.8rem;
    font-weight: 300;
    letter-spacing: 0.66px;
    color: #ffffff;
`

const UbiLink = styled.a`
    cursor: pointer;
    &:hover{
        transition: .3s;
        opacity:.7;
    }
`

const Footer = () => {
    return(
        <DivFooter>
            <DivTexto>
                <DivNav>
                    <Titulos>NAVEGACIÓN</Titulos>
                    <LinkNav>Inicio</LinkNav>
                    <LinkNav>Quiénes somos</LinkNav>
                    <LinkNav>Contacto</LinkNav>
                    <LinkNav>Padrinos</LinkNav>
                    <LinkNav>Donar</LinkNav>
                </DivNav>
                <DivGra>
                    <Titulos>GRANJA LOS PIBES</Titulos>
                    <Texto>¡No dudes en contactarnos! Puedes hacerlo a través de nuestras redes sociales, números telefónicos o visitando nuestros lugares.</Texto>
                    <Texto>¡Juntos podemos marcar la diferencia!</Texto>
                </DivGra>
                <DivUbi>
                    <Titulos>UBICACIÓN</Titulos>
                    <Texto><UbiLink>Granja Los Pibes: Pje el Centinela - Tandil.</UbiLink></Texto>
                    <Texto><UbiLink>Humedal: Km 139 de la ruta Nacional 226.</UbiLink></Texto>
                </DivUbi>
            </DivTexto>
            <DivCopyIconos>
                <Copy>
                    © Copyright - Todos los derechos reservados | Desarrollado por Granja Los Pibes - 2023.
                </Copy>
                <Iconos>
                    <Redes src={facebook}/>
                    <Redes src={instagram}/>
                    <Redes src={youtube}/>
                    <Redes src={email}/>
                    <Redes src={whatsapp}/>
                </Iconos>
            </DivCopyIconos>
        </DivFooter>
    )
}

export default Footer