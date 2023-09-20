import React from "react";
import styled from "styled-components";
import fondo from "../../assest/quiene.png";
import foto1 from "../../assest/opt6.jpg";
import foto2 from "../../assest/opt5.jpg";
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
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
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
        padding: 1rem;
    }
`

const DivQS = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 0;
    @media (max-width: 800px) {
        justify-content:center;
    }
`

const DivEncabezado = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-between;
    background-color: #ffffff;
    width: 100%;
    height: auto;
    padding: 3rem 0;
    margin-bottom: 5rem;
    gap: 1rem;

    @media (max-width: 800px) {
        padding: 1rem 0;
        gap: .1rem;
        justify-content:center;
    }
`

const DivCentro =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #557153;
    width: 100%;
    height: auto;
    padding: 4rem 0 6rem 0;
    gap: 3.5rem;
    @media (max-width: 800px) {
        padding: 4rem 0 6rem 0;
        gap: 2.8rem;
    }
`

const DivAsociacion =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    background-color: #638360;
    width: 100%;
    height: auto;
    padding: 3rem 0 8rem 0;
    gap: 2rem;
    @media (max-width: 800px) {
        padding: 4rem 0 3.6rem 0;
        gap: 2rem;
    }
`

const DivHumedal =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    background-color: #ffffff;
    width: 100%;
    height: auto;
    padding: 3rem 0 12rem 0;
    gap: 2rem;
    box-shadow: 4px 4px 8px 5px rgba(0, 0, 0, 0.1);
    @media (max-width: 800px) {
        padding: 4rem 0 4rem 0;
        gap: 2.8rem;
    }
`


const TituPrincipal = styled.h1`
    display: flex;
    text-align: center;
    justify-content: center;
    color: #D6D582;
    font-size: 2.8rem;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin: 4rem 10% 0 10%;
    
    @media (max-width: 800px) {
        font-size: 1.8rem;
        font-weight: 800;
        margin: 0;
        padding-top: 3.5rem;
        padding-bottom: 1rem;
        letter-spacing: 1px;
    }
`

const Encabe = styled.h2`
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
    font-weight: 800;
    line-height: normal;
    letter-spacing: -1px;
    margin: 0 10%;
    margin-top: 2rem;
    padding-top: 2rem;

    @media (max-width: 800px) {
        font-size: 1.2rem;
        width:90%;
        margin-top: 0;
        padding-top: 1.7rem;
        font-weight: 600;
    }
`

const Parrafo = styled.p`
    display: flex;
    text-align: start;
    width: 80%;
    height: auto;
    flex-direction: column;
    color: #464646;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-height: 1.7rem;
    margin: 0;

    @media (max-width: 800px) {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        font-size: .9rem;
        width: 100%;
        padding: 0 5%;
    }
`

const Parrafo2 = styled.p`
    display: flex;
    text-align: start;
    width: 47%;
    height: auto;
    flex-direction: column;
    color: #ffffff;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 1.7rem;
    margin: 0;

    @media (max-width: 800px) {
        font-size: .9rem;
        font-weight: 400;
        width: 100%;
        padding: 0 5%;
        text-align: center;
    }
`

const Parrafo2Bis = styled.p`
    display: flex;
    text-align: start;
    width: 47%;
    height: auto;
    flex-direction: column;
    color: #464646;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 1.7rem;
    margin: 0;

    @media (max-width: 800px) {
        font-size: .9rem;
        width: 100%;
        padding: 0 5%;
        text-align: center;
    }
`

const Parrafo2Lineal = styled.p`
    display: flex;
    text-align: start;
    width: 80%;
    height: auto;
    flex-direction: column;
    color: #ffffff;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 1.7rem;
    margin: 0;

    @media (max-width: 800px) {
        font-size: .9rem;
        font-weight: 400;
        width: 90%;
        text-align: center;
    }
`


const Fotos = styled.img`
    width: 40%;
    height: auto;
    border-radius: 5px;
    opacity: 80%;

@media (max-width: 800px) {
        display:none;
        width: 100%;
        height: auto;
        margin: 0;
    }   
`
const Fotos2 = styled.img`
    display:none;
    width: 40%;
    height: auto;
    opacity: 80%;

@media (max-width: 800px) {
        display:flex;
        width: 100%;
        height: auto;
        margin: 0;
    }   
`

const Strong = styled.strong`
    color: #464646;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    @media (max-width: 800px) {
        font-size: 1rem;
        font-weight:600;
    }
`

const Video = styled.video`
    display: flex;
    width: 53%;
    border-radius: 5px;

    @media (max-width: 800px) {
        width: 100%;
        height: auto;
    }
`

const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem; 
    width: 80%;
    margin: 2rem 0 1rem 0;

    @media (max-width: 800px) {
        width: 100%;
        height: auto;
        flex-direction: column;
        margin: 0;
    }
