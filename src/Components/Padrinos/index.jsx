import React from "react";
import styled from "styled-components";
import fondo from "../../assest/fondopa.png";

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
    text-align: center;
    width: 100%;
    height: auto;
    flex-direction: column;
    color: #464646;
    font-size: 1.6rem;
    font-family: Manrope;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;

    @media (max-width: 800px) {
        font-size: 1rem;
    }
`

const Padrinos = () => {
    return (
        <>
            <BackG>
                <Titulo>Padrinos</Titulo>
            </BackG>
            <DivPadrinos>
                <Encabe>¡Sé un Padrino de la Vida Salvaje y de la Transformación Social!</Encabe>
                <Parrafo>En el Centro de Rescate Granja los Pibes, trabajamos incansablemente para proteger y cuidar de la flora y fauna autóctonas de nuestra región. Sin embargo, no podemos hacerlo solos. Necesitamos de tu apoyo y compromiso para seguir salvando vidas y preservando nuestra biodiversidad.
                        Te invitamos a unirte a nuestra campaña de padrinos, una oportunidad única para marcar la diferencia y ser parte activa en la conservación de nuestro entorno natural.
                        ¿Qué significa ser un Padrino?
                        Como padrino, tu donación económica mensual o anual se convertirá en un apoyo vital para el funcionamiento y sostenimi
                </Parrafo>
                <Parrafo>Rescatar y rehabilitar animales en peligro: Tu contribución nos permitirá brindar refugio, atención veterinaria y cuidados especializados a las especies que han sido víctimas del tráfico ilegal, maltrato o pérdida de hábitat. Juntos, les daremos una segunda oportunidad de vida en su entorno natural.
                        Proporcionar una alimentación adecuada: Con tu apoyo, podremos garantizar una alimentación balanceada y de calidad para todos los animales bajo nuestro cuidado. Tu contribución se convertirá en un plato de comida que saciará el hambre y fortalecerá su salud.
                        Fomentar la educación y la conciencia ambiental: Utilizaremos tu donación para desarrollar programas educativos dirigidos a la comunidad local, escuelas y visitantes del centro. Promoveremos el conocimiento sobre la importancia de la conservación de la fauna y flora autóctonas, así como la necesidad de proteger nuestros ecosistemas.
                </Parrafo>
                <Encabe>¿Cómo puedes convertirte en un Padrino?</Encabe>
                <Parrafo>Es muy sencillo unirse a nuestra campaña de padrinos. Elige la modalidad de donación que mejor se ajuste a tus posibilidades:
                        Donación mensual: Establece una donación mensual que se adapte a tu presupuesto. Cada mes, tu aporte respaldará nuestros esfuerzos continuos en el rescate y rehabilitación de la vida silvestre.
                        Donación anual: Si prefieres hacer una donación anual, puedes contribuir con una suma fija que será destinada a nuestros programas durante todo el año. Tu generosidad nos permitirá planificar a largo plazo y brindar atención constante a los animales necesitados.
                        Donación única: Si deseas realizar una donación única, cualquier aporte económico será valioso para nosotros. Cada contribución cuenta y nos ayudará a salvar y proteger a más animales en peligro.
                        ¡Únete a nuestra misión y sé un héroe para la vida silvestre!
                        Tu apoyo como padrino marcará la diferencia en la vida de los animales rescatados y en la conservación de nuestro valioso patrimonio natural. Al unirte a nuestra campaña, te convertirás en parte esencial de nuestro equipo de rescate y en un defensor activo de la biodiversidad.
                        Para ser un padrino o recibir más información, visita nuestro sitio web  o contáctanos directamente. ¡Tu contribución será la voz de aquellos que no pueden hablar!
                        Gracias por tu generosidad y por ser un aliado en nuestra lucha por la protección y conservación de la flora y fauna autóctonas.
                        Centro de Rescate Granja los Pibes
                </Parrafo>
            </DivPadrinos>
        </>
    )
}

export default Padrinos