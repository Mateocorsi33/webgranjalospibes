import React from "react";
import styled from "styled-components";
import fondo from "../../assest/fondopa.png";
import { Link } from "react-router-dom";
import CarouselImg from "./fotos";
import iconoUno from "../../assest/buho.png";
import iconoDos from "../../assest/niños.png";
import iconoTres from "../../assest/ambiental.png";
import iconoCuatro from "../../assest/tilde.png";
import iconoCinco from "../../assest/diamante.png";


const BackG = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 22rem;
    background: url(${fondo});

    @media (max-width: 800px) {
        display: flex;
        height: auto;
        background-size: 100%;
    }
`

const Titulo = styled.h1`
    color: #FFF;
    text-shadow: 0px 4px 100px 0px rgba(0, 0, 0, 0.25);
    font-size: 5.2rem;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.02em;

    @media (max-width: 800px) {
        display: flex;
        font-size: 2rem;
        text-align: center;
        align-items: center;
        font-weight: 500;
        padding: 1rem;
    }
`

const DivPadrinos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem 10rem;
    gap: 2rem;

    @media (max-width: 800px) {
        margin: 1.5rem 1.5rem 8rem 1.5rem;
    }
`


const DivParrafos = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    @media (max-width: 800px) {
       display: flex;
       flex-direction: column;
       align-items: center;
       gap:3rem;
    }
`

const Divisores = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 800px) {
       display: flex;
       flex-direction: column;
       align-items: center;
       margin: 1rem 0;
       gap:2rem;
    }
`

const DivisoresCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 800px) {
       display: flex;
       flex-direction: column;
       align-items: center;
       border-radius: 10px;
       box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
       margin: 1rem 1.5rem;
       padding: 2rem;
       gap:1rem;
    }
`


const Encabe = styled.h1`
    display: flex;
    text-align: center;
    width: 100%;
    height: auto;
    flex-direction: column;
    color: #D6D582;
    text-shadow: 0px 4px 100px 0px rgba(0, 0, 0, 0.25);
    font-size: 2rem;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 3rem 0 0 0;
    padding-top: 2rem;
    border-top: 2px solid #D6D582;

    @media (max-width: 800px) {
        font-size: 1.5rem;
        margin: 1rem 0 0 0;
    }
`

const Parrafo = styled.p`
    display: flex;
    text-align: center;
    width: 100%;
    height: auto;
    flex-direction: column;
    color: #557153;
    font-size: .9rem;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    margin: 0;
    padding: 1.5rem;

    @media (max-width: 800px) {
        text-align: center;
        font-size: .7rem;
        padding: 0;
    }
`

const Boton = styled.button`
    margin: 0 2rem 8rem 2rem;
    background-color: #F48020;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    width: 19rem;
    height: 3rem;
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 2.56px;
    color: #ffffff;
    cursor: pointer;
    &:hover {
        transition: .3s;
        opacity: 70%;
        transform: scale(1.1);
    }

    @media (max-width: 800px) {
        display: flex;
        align-items: center;
        justify-content:center;
        width: 75%;
        margin: 0;
    }
`

const StyledLink = styled(Link)`
    display: flex;
    text-decoration: none;
    align-items: center;
    justify-content:center;
    width: 100%;
    &:hover {
    text-decoration: none;
  }
  @media (max-width: 800px) {
        margin:1rem;
    }
`;

const Strong = styled.strong`
    display: flex;
    text-align: center;
    width: 100%;
    height: auto;
    flex-direction: column;
    color: #557153;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    padding-bottom: 1rem;

    @media (max-width: 800px) {
        text-align: center;
        margin-bottom:0.5rem;
        font-size: .8rem;
        padding-bottom: 0;
    }
`

const StrongCard = styled.strong`
    display: flex;
    text-align: center;
    width: 100%;
    height: auto;
    flex-direction: column;
    color: #557153;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    padding-bottom: 1rem;

    @media (max-width: 800px) {
        text-align: center;
        margin-top: 0.5rem;
        font-size: .9rem;
        padding-bottom: 0;
    }
`

const Img = styled.img`
    display: flex;
     align-items: center;
     justify-content: center;
     width: 6.5rem;
     height: 6.5rem;
   
    @media (max-width: 800px) {
     display: flex;
     align-items: center;
     justify-content: center;
     width: 6.5rem;
     height: 6.5rem;
    }
