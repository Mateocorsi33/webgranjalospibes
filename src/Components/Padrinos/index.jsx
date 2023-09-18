import React from "react";
import styled from "styled-components";
import fondo from "../../assest/padri.png";
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
       gap:1rem;
    }
`

const Divisores = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    gap: 2rem;

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
    justify-content: space-around;
    width: 80%;
    padding: 2rem 0;

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
    width: 80%;
    height: auto;
    flex-direction: column;
    color: #464646;
    font-size: .9rem;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    margin: 0;
    padding-top: 1rem;

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
                        <Parrafo>Tu donación nos permitirá alimentar, proporcionar atención veterinaria y garantizar un ambiente adecuado para los animales rescatados.</Parrafo>
                    </Divisores> 
                    <Divisores data-aos="zoom-in">  
                        <Parrafo><Strong>MEJORAR LA CALIDAD DE VIDA DE LOS NIÑOS:</Strong></Parrafo>
                        <Img src={iconoDos}/>
                        <Parrafo>Ayudará a cubrir las necesidades básicas de los niños que atendemos, incluyendo alimentación, educación y programas de desarrollo integral.</Parrafo>
                    </Divisores> 
                    <Divisores data-aos="zoom-in">   
                        <Parrafo><Strong>IMPULSAR PROYECTOS DE EDUCACIÓN AMBIENTAL:</Strong></Parrafo>
                        <Img src={iconoTres}/>
                        <Parrafo>Con tu apoyo, podremos fortalecer nuestros programas educativos y llevar charlas y talleres a las escuelas de nuestra comunidad</Parrafo>
                    </Divisores>
                </DivParrafos>
                <Encabe data-aos="zoom-in">¿CÓMO PUEDES SER UN PADRINO?</Encabe>
                <Parrafo data-aos="zoom-in"><Strong>SIMPLEMENTE ENTRA EN APADRINARSE, DONDE PODRÁS ELEGIR LA MODALIDAD DE DONACIÓN QUE MEJOR SE ADAPTE A TUS POSIBILIDADES.</Strong></Parrafo>
                <DivParrafos>
                    <DivisoresCard data-aos="zoom-in">
                        <Img src={iconoCuatro}/>
                        <Parrafo><StrongCard>DONACIÓN POR ÚNICA VEZ:</StrongCard></Parrafo>
                        <Parrafo> Si deseas realizar una donación única, cualquier aporte económico será de gran ayuda para seguir adelante con nuestra misión. Cada contribución cuenta y cada gesto de apoyo es valioso para nosotros.</Parrafo>
                    </DivisoresCard>
                    <DivisoresCard data-aos="zoom-in">
                        <Img src={iconoCinco}/>
                        <Parrafo><StrongCard>DONACIÓN MENSUAL:</StrongCard></Parrafo>
                        <Parrafo>Establece una donación mensual que se ajuste a tu presupuesto. Cada mes, tu contribución respaldará nuestros proyectos y brindará esperanza a los niños y a los animales en nuestro centro de rescate.</Parrafo>
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