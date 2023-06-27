import React from "react";
import styled from "styled-components";
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
    width: 100%;
    height: fit-content;
    background-color: #D6D582;
    box-shadow: 4px 4px 8px 5px rgba(0, 0, 0, 0.25);

    @media (max-width: 800px) {
        box-shadow: none;
    }
`

const DivText = styled.div`
    text-align: center;
    margin-top: 4rem;
`

const DivText2 = styled.div`
    text-align: center;
    margin: 0.5rem 0 5rem 0;
`

const Titulo = styled.h1`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    color: #464646;
    font-size: 40px;
    font-weight: 300;
    font-family: Manrope;
    margin: 0;
    @media (max-width: 800px) {
        text-align: center;
        width: auto;
        font-size: 1.5rem;
        padding: 0 2rem;
    }
`

const Parrafo = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;  
    width: 59rem;
    color: #FFF;
    text-align: center;
    font-size: 20px;
    font-family: Manrope;

    @media (max-width: 800px) {
        width: auto;
        padding: 0 2rem;
        font-size:1rem;
    }
`

const STRONG = styled.h1`
    font-weight: 600;
    font-size: 40px;
    margin: 0;

    @media (max-width: 800px) {
        font-size: 1.5rem;
    }
`

const BoxCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 2rem;

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
    margin: 2rem 0;

    @media (max-width: 800px) {
        margin:0;
        width: 22rem;
        height: auto;
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
    width: 23rem;
    height: 39rem;
    margin-top: 8rem;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    @media (max-width: 800px) {
        width: auto;
        height: auto;
        padding:0.5rem;
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
    font-size: 30px;
    font-family: Manrope;
    font-weight: 500;
    margin-top: 6rem;

    @media (max-width: 800px) {
        font-size: 26px;
    }
`

const PCuadro = styled.p`
    color: #464646;
    text-align: center;
    font-size: 18px;
    font-family: Manrope;
    margin: 0 2rem;

    @media (max-width: 800px) {
        font-size: 16px;
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
        width: 90%;
    }
`

const Iconos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 6rem 2rem 0 2rem;

    @media (max-width: 800px) {
        margin: 3rem 0;
        gap: 1rem;
    }
`

const ImgIconos = styled.img`
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 100%;
    cursor: pointer;
    &:hover {
        transition: .4s;
        opacity: 70%;
    }
`




const NuestraMision = (props) => {
    return (
        <BoxMision>
            <DivText>
                <Titulo>ÚNETE A <STRONG>NUESTRA MISIÓN</STRONG></Titulo>
                <Parrafo>En la Asociación Civil Casa del Niño en la Calle, creemos en el poder de la comunidad para generar un impacto positivo en la vida de los niños y en la conservación de la fauna silvestre. Te invitamos a unirte a nuestra misión y ser parte del cambio. Tienes diferentes formas de apoyarnos:</Parrafo>
            </DivText>
            <BoxCard>
                <Card>
                    <Eclipse1/>
                    <Cuadro>
                        <TCuadro>CAMPAÑA DE APADRINAMIENTO</TCuadro>
                        <PCuadro>Tu apoyo económico puede marcar la diferencia en la vida de un niño o en la rehabilitación de una especie en peligro. Al convertirte en un padrino, estarás contribuyendo directamente a brindar educación, atención y oportunidades para los niños y al cuidado y rescate de los animales silvestres. Cada donación cuenta y nos acerca un paso más hacia un futuro mejor. ¡Únete como padrino hoy mismo!</PCuadro>
                        <Boton>SÉ PADRINO</Boton>
                    </Cuadro>
                </Card>
                <Card>
                    <Eclipse2/>
                    <Cuadro>
                        <TCuadro>CORRE LA VOZ</TCuadro>
                        <PCuadro>Comparte nuestra misión en tus redes sociales y en tu comunidad. Cuantas más personas conozcan nuestra labor, más impacto podremos generar. Síguenos en nuestras redes sociales, comparte nuestras publicaciones y etiqueta a tus amigos y familiares. Juntos podemos crear conciencia y llegar a más personas dispuestas a hacer la diferencia.</PCuadro>
                        <Iconos>
                            <ImgIconos src={facebook}/>
                            <ImgIconos src={instagram}/>
                            <ImgIconos src={youtube}/>
                            <ImgIconos src={whatsapp}/>
                        </Iconos>
                    </Cuadro>
                </Card>
                <Card>
                    <Eclipse3/>
                    <Cuadro>
                        <TCuadro>CUIDANDO Y CONSERVANDO</TCuadro>
                        <PCuadro>El cuidado del medio ambiente es responsabilidad de todos. Te invitamos a tomar conciencia y seguir buenas prácticas en tu día a día. Recuerda la importancia de respetar y proteger la naturaleza que nos rodea. No seas parte del tráfico ilegal de animales, reduce tu huella ecológica, apoya la conservación de los espacios naturales y promueve el respeto hacia todas las formas de vida. Cada pequeña acción suma en la preservación de nuestro entorno.</PCuadro>
                    </Cuadro>
                </Card>
            </BoxCard>
            <DivText2>
                <Parrafo>Únete a nuestra misión y sé parte del esfuerzo por proteger y conservar la flora y fauna silvestre. Cada aporte, ya sea económico, difusión o participación activa, nos acerca a un futuro en el que las generaciones venideras puedan disfrutar de la riqueza natural que nos rodea.</Parrafo>
                <Titulo>¡JUNTOS PODEMOS MARCAR LA DIFERENCIA!</Titulo>
            </DivText2>
        </BoxMision>
    )
}

export default NuestraMision