`





const Padrinos = () => {

    const handleClick = () => {
        const element = document.getElementById('encabezado');
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <BackG>
                <Titulo>Padrinos</Titulo>
            </BackG>
            <DivPadrinos>
                <Encabe data-aos="zoom-in">¡SÉ UN PADRINO DE LA VIDA SALVAJE Y DE LA TRANSFORMACIÓN SOCIAL!</Encabe>
                <Parrafo data-aos="zoom-in">EN GRANJA LOS PIBES, TRABAJAMOS INCANSABLEMENTE PARA BRINDAR APOYO Y PROTECCIÓN A NIÑOS Y FAMILIAS EN SITUACIÓN DE VULNERABILIDAD. NUESTRO COMPROMISO CON LA PROMOCIÓN DE LOS DERECHOS DEL NIÑO Y LA CONSERVACIÓN DE LA FAUNA SILVESTRE NOS IMPULSA A SEGUIR ADELANTE, PERO NECESITAMOS DE TU AYUDA PARA LOGRARLO.</Parrafo>
                <CarouselImg/>
                <Parrafo data-aos="zoom-in">HOY TE INVITAMOS A SER PARTE DE NUESTRA CAMPAÑA DE PADRINOS, UNA OPORTUNIDAD ÚNICA PARA MARCAR LA DIFERENCIA EN LA VIDA DE ESTOS NIÑOS Y CONTRIBUIR A LA PROTECCIÓN DE NUESTRA INVALUABLE BIODIVERSIDAD.</Parrafo>
                <Encabe data-aos="zoom-in">¿QUÉ IMPLICA SER UN PADRINO?</Encabe>
                <Parrafo data-aos="zoom-in">COMO PADRINO, TU DONACIÓN ECONÓMICA SEA POR ÚNICA VEZ O DE MANERA MENSUAL SE CONVERTIRÁ EN UN PILAR FUNDAMENTAL PARA EL SOSTENIMIENTO DE NUESTRO CENTRO DE RESCATE DE ANIMALES SILVESTRES Y LA ASOCIACIÓN CIVIL CASA DEL NIÑO EN LA CALLE . CON TU GENEROSIDAD, PODREMOS:</Parrafo>
                <DivParrafos>
                    <Divisores data-aos="zoom-in">
                        <Parrafo><Strong>BRINDAR CUIDADO Y ATENCIÓN A LAS ESPECIES RESCATADAS:</Strong></Parrafo>
                        <Img src={iconoUno}/>
                        <Parrafo>TU DONACIÓN NOS PERMITIRÁ ALIMENTAR, PROPORCIONAR ATENCIÓN VETERINARIA Y GARANTIZAR UN AMBIENTE ADECUADO PARA LOS ANIMALES RESCATADOS.</Parrafo>
                    </Divisores> 
                    <Divisores data-aos="zoom-in">  
                        <Parrafo><Strong>MEJORAR LA CALIDAD DE VIDA DE LOS NIÑOS:</Strong></Parrafo>
                        <Img src={iconoDos}/>
                        <Parrafo>AYUDARÁ A CUBRIR LAS NECESIDADES BÁSICAS DE LOS NIÑOS QUE ATENDEMOS, INCLUYENDO ALIMENTACIÓN, EDUCACIÓN Y PROGRAMAS DE DESARROLLO INTEGRAL.</Parrafo>
                    </Divisores> 
                    <Divisores data-aos="zoom-in">   
                        <Parrafo><Strong>IMPULSAR PROYECTOS DE EDUCACIÓN AMBIENTAL:</Strong></Parrafo>
                        <Img src={iconoTres}/>
                        <Parrafo>CON TU APOYO, PODREMOS FORTALECER NUESTROS PROGRAMAS EDUCATIVOS Y LLEVAR CHARLAS Y TALLERES A LAS ESCUELAS DE NUESTRA COMUNIDAD.</Parrafo>
                    </Divisores>
                </DivParrafos>
                <Encabe data-aos="zoom-in">¿CÓMO PUEDES SER UN PADRINO?</Encabe>
                <Parrafo data-aos="zoom-in"><Strong>SIMPLEMENTE ENTRA EN APADRINARSE, DONDE PODRÁS ELEGIR LA MODALIDAD DE DONACIÓN QUE MEJOR SE ADAPTE A TUS POSIBILIDADES.</Strong></Parrafo>
                <DivParrafos>
                    <DivisoresCard data-aos="zoom-in">
                        <Img src={iconoCuatro}/>
                        <Parrafo><StrongCard>DONACIÓN POR ÚNICA VEZ:</StrongCard></Parrafo>
                        <Parrafo> SI DESEAS REALIZAR UNA DONACIÓN ÚNICA, CUALQUIER APORTE ECONÓMICO SERÁ DE GRAN AYUDA PARA SEGUIR ADELANTE CON NUESTRA MISIÓN. CADA CONTRIBUCIÓN CUENTA Y CADA GESTO DE APOYO ES VALIOSO PARA NOSOTROS.</Parrafo>
                    </DivisoresCard>
                    <DivisoresCard data-aos="zoom-in">
                        <Img src={iconoCinco}/>
                        <Parrafo><StrongCard>DONACIÓN MENSUAL:</StrongCard></Parrafo>
                        <Parrafo>ESTABLECE UNA DONACIÓN MENSUAL QUE SE AJUSTE A TU PRESUPUESTO. CADA MES, TU CONTRIBUCIÓN RESPALDARÁ NUESTROS PROYECTOS Y BRINDARÁ ESPERANZA A LOS NIÑOS Y A LOS ANIMALES EN NUESTRO CENTRO DE RESCATE.</Parrafo>
                    </DivisoresCard>
                </DivParrafos>
                <Parrafo data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"><Strong>CONVIÉRTETE EN UN PADRINO Y SÉ PARTE DEL CAMBIO QUE QUEREMOS VER EN EL MUNDO.</Strong></Parrafo>
                <StyledLink to="/donar" onClick={handleClick} style={{}}><Boton data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">APADRINARSE</Boton></StyledLink>
            </DivPadrinos>
        </>
    )
}

export default Padrinos