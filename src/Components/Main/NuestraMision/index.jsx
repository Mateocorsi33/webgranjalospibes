import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import mono from "../../../assest/mono.png";
import humedal from "../../../assest/humedal.png";
import charla from "../../../assest/charla.png";
import facebook from "../../../assest/facebook.png";
import instagram from "../../../assest/instagram.png";
import whatsapp from "../../../assest/whatsapp.png";
import youtube from "../../../assest/youtube.png";

const BoxMision = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
    width: 100%;
    height: fit-content;
    background-color: #D6D582;
    box-shadow: 4px 4px 8px 5px rgba(0, 0, 0, 0.1);

    @media (max-width: 800px) {
        box-shadow: none;
        padding: 3rem 0;
        gap:.5rem;
    }
`

const DivText = styled.div`
    text-align: center;
    margin-top: 4rem;

    @media (max-width: 800px) {
        margin-top: 2rem;
    }
`

const DivText2 = styled.div`
    text-align: center;
    margin: 0.5rem 0 5rem 0;

    @media (max-width: 800px) {
        margin: 0 0 4rem 0;
    }
`

const Titulo = styled.h1`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    color: #464646;
    font-size: 2.2rem;
    font-weight: 300;
    font-family: 'Montserrat', sans-serif;
    

    @media (max-width: 800px) {
        text-align: center;
        width: auto;
        font-size: 1.2rem;
        padding: 0 .5rem;
        font-weight: 400;
    }
`

const Parrafo = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;  
    margin: 2rem 0 2rem 0;
    width: 59rem;
    color: #FFF;
    text-align: center;
    font-size: 1.1rem;
    font-family: 'Montserrat', sans-serif;

    @media (max-width: 800px) {
        width: auto;
        margin: 1.5rem 0 .5rem 0;
        padding: 1rem 2rem;
        font-size: .9rem;
    }
`

const STRONG = styled.h1`
    font-weight: 600;
    font-size: 2.2rem;
    margin: 0;

    @media (max-width: 800px) {
        font-size: 1.2rem;
    }
`

const BoxCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 3rem;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 23rem;
    height: 48rem;
    margin: 1rem 0 0 0;

    @media (max-width: 800px) {
        margin:0;
        width: auto;
        height: auto;
        margin: 0 8%;
    }
`
const Eclipse1 = styled.div`
    position: absolute;
    background-image: url(${mono});
    background-repeat: no-repeat;
    background-size: 100%;
    width: 14rem;
    height: 14rem;
    border-radius: 100%;
    border: none;
`

const Eclipse2 = styled.div`
    position: absolute;
    background-image: url(${charla});
    background-repeat: no-repeat;
    background-size: 100%;
    width: 14rem;
    height: 14rem;
    border-radius: 100%;
    border: none;
`

const Eclipse3 = styled.div`
    position: absolute;
    background-image: url(${humedal});
    background-repeat: no-repeat;
    background-size: 100%;
    width: 14rem;
    height: 14rem;
    border-radius: 100%;
    border: none;
`

const Cuadro = styled.div`
    width: 20rem;
    height: 36rem;
    margin-top: 8rem;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    @media (max-width: 800px) {
        width: auto;
        height: auto;
        padding: 0.5rem;
        align-items: center;
        display: flex;
        flex-direction: column;
    }
`

const TCuadro = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #464646;
    text-align: center;
    font-size: 1.5rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    margin-top: 6rem;
    margin-bottom: 1.5rem;

    @media (max-width: 800px) {
        font-size: 1.5rem;
    }
`

const PCuadro = styled.p`
    color: #464646;
    text-align: center;
    font-size: .9rem;
    font-family: 'Montserrat', sans-serif;
    margin: 0 2rem;

    @media (max-width: 800px) {
        font-size: .9rem;
        margin-bottom: 2rem;
    }
`

const Boton = styled.button`
    margin: 2.5rem 2rem;
    background-color: #F48020;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    width: 17rem;
    height: 2.7rem;
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 2px;
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
        width: 100%;
        margin: 0 10% .5rem 10%;
    }
`

const Iconos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 6rem 2rem 0 2rem;

    @media (max-width: 800px) {
        margin: 0 1rem 2rem 1rem;
        gap: 1rem;
    }
