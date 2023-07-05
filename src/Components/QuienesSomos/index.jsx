import React from "react";
import styled from "styled-components";
import fondo from "../../assest/foto5.png";
import foto1 from "../../assest/opt6.jpg";
import foto2 from "../../assest/opt5.jpg";
import foto3 from "../../assest/foto33.png";
import foto4 from "../../assest/opt3.jpg";
import foto5 from "../../assest/opt2.jpg";
import foto6 from "../../assest/opt7.jpg";
import foto8 from "../../assest/opt8.jpg";
import video from "../../assest/videogranja.webm";



const BackG = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 22rem;
    background: url(${fondo});

    @media (max-width: 800px) {
        display: flex;
        height:auto;
        background-size: 100%;
        background-repeat:no-repeat;
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
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        text-align: center;
        align-items: center;
        font-weight: 500;
    }
`

const DivQS = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 3rem;
`

const DivEncabezado = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    background-color: #ffffff;
    width: 100%;
    height: auto;
    padding: 3rem 0;
    gap: 2rem;

    @media (max-width: 800px) {
        padding: 2rem 0;
        gap: 1rem;
    }
`

const DivCentro =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #D7D67F;
    width: 100%;
    height: auto;
    padding: 3rem 0;
    gap: 2rem;
    @media (max-width: 800px) {
        padding: 2rem 0;
        gap: 1rem;
    }
`

const DivAsociacion =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    background-color: #F5F5F5;
    width: 100%;
    height: auto;
    padding: 3rem 0;
    gap: 2rem;
    @media (max-width: 800px) {
        padding: 2rem 0;
        gap: 1rem;
    }
`

const DivHumedal =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    background-color: #C7CCA5;
    width: 100%;
    height: auto;
    padding: 3rem 0;
    gap: 2rem;
    @media (max-width: 800px) {
        padding: 2rem 0 0 0;
        gap: 1rem;
    }
`

const DivCierre = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    background-color: #ffffff;
    width: 100%;
    height: auto;
    padding: 3rem 0;
    gap: 2rem;
    @media (max-width: 800px) {
        align-items: center;
        justify-content:center;
        margin-top: 2rem;
        padding: 2rem 0;
        gap: 1rem;
    }
`

const TituPrincipal = styled.h1`
    display: flex;
    text-align: center;
    justify-content: center;
    color: #D6D582;
    font-size: 2.5rem;
    font-family: Manrope;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 2px;
    margin: 1rem 10%;
    
    @media (max-width: 800px) {
        font-size: 2.3rem;
        font-weight: 600;
        margin: 0;
        padding-top: 2rem;
        letter-spacing: 1px;
        border-top: 2px solid #D6D582;
    }
`

const Encabe = styled.h2`
    display: flex;
    text-align: center;
    width: 100%;
    height: auto;
    flex-direction: column;
    color: #464646;
    text-shadow: 0px 4px 100px 0px rgba(0, 0, 0, 0.25);
    font-size: 2.2rem;
    font-family: Manrope;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -1px;
    margin: 0 10%;
    margin-top: 1rem;
    padding-top: 2rem;

    @media (max-width: 800px) {
        font-size: 1.5rem;
        width:90%;
        margin-top: 0;
        padding-top: 1rem;
    }
`

const Parrafo = styled.p`
    display: flex;
    text-align: center;
    width: 80%;
    height: auto;
    flex-direction: column;
    color: #464646;
    font-size: 1.2rem;
    font-family: Manrope;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0 10%;

    @media (max-width: 800px) {
        font-size: 1rem;
        width: 90%;
    }
`

const Parrafo2 = styled.p`
    display: flex;
    text-align: center;
    width: 80%;
    height: auto;
    flex-direction: column;
    color: #ffffff;
    font-size: 1.2rem;
    font-family: Manrope;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0 10%;

    @media (max-width: 800px) {
        font-size: 1rem;
        width: 90%;
    }
`



const Fotos = styled.img`
    width: 45%;
    height: auto;
    border-radius: 2px;

@media (max-width: 800px) {
    width: 100%;
    height: auto;
    margin: 1rem 0 0 0;
    }   
`

const Strong = styled.strong`
    color: #464646;
    font-size: 1.4rem;
    font-family: Manrope;
    font-style: normal;
    font-weight: 600;
    @media (max-width: 800px) {
        font-size: 1.1rem;
        font-weight:600;
    }
`

const Video = styled.video`
    display: flex;
    width: 40%;

    @media (max-width: 800px) {
        width: 100%;
        height: auto;
    }
`

const QuienesSomos = () => {
    return (
        <>
            <BackG>
                <Titulo>Quiénes Somos</Titulo>
            </BackG>
            <DivQS>
                <DivEncabezado>
                    <TituPrincipal>GRANJA LOS PIBES</TituPrincipal>
                    <Parrafo>Ubicado en el corazón de nuestra región, se encuentra Granja Los Pibes, un faro de esperanza y acción, que trabaja incansablemente para construir un futuro mejor y poder generar un impacto positivo en la comunidad. La granja aborda como principales problemáticas la conservación ambiental y el desarrollo social de niños y niñas en situaciones de vulnerabilidad.</Parrafo>
                    <Video autoPlay muted loop>
                        <source src={video} type="video/mp4" />
                    </Video>
                    <Parrafo>Bajo su manto la granja cuenta con el<Strong>Centro de Rescate de Animales Silvestres y la Asociación Civil Casa del Niño en la Calle,</Strong>dos iniciativas complementarias donde convergen el desarrollo social y la conservación ambiental.</Parrafo>
                </DivEncabezado>
                <DivCentro>
                    <Encabe>Centro de Rescate de Animales Silvestres</Encabe>
                    <Parrafo2>El centro se dedica a la protección y conservación de la flora y fauna nativa. Su labor incansable se enfoca en rescatar y rehabilitar animales víctimas del tráfico ilegal, del mascotismo y la creciente expansión urbana y agrícola promoviendo la conciencia sobre la importancia de preservar nuestra biodiversidad. Mediante estudios veterinarios, cuidados especializados y liberaciones responsables, el centro busca garantizar que los animales recuperados regresen a su hábitat natural de forma exitosa.</Parrafo2>
                    <Fotos src={foto4}/>
                    <Parrafo2>En un esfuerzo por preservar la vida silvestre y su hábitat natural, nuestro equipo se dedica a brindar un apoyo integral tanto a la comunidad local como a nivel provincial.</Parrafo2>
                    <Parrafo2>Nuestro equipo especializado está preparado para atender situaciones de emergencia relacionadas con animales silvestres en peligro. Realizamos rescates cuidadosos y brindamos la atención necesaria, ofreciendo un refugio seguro y los tratamientos médicos adecuados para su rehabilitación. Además, llevamos a cabo estudios veterinarios exhaustivos para evaluar el estado de salud de los animales rescatados.</Parrafo2>
                    <Fotos src={foto5}/>
                    <Parrafo2>Nuestro objetivo principal es lograr que los animales rescatados puedan regresar a su hábitat natural lo antes posible. Trabajamos en estrecha colaboración con expertos en conservación para determinar el momento y el lugar adecuados para su liberación. Esto nos asegura que tengan las mejores oportunidades de reintegrarse a su entorno y continuar su ciclo de vida natural.</Parrafo2>
                </DivCentro>
                <DivAsociacion>
                <Encabe>La Asociación Civil Casa del Niño en la Calle</Encabe>
                    <Parrafo>La asociación trabaja desde hace más de 30 años para brindar respuestas a las necesidades de niños y familias en situación de vulnerabilidad y exclusión, priorizando la promoción y protección de los derechos del niño. A lo largo de su trayectoria, han atendido a más de 1000 niños en diferentes modalidades, como el Hogar Convivencial, Casa de los Niños y Centro de Desarrollo Infantil.</Parrafo>
                    <Fotos src={foto8}/>
                    <Parrafo>Muchos de los niños que fueron atendidos por la asociación continúan trabajando en el lugar, desempeñándose como educadores, constructores, personal de mantenimiento y atención en el Centro de Rescate de Animales Silvestres.</Parrafo>
                    <Fotos src={foto1}/>
                    <Parrafo>Además de su función ambiental, desempeña un papel crucial como centro de día para niños y niñas en situaciones de vulnerabilidad brindando apoyo y oportunidades. A través de programas educativos, talleres y una atención integral, se busca mejorar su calidad de vida, promover su desarrollo personal y empoderarlos para un futuro más equitativo. Además, se enfoca en fortalecer los lazos con los centros educativos y proporcionar un entorno seguro y acogedor.</Parrafo>
                </DivAsociacion>
                <DivHumedal>
                    <Encabe>Humedal - Los Coipos</Encabe>
                    <Parrafo2>La asociación ve la oportunidad de contribuir a la conservación y protección del humedal ubicado en el kilómetro 139 de la ruta nacional 226. Se lleva a cabo una investigación y monitoreo de la diversidad de especies presentes, respetando la conservación de la biodiversidad. Se ha construido un sendero ambiental para que las escuelas de la región conozcan la importancia y problemáticas de estos espacios naturales.</Parrafo2>
                    <Fotos src={foto6}/>
                    <Parrafo2>También se implementa un programa socioeducativo para formación y divulgación sobre la conservación y la importancia de estos ambientes, a través de charlas en las escuelas de la ciudad. Los profesionales de la asociación, con su experiencia en biología, veterinaria, manejo de fauna y conservación, están comprometidos en despertar el interés de los estudiantes hacia el cuidado y protección de los ambientes naturales.</Parrafo2>
                    <Fotos src={foto2}/>
                </DivHumedal>
                <DivCierre>
                    <Parrafo><Strong>En Granja los Pibes, la esperanza y la acción se entrelazan para crear un impacto positivo en la sociedad y en el medio ambiente. Es un llamado a unir fuerzas, a generar conciencia y a trabajar juntos para construir un mundo más equitativo, sostenible y lleno de oportunidades para todos. Granja los Pibes nos muestra que, con compromiso y dedicación, podemos marcar la diferencia y dejar un legado duradero para las generaciones venideras.</Strong></Parrafo>
                </DivCierre>
            </DivQS>
        </>
    )
}

export default QuienesSomos