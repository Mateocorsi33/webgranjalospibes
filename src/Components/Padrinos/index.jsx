import React from "react";
import styled from "styled-components";
import fondo from "../../assest/fondopa.png";
import { Link } from "react-router-dom";

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
    font-family: Manrope;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.02em;

    @media (max-width: 800px) {
        display: flex;
        font-size: 2rem;
        text-align: center;
        align-items: center;
        font-weight: 500;
    }
`

const DivPadrinos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem 10rem;
    gap: 2rem;

    @media (max-width: 800px) {
        margin: 1.5rem 1rem;
        gap: 1rem;
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
    font-size: 2.5rem;
    font-family: Manrope;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    padding-top: 2rem;
    border-top: 2px solid #D6D582;

    @media (max-width: 800px) {
        font-size: 2rem;
    }
`

const Parrafo = styled.p`
    display: flex;
    text-align: start;
    width: 100%;
    height: auto;
    flex-direction: column;
    color: #464646;
    font-size: 1.2rem;
    font-family: Manrope;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;

    @media (max-width: 800px) {
        font-size: 1rem;
    }
`

const Boton = styled.button`
    margin: 2.5rem 2rem;
    background-color: #F48020;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    width: 19rem;
    height: 3rem;
    font-size: 1rem;
    font-weight: 400;
    font-family: Manrope;
    letter-spacing: 2.56px;
    color: #ffffff;
    cursor: pointer;
    &:hover {
        transition: .3s;
        opacity: 70%;
    }

    @media (max-width: 800px) {
        display: flex;
        align-items: center;
        justify-content:center;
        width: 100%;
        margin: 1rem;
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




const Padrinos = () => {
    return (
        <>
            <BackG>
                <Titulo>Padrinos</Titulo>
            </BackG>
            <DivPadrinos>
                <Encabe>¡Sé un Padrino de la Vida Salvaje y de la Transformación Social!</Encabe>
                <Parrafo>En Granja Los Pibes, trabajamos incansablemente para brindar apoyo y protección a niños y familias en situación de vulnerabilidad. Nuestro compromiso con la promoción de los derechos del niño y la conservación de la fauna silvestre nos impulsa a seguir adelante, pero necesitamos de tu ayuda para lograrlo.</Parrafo>
                <Parrafo>Hoy te invitamos a ser parte de nuestra campaña de padrinos, una oportunidad única para marcar la diferencia en la vida de estos niños y contribuir a la protección de nuestra invaluable biodiversidad.</Parrafo>
                <Encabe>¿Qué implica ser un Padrino?</Encabe>
                <Parrafo>Como padrino, tu donación económica sea por única vez o de manera mensual se convertirá en un pilar fundamental para el sostenimiento de nuestro Centro de Rescate de Animales Silvestres y La Asociación Civil Casa del Niño en la Calle . Con tu generosidad, podremos:</Parrafo>
                <Parrafo>Brindar cuidado y atención a las especies rescatadas: Tu donación nos permitirá alimentar, proporcionar atención veterinaria y garantizar un ambiente adecuado para los animales rescatados.</Parrafo>
                <Parrafo>Mejorar la calidad de vida de los niños: Tu aporte nos ayudará a cubrir las necesidades básicas de los niños que atendemos, incluyendo alimentación, educación y programas de desarrollo integral. Cada pequeña contribución se convertirá en una gran oportunidad para su futuro.</Parrafo>
                <Parrafo>Impulsar proyectos de educación ambiental: Con tu apoyo, podremos fortalecer nuestros programas educativos y llevar charlas y talleres a las escuelas de nuestra comunidad. Así, fomentaremos la conciencia sobre la importancia de la conservación de la fauna y flora silvestres, y promoveremos una conexión profunda con la naturaleza.</Parrafo>
                <Encabe>¿Cómo puedes ser un Padrino?</Encabe>
                <Parrafo>Es muy sencillo unirse a nuestra campaña de padrinos. Simplemente completa nuestro formulario, donde podrás elegir la modalidad de donación que mejor se adapte a tus posibilidades.</Parrafo>
                <Parrafo>Donación por única vez: Si deseas realizar una donación única, cualquier aporte económico será de gran ayuda para seguir adelante con nuestra misión. Cada contribución cuenta y cada gesto de apoyo es valioso para nosotros.</Parrafo>
                <Parrafo>Donación mensual: Establece una donación mensual que se ajuste a tu presupuesto. Cada mes, tu contribución respaldará nuestros proyectos y brindará esperanza a los niños y a los animales en nuestro centro de rescate.</Parrafo>
                <Parrafo>Conviértete en un padrino y sé parte del cambio que queremos ver en el mundo. Tu donación no solo transformará la vida de los niños y la fauna silvestre que rescatamos, sino que también te permitirá formar parte de una comunidad comprometida con el bienestar de los más vulnerables.</Parrafo>
                <StyledLink to="/donar" id="#" style={{}}><Boton>APADRINARSE</Boton></StyledLink>
            </DivPadrinos>
        </>
    )
}

export default Padrinos