`

const ImgIconos = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    cursor: pointer;
    &:hover {
        transition: .4s;
        opacity: 70%;
        transform: scale(1.1);
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


const NuestraMision = (props) => {

    const handleClick = () => {
        const element = document.getElementById('encabezado');
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <BoxMision>
            <DivText data-aos="fade-up" data-aos-duration="2000">
                <Titulo>ÚNETE A <STRONG>NUESTRA MISIÓN</STRONG></Titulo>
                <Parrafo>EN GRANJA LOS PIBES, CREEMOS EN EL PODER DE LA COMUNIDAD PARA GENERAR UN IMPACTO POSITIVO EN LA VIDA DE LOS NIÑOS Y EN LA CONSERVACIÓN DE LA FAUNA SILVESTRE. TE INVITAMOS A UNIRTE A NUESTRA MISIÓN Y SER PARTE DEL CAMBIO. TIENES DIFERENTES FORMAS DE APOYARNOS:</Parrafo>
            </DivText>
            <BoxCard>
                <Card data-aos="zoom-in" data-aos-duration="1000">
                    <Eclipse1/>
                    <Cuadro>
                        <TCuadro>CAMPAÑA DE APADRINAMIENTO</TCuadro>
                        <PCuadro>Tu apoyo económico puede marcar la diferencia en la vida de un niño o en la rehabilitación de una especie en peligro. Al convertirte en un padrino, estarás contribuyendo directamente a brindar educación, atención y oportunidades para los niños y al cuidado y rescate de los animales silvestres. Cada donación cuenta y nos acerca un paso más hacia un futuro mejor. ¡Únete como padrino hoy mismo!</PCuadro>
                        <StyledLink to="/donar" onClick={handleClick} style={{}}><Boton>APADRINARSE</Boton></StyledLink>
                    </Cuadro>
                </Card>
                <Card data-aos="zoom-in" data-aos-duration="1000">
                    <Eclipse2/>
                    <Cuadro>
                        <TCuadro>CORRE LA VOZ</TCuadro>
                        <PCuadro>Comparte nuestra misión en tus redes sociales y en tu comunidad. Cuantas más personas conozcan nuestra labor, más impacto podremos generar. Síguenos en nuestras redes sociales, comparte nuestras publicaciones y etiqueta a tus amigos y familiares. Juntos podemos crear conciencia y llegar a más personas dispuestas a hacer la diferencia.</PCuadro>
                        <Iconos>
                            <a href='https://www.facebook.com/GranjaLosPibes/'><ImgIconos src={facebook}/></a>
                            <a href='https://instagram.com/granja_los_pibes/'><ImgIconos src={instagram}/></a>
                            <a href='https://www.youtube.com/@granjalospibes/'><ImgIconos src={youtube}/></a>
                            <a href="https://wa.me/message/MGKRGV2LBP5CK1"><ImgIconos src={whatsapp}/></a>
                        </Iconos>
                    </Cuadro>
                </Card>
                <Card data-aos="zoom-in" data-aos-duration="1000">
                    <Eclipse3/>
                    <Cuadro>
                        <TCuadro>CUIDANDO Y CONSERVANDO</TCuadro>
                        <PCuadro>El cuidado del medio ambiente es responsabilidad de todos. Te invitamos a tomar conciencia y seguir buenas prácticas en tu día a día. Recuerda la importancia de respetar y proteger la naturaleza que nos rodea. No seas parte del tráfico ilegal de animales, reduce tu huella ecológica, apoya la conservación de los espacios naturales y promueve el respeto hacia todas las formas de vida. Cada pequeña acción suma en la preservación de nuestro entorno.</PCuadro>
                    </Cuadro>
                </Card>
            </BoxCard>
            <DivText2>
                <Parrafo data-aos="fade-up" data-aos-duration="2000">ÚNETE A NUESTRA MISIÓN Y SÉ PARTE DEL ESFUERZO POR PROTEGER Y CONSERVAR LA FLORA Y FAUNA SILVESTRE. CADA APORTE, YA SEA ECONÓMICO, DIFUSIÓN O PARTICIPACIÓN ACTIVA, NOS ACERCA A UN FUTURO EN EL QUE LAS GENERACIONES VENIDERAS PUEDAN DISFRUTAR DE LA RIQUEZA NATURAL QUE NOS RODEA.</Parrafo>
                <Titulo>¡JUNTOS PODEMOS MARCAR LA DIFERENCIA!</Titulo>
            </DivText2>
        </BoxMision>
    )
}

export default NuestraMision