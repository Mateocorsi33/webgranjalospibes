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
        gap: 1.5rem;
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
    background-color: #fff;
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
    background-color: #557153;
    width: 100%;
    height: auto;
    padding: 3rem 0 12rem 0;
    gap: 2rem;
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
    font-size: 2.5rem;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 6rem 10% 0 10%;
    
    @media (max-width: 800px) {
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0;
        padding-top: 3.5rem;
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
    font-weight: 500;
    line-height: normal;
    letter-spacing: -1px;
    margin: 0 10%;
    margin-top: 2rem;
    padding-top: 2rem;

    @media (max-width: 800px) {
        font-size: 1.2rem;
        width:90%;
        margin-top: 0;
        padding-top: 2.5rem;
        font-weight: 600;
    }
`

const Parrafo = styled.p`
    display: flex;
    text-align: start;
    width: 80%;
    height: auto;
    flex-direction: column;
    color: #557153;
    font-size: .9rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    line-height: 1.8rem;
    margin: 0;

    @media (max-width: 800px) {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        font-size: .8rem;
        width: 100%;
        padding: 0 5%;
    }
`

const Parrafo2 = styled.p`
    display: flex;
    text-align: start;
    width: 50%;
    height: auto;
    flex-direction: column;
    color: #ffffff;
    font-size: .9rem;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.8rem;
    margin: 0;

    @media (max-width: 800px) {
        font-size: .8rem;
        width: 100%;
        padding: 0 5%;
        text-align: center;
    }
`

const Parrafo2Bis = styled.p`
    display: flex;
    text-align: start;
    width: 50%;
    height: auto;
    flex-direction: column;
    color: #557153;
    font-size: .9rem;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.8rem;
    margin: 0;

    @media (max-width: 800px) {
        font-size: .8rem;
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
    font-size: .9rem;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.8rem;
    margin: 0;

    @media (max-width: 800px) {
        font-size: .8rem;
        width: 90%;
        text-align: center;
    }
`


const Fotos = styled.img`
    width: 40%;
    height: auto;
    border-radius: 10px;
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
    border-radius: 10px;
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
    font-weight: 600;
    @media (max-width: 800px) {
        font-size: 1.1rem;
        font-weight:600;
    }
`

const Video = styled.video`
    display: flex;
    width: 55%;

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
    }
`

const QuienesSomos = () => {
    return (
        <>
            <BackG>
                <Titulo>Quiénes Somos</Titulo>
            </BackG>
            <DivQS>
                    <TituPrincipal>GRANJA LOS PIBES</TituPrincipal>
                <DivEncabezado>
                    <Box>
                        <Parrafo>GRANJA LOS PIBES, UN FARO DE ESPERANZA Y ACCIÓN, QUE TRABAJA INCANSABLEMENTE PARA CONSTRUIR UN FUTURO MEJOR Y PODER GENERAR UN IMPACTO POSITIVO EN LA COMUNIDAD. LA GRANJA ABORDA COMO PRINCIPALES PROBLEMÁTICAS LA CONSERVACIÓN AMBIENTAL Y EL DESARROLLO SOCIAL DE NIÑOS Y NIÑAS EN SITUACIONES DE VULNERABILIDAD. BAJO SU MANTO LA GRANJA CUENTA CON EL<Strong>CENTRO DE RESCATE DE ANIMALES SILVESTRES Y LA ASOCIACIÓN CIVIL CASA DEL NIÑO EN LA CALLE,</Strong>DOS INICIATIVAS COMPLEMENTARIAS DONDE CONVERGEN EL DESARROLLO SOCIAL Y LA CONSERVACIÓN AMBIENTAL.</Parrafo>
                        <Video autoPlay muted loop>
                             <source src={video} type="video/mp4" />
                        </Video>
                    </Box>
                    <br></br>
                    <Parrafo><Strong>EN GRANJA LOS PIBES, LA ESPERANZA Y LA ACCIÓN SE ENTRELAZAN PARA CREAR UN IMPACTO POSITIVO EN LA SOCIEDAD Y EN EL MEDIO AMBIENTE. ES UN LLAMADO A UNIR FUERZAS, A GENERAR CONCIENCIA Y A TRABAJAR JUNTOS PARA CONSTRUIR UN MUNDO MÁS EQUITATIVO, SOSTENIBLE Y LLENO DE OPORTUNIDADES PARA TODOS. GRANJA LOS PIBES NOS MUESTRA QUE, CON COMPROMISO Y DEDICACIÓN, PODEMOS MARCAR LA DIFERENCIA Y DEJAR UN LEGADO DURADERO PARA LAS GENERACIONES VENIDERAS.</Strong></Parrafo>
                </DivEncabezado>
                <DivCentro>
                    <Encabe>CENTRO DE RESCATE DE ANIMALES SILVESTRES</Encabe>
                    <Box>
                        <Parrafo2>EL CENTRO SE DEDICA A LA PROTECCIÓN Y CONSERVACIÓN DE LA FLORA Y FAUNA NATIVA. SU LABOR INCANSABLE SE ENFOCA EN RESCATAR Y REHABILITAR ANIMALES VÍCTIMAS DEL TRÁFICO ILEGAL, DEL MASCOTISMO Y LA CRECIENTE EXPANSIÓN URBANA Y AGRÍCOLA PROMOVIENDO LA CONCIENCIA SOBRE LA IMPORTANCIA DE PRESERVAR NUESTRA BIODIVERSIDAD. MEDIANTE ESTUDIOS VETERINARIOS, CUIDADOS ESPECIALIZADOS Y LIBERACIONES RESPONSABLES, EL CENTRO BUSCA GARANTIZAR QUE LOS ANIMALES RECUPERADOS REGRESEN A SU HÁBITAT NATURAL DE FORMA EXITOSA.</Parrafo2>
                        <Fotos src={foto4}/>
                        <Fotos2 src={foto4}/>
                    </Box>
                        <Parrafo2Lineal>NUESTRO OBJETIVO PRINCIPAL ES LOGRAR QUE LOS ANIMALES RESCATADOS PUEDAN REGRESAR A SU HÁBITAT NATURAL LO ANTES POSIBLE. TRABAJAMOS EN ESTRECHA COLABORACIÓN CON EXPERTOS EN CONSERVACIÓN PARA DETERMINAR EL MOMENTO Y EL LUGAR ADECUADOS PARA SU LIBERACIÓN. ESTO NOS ASEGURA QUE TENGAN LAS MEJORES OPORTUNIDADES DE REINTEGRARSE A SU ENTORNO Y CONTINUAR SU CICLO DE VIDA NATURAL.</Parrafo2Lineal>
                    <Box>
                        <Fotos2 src={foto5}/>
                        <Parrafo2>EN UN ESFUERZO POR PRESERVAR LA VIDA SILVESTRE Y SU HÁBITAT NATURAL, NUESTRO EQUIPO SE DEDICA A BRINDAR UN APOYO INTEGRAL TANTO A LA COMUNIDAD LOCAL COMO A NIVEL PROVINCIAL. NUESTRO EQUIPO ESPECIALIZADO ESTÁ PREPARADO PARA ATENDER SITUACIONES DE EMERGENCIA RELACIONADAS CON ANIMALES SILVESTRES EN PELIGRO. REALIZAMOS RESCATES CUIDADOSOS Y BRINDAMOS LA ATENCIÓN NECESARIA, OFRECIENDO UN REFUGIO SEGURO Y LOS TRATAMIENTOS MÉDICOS ADECUADOS PARA SU REHABILITACIÓN. ADEMÁS, LLEVAMOS A CABO ESTUDIOS VETERINARIOS EXHAUSTIVOS PARA EVALUAR EL ESTADO DE SALUD DE LOS ANIMALES RESCATADOS.</Parrafo2>
                        <Fotos src={foto5}/>
                    </Box>
                </DivCentro>
                <DivAsociacion>
                    <Encabe>LA ASOCIACIÓN CIVIL CASA DEL NIÑO EN LA CALLE</Encabe>
                        <Box>
                            <Parrafo2Bis>LA ASOCIACIÓN TRABAJA DESDE HACE MÁS DE 30 AÑOS PARA BRINDAR RESPUESTAS A LAS NECESIDADES DE NIÑOS Y FAMILIAS EN SITUACIÓN DE VULNERABILIDAD Y EXCLUSIÓN, PRIORIZANDO LA PROMOCIÓN Y PROTECCIÓN DE LOS DERECHOS DEL NIÑO. A LO LARGO DE SU TRAYECTORIA, HAN ATENDIDO A MÁS DE 1000 NIÑOS EN DIFERENTES MODALIDADES, COMO EL HOGAR CONVIVENCIAL, CASA DE LOS NIÑOS Y CENTRO DE DESARROLLO INFANTIL. MUCHOS DE LOS NIÑOS QUE FUERON ATENDIDOS POR LA ASOCIACIÓN CONTINÚAN TRABAJANDO EN EL LUGAR, DESEMPEÑÁNDOSE COMO EDUCADORES, CONSTRUCTORES, PERSONAL DE MANTENIMIENTO Y ATENCIÓN EN EL CENTRO DE RESCATE DE ANIMALES SILVESTRES.</Parrafo2Bis>
                            <Fotos src={foto8}/>
                            <Fotos2 src={foto8}/>
                        </Box>
                        <Box>
                            <Fotos src={foto1}/>
                            <Parrafo2Bis>ADEMÁS DE SU FUNCIÓN AMBIENTAL, DESEMPEÑA UN PAPEL CRUCIAL COMO CENTRO DE DÍA PARA NIÑOS Y NIÑAS EN SITUACIONES DE VULNERABILIDAD BRINDANDO APOYO Y OPORTUNIDADES. A TRAVÉS DE PROGRAMAS EDUCATIVOS, TALLERES Y UNA ATENCIÓN INTEGRAL, SE BUSCA MEJORAR SU CALIDAD DE VIDA, PROMOVER SU DESARROLLO PERSONAL Y EMPODERARLOS PARA UN FUTURO MÁS EQUITATIVO. ADEMÁS, SE ENFOCA EN FORTALECER LOS LAZOS CON LOS CENTROS EDUCATIVOS Y PROPORCIONAR UN ENTORNO SEGURO Y ACOGEDOR.</Parrafo2Bis>
                            <Fotos2 src={foto1}/>
                        </Box>
                </DivAsociacion>
                <DivHumedal>
                    <Encabe>HUMEDAL - LOS COIPOS</Encabe>
                    <Box>
                        <Parrafo2>LA ASOCIACIÓN VE LA OPORTUNIDAD DE CONTRIBUIR A LA CONSERVACIÓN Y PROTECCIÓN DEL HUMEDAL UBICADO EN EL KILÓMETRO 139 DE LA RUTA NACIONAL 226. SE LLEVA A CABO UNA INVESTIGACIÓN Y MONITOREO DE LA DIVERSIDAD DE ESPECIES PRESENTES, RESPETANDO LA CONSERVACIÓN DE LA BIODIVERSIDAD. SE HA CONSTRUIDO UN SENDERO AMBIENTAL PARA QUE LAS ESCUELAS DE LA REGIÓN CONOZCAN LA IMPORTANCIA Y PROBLEMÁTICAS DE ESTOS ESPACIOS NATURALES. MUCHAS ESPECIES DE FLORA Y FAUNA SILVESTRES DEPENDEN COMPLETAMENTE DE LOS HUMEDALES.</Parrafo2>
                        <Fotos src={foto6}/>
                        <Fotos2 src={foto6}/>
                    </Box>
                    <Box>
                        <Fotos src={foto2}/>
                        <Parrafo2>TAMBIÉN SE IMPLEMENTA UN PROGRAMA SOCIOEDUCATIVO PARA LA FORMACIÓN Y DIVULGACIÓN SOBRE LA CONSERVACIÓN Y LA IMPORTANCIA DE ESTOS AMBIENTES, A TRAVÉS DE CHARLAS EN LAS ESCUELAS DE LA CIUDAD. LOS PROFESIONALES DE LA ASOCIACIÓN, CON SU EXPERIENCIA EN BIOLOGÍA, VETERINARIA, MANEJO DE FAUNA Y CONSERVACIÓN, ESTÁN COMPROMETIDOS EN DESPERTAR EL INTERÉS DE LOS ESTUDIANTES HACIA EL CUIDADO Y PROTECCIÓN DE LOS AMBIENTES NATURALES, TANTO DE LOS HUMEDALES, COMO DE LA FLORA Y FAUNA EN GENERAL, DE LA QUE SOMOS PARTÍCIPES.</Parrafo2>
                        <Fotos2 src={foto2}/>
                    </Box>
                </DivHumedal>
            </DivQS>
        </>
    )
}

export default QuienesSomos