`



const QuienesSomos = () => {
    return (
        <>
            <BackG>
                <Titulo>Quiénes Somos</Titulo>
            </BackG>
            <DivQS>
                    <TituPrincipal data-aos="zoom-in">GRANJA LOS PIBES</TituPrincipal>
                <DivEncabezado>
                    <Box>
                        <Parrafo data-aos="zoom-in">Granja los pibes, un faro de esperanza y acción, que trabaja incansablemente para construir un futuro mejor y poder generar un impacto positivo en la comunidad. La granja aborda como principales problemáticas la conservación ambiental y el desarrollo social de niños y niñas en situaciones de vulnerabilidad. Bajo su manto la granja cuenta con el<Strong>Centro de rescate de animales silvestres y la Asociación Civil Casa del niño en la calle,</Strong>dos iniciativas complementarias donde convergen el desarrollo social y la conservación ambiental.</Parrafo>
                        <Video autoPlay muted loop data-aos="zoom-in">
                             <source src={video} type="video/mp4" />
                        </Video>
                    </Box>
                    <br></br>
                    <Parrafo data-aos="zoom-in"><Strong>En granja los pibes, la esperanza y la acción se entrelazan para crear un impacto positivo en la sociedad y en el medio ambiente. Es un llamado a unir fuerzas, a generar conciencia y a trabajar juntos para construir un mundo más equitativo, sostenible y lleno de oportunidades para todos. Granja Los Pibes nos muestra que, con compromiso y dedicación, podemos marcar la diferencia y dejar un legado duradero para las generaciones venideras.</Strong></Parrafo>
                </DivEncabezado>
                <DivCentro>
                    <Encabe  data-aos="zoom-in">CENTRO DE RESCATE DE ANIMALES SILVESTRES</Encabe>
                    <Box  data-aos="zoom-in">
                        <Parrafo2>El centro se dedica a la protección y conservación de la flora y fauna nativa. Su labor incansable se enfoca en rescatar y rehabilitar animales víctimas del tráfico ilegal, del mascotismo y la creciente expansión urbana y agrícola promoviendo la conciencia sobre la importancia de preservar nuestra biodiversidad. Mediante estudios veterinarios, cuidados especializados y liberaciones responsables, el centro busca garantizar que los animales recuperados regresen a su hábitat natural de forma exitosa.</Parrafo2>
                        <Fotos src={foto4}/>
                        <Fotos2 src={foto4}/>
                    </Box>
                        <Parrafo2Lineal  data-aos="zoom-in">El objetivo principal es que los animales rescatados regresen a su hábitat natural lo antes posible. Trabajamos en estrecha colaboración con expertos en conservación para determinar el momento y el lugar adecuados para su liberación. Esto nos asegura que tengan las mejores oportunidades de reintegrarse a su entorno y continuar su ciclo de vida natural.</Parrafo2Lineal>
                    <Box  data-aos="zoom-in">
                        <Fotos2 src={foto5}/>
                        <Parrafo2>En un esfuerzo por preservar la vida silvestre y su hábitat natural, nuestro equipo se dedica a brindar un apoyo integral tanto a la comunidad local como a nivel provincial. Nuestro equipo especializado está preparado para atender situaciones de emergencia relacionadas con animales silvestres en peligro. Realizamos rescates cuidadosos y brindamos la atención necesaria, ofreciendo un refugio seguro y los tratamientos médicos adecuados para su rehabilitación. Además, llevamos a cabo estudios veterinarios exhaustivos para evaluar el estado de salud de los animales rescatados.</Parrafo2>
                        <Fotos src={foto5}/>
                    </Box>
                </DivCentro>
                <DivAsociacion>
                    <Encabe data-aos="zoom-in">LA ASOCIACIÓN CIVIL CASA DEL NIÑO EN LA CALLE</Encabe>
                        <Box  data-aos="zoom-in">
                            <Parrafo2>La asociación trabaja desde hace más de 30 años para brindar respuestas a las necesidades de niños y familias en situación de vulnerabilidad y exclusión, priorizando la promoción y protección de los derechos del niño. a lo largo de su trayectoria, han atendido a más de 1000 niños en diferentes modalidades, como el hogar convivencial, casa de los niños y centro de desarrollo infantil. Muchos de los niños que fueron atendidos por la asociación continúan trabajando en el lugar, desempeñándose como educadores, constructores, personal de mantenimiento y atención en el centro de rescate de animales silvestres.</Parrafo2>
                            <Fotos src={foto8}/>
                            <Fotos2 src={foto8}/>
                        </Box>
                        <Box  data-aos="zoom-in">
                            <Fotos src={foto1}/>
                            <Parrafo2>Además de su función ambiental, desempeña un papel crucial como centro de día para niños y niñas en situaciones de vulnerabilidad brindando apoyo y oportunidades. A través de programas educativos, talleres y una atención integral, se busca mejorar su calidad de vida, promover su desarrollo personal y empoderarlos para un futuro más equitativo. además, se enfoca en fortalecer los lazos con los centros educativos y proporcionar un entorno seguro y acogedor.</Parrafo2>
                            <Fotos2 src={foto1}/>
                        </Box>
                </DivAsociacion>
                <DivHumedal>
                    <Encabe data-aos="zoom-in">HUMEDAL - LOS COIPOS</Encabe>
                    <Box  data-aos="zoom-in">
                        <Parrafo2Bis>La asociación ve la oportunidad de contribuir a la conservación y protección del humedal ubicado en el kilómetro 139 de la ruta nacional 226. Se lleva a cabo una investigación y monitoreo de la diversidad de especies presentes, respetando la conservación de la biodiversidad. Se ha construido un sendero ambiental para que las escuelas de la región conozcan la importancia y problemáticas de estos espacios naturales. Muchas especies de flora y fauna silvestres dependen completamente de los humedales.</Parrafo2Bis>
                        <Fotos src={foto6}/>
                        <Fotos2 src={foto6}/>
                    </Box>
                    <Box  data-aos="zoom-in">
                        <Fotos src={foto2}/>
                        <Parrafo2Bis>También se implementa un programa socioeducativo para la formación y divulgación sobre la conservación y la importancia de estos ambientes, a través de charlas en las escuelas de la ciudad. Los profesionales de la asociación, con su experiencia en biología, veterinaria, manejo de fauna y conservación, están comprometidos en despertar el interés de los estudiantes hacia el cuidado y protección de los ambientes naturales, tanto de los humedales, como de la flora y fauna en general, de la que somos partícipes.</Parrafo2Bis>
                        <Fotos2 src={foto2}/>
                    </Box>
                </DivHumedal>
            </DivQS>
        </>
    )
}

export default QuienesSomos