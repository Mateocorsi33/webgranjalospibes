import React from "react";
import styled from "styled-components";
import foto from "../../../assest/cuatro.jpg";
import foto2 from "../../../assest/siete.jpg";
import foto3 from "../../../assest/tres.jpg";
import foto4 from "../../../assest/14.jpg";
import fondo from "../../../assest/fondo9.png";


const Fondo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${fondo});
    background-attachment: fixed;
    background-size: cover;
    width:100%;
    height: auto;
    z-index: -1;

  @media (max-width: 800px) {
      background-attachment: fixed;
  }
`

const BoxCuerpo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3.5rem;
    width: 80%;

    @media (max-width: 800px) {
        margin-top:1rem;
        width: 100%;
    }
`

const TituloPortada = styled.h1`
    display: none;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    animation: fadeInLeft;
    animation-duration: 1s;

    @media (max-width: 800px) {
        display: flex;
        width: 90%;
        color: #557153;
        font-size: 2.5rem;
        z-index: 100;
        font-weight: 600;
        margin-top: 1.5rem;
        padding-bottom: 1.5rem;
    }
`

const DivContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-bottom: 11rem;
    margin: 0;
    gap: 10rem;

    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        margin-top:1rem;
        padding-bottom: 3.5rem;
        gap: 1.5rem;
    }
`

const DivContent2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-bottom: 11rem;
    gap: 5rem;

    @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 3.5rem;
    gap: 1.5rem;
    }
`

const DivText = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    border-top: 4px solid #D6D582;
    width: 20%;

    @media (max-width: 800px) {
        text-align: center;
        align-items: center;
        border-top: none;
        padding-top: .8rem;
        gap: 1.2rem;
        width: 100%;
        overflow: hidden;
    }
`

const DivText2 = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    align-items: flex-end;
    border-top: 4px solid #D6D582;
    width: 20%;
    

    @media (max-width: 800px) {
        align-items: center;
        border-top: none;
        padding-top: 1rem;
        gap: 1.2rem;
        order: 1;
        width: 100%;
        overflow: hidden;
    }
`

const Titu = styled.h1`
    display: flex;
    width: 36rem;
    flex-direction: column;
    color: #7D8F69;
    font-size: 2rem;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    line-height: 2.5rem;
    letter-spacing: 2px;

    @media (max-width: 800px) {
        border-top: 4px solid #A9AF7E;
        padding-top: 2.5rem;
        letter-spacing: 0.5px;
        width: 90%;
        font-size: 1.2rem;
        line-height: 1.5rem;
        color: #557153;
        font-weight: 600;
        text-align: center;
    }
`

const Titu2 = styled.h1`
    display: flex;
    width: 36rem;
    flex-direction: column;
    text-align: end;
    color: #7D8F69;
    font-size: 2rem;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    line-height: 2.5rem;
    letter-spacing: 2px;

    @media (max-width: 800px) {
        border-top: 4px solid #A9AF7E;
        padding-top: 2.5rem;
        letter-spacing: 0.5px;
        width: 90%;
        font-size: 1.2rem;
        line-height: 1.5rem;
        color: #557153;
        font-weight: 600;
        text-align: center;
    }
`  

const Parra = styled.p`
    display: flex;
    width: 36rem;
    flex-direction: column;
    margin: 0;
    color: #557153;
    font-size: .9rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.9px;
    padding-top: .5rem;

    @media (max-width: 800px) {
        width: 95%;
        font-size: .9rem;
        line-height: 2rem;
        font-weight: 400;
        letter-spacing: 0;
        text-align: center;
    }
`

const Parra2 = styled.p`
    display: flex;
    width: 36rem;
    flex-direction: column;
    text-align: end;
    margin: 0;
    color: #557153;
    font-size: .9rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.9px;
    padding-top: .5rem;


    @media (max-width: 800px) {
        width: 95%;
        font-size: .9rem;
        line-height: 2rem;
        font-weight: 400;
        letter-spacing: 0;
        text-align: center;
    }
`

const Gif = styled.img`
    width: 26rem;
    height: 26rem;
    border-radius: 5px;
    margin: 0;
    /* opacity: 80%; */
    box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.5);

    @media (max-width: 800px) {
        display: none;
    }
`

const Gif2 = styled.img`
    width: 26.34rem;
    height: 26.34rem;
    border-radius: 5px;
    margin: 0;
    /* opacity: 80%; */
    box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.5);

    @media (max-width: 800px) {
        display: none;
    }
`

const GifM = styled.img`
    display: none;

    @media (max-width: 800px) {
        display: flex;
        width: 100%;
        height: auto;
        opacity: 95%;
        margin: 1rem 0 1.5rem 0;
    }
`


const STRONG = styled.h1`
    color: #D6D582;
    font-weight: 800;
    font-size: 36px;
    margin: 0;

    @media (max-width: 800px) {
        font-size: 1.4rem;
        text-align: flex-start;
    }
`

const Presentacion = () => {

    return (
        <Fondo>
            <BoxCuerpo>
                    <TituloPortada>CONOCER PARA CUIDAR Y CONSERVAR</TituloPortada>
                <DivContent>
                    <DivText data-aos="fade-left"  data-aos-duration="1500">
                        <Titu data-aos="fade-right" data-aos-duration="1500">CONTRIBUYENDO A LA CONCIENTIZACIÓN SOBRE EL <STRONG>CUIDADO Y LA PRESERVACIÓN</STRONG> DE LA FLORA Y FAUNA SILVESTRE.</Titu>
                        <GifM src={foto}/>
                        <Parra data-aos="fade-right" data-aos-duration="1500"> 
                        GRANJA LOS PIBES HA ASUMIDO LA IMPORTANTE TAREA DE CONCIENTIZAR A LA COMUNIDAD. A TRAVÉS DE SU INCANSABLE LABOR, EL CENTRO BUSCA PRESERVAR LA RIQUEZA Y LA BIODIVERSIDAD QUE NOS RODEA, CONSIDERADAS TESOROS VIVOS DE NUESTRA REGIÓN.
                        </Parra>
                    </DivText>
                    <Gif src={foto} data-aos="fade-left"  data-aos-duration="1500"/>
                </DivContent>
                <DivContent2>
                    <Gif2 src={foto2} data-aos="fade-right" data-aos-duration="1500"/>
                    <DivText2 data-aos="fade-right" data-aos-duration="1500">
                        <Titu2 data-aos="fade-left"  data-aos-duration="1500">APOYO INTEGRAL A LA CONSERVACIÓN DE LA VIDA SILVESTRE: <STRONG>RESCATES, ESTUDIOS Y LIBERACIONES.</STRONG></Titu2>
                        <GifM src={foto2}/>
                        <Parra2 data-aos="fade-left"  data-aos-duration="1500"> 
                        A TRAVÉS DE ACCIONES DE RESCATE, ESTUDIOS VETERINARIOS Y LIBERACIONES, NUESTRO EQUIPO SE DEDICA A BRINDAR UN APOYO INTEGRAL TANTO A LA COMUNIDAD LOCAL COMO A NIVEL PROVINCIAL, PARA ASEGURAR EL BIENESTAR Y LA SUPERVIVENCIA DE LOS ANIMALES SILVESTRES.
                        </Parra2>
                    </DivText2>
                </DivContent2>
                <DivContent>
                    <DivText data-aos="fade-left"  data-aos-duration="1500">
                        <Titu data-aos="fade-right" data-aos-duration="1500"><STRONG>MASCOTISMO, EXPANSIÓN URBANA-AGRÍCOLA Y TRÁFICO ILEGAL:</STRONG> PRINCIPALES AMENAZAS CONTRA LA BIODIVERSIDAD.</Titu>
                        <GifM src={foto3}/>
                        <Parra data-aos="fade-right" data-aos-duration="1500">
                        EN RESPUESTA A ESTOS DESAFÍOS, QUE REPRESENTAN LOS PRINCIPALES FOCOS DE CONFLICTO, CONSIDERAMOS DE VITAL IMPORTANCIA CONCIENTIZAR Y UNIR ESFUERZOS PARA PROTEGER Y PRESERVAR NUESTRO HÁBITAT NATURAL.
                        </Parra>
                    </DivText>
                    <Gif src={foto3} data-aos="fade-left"  data-aos-duration="1500"/>
                </DivContent>
                <DivContent2>
                    <Gif2 src={foto4} data-aos="fade-right" data-aos-duration="1500"/>
                    <DivText2 data-aos="fade-right" data-aos-duration="1500">
                        <Titu2 data-aos="fade-left"  data-aos-duration="1500"><STRONG>CUIDANDO DEL PLANETA Y DE LOS NIÑOS:</STRONG> CENTRO DE RESCATE QUE COMBINA CONSERVACIÓN AMBIENTAL Y AYUDA SOCIAL.</Titu2>
                        <GifM src={foto4}/>
                        <Parra2 data-aos="fade-left"  data-aos-duration="1500">
                        FUNCIONAMIENTO DEL CENTRO DE DÍA PARA NIÑOS Y NIÑAS EN SITUACIONES DE VULNERABILIDAD. SE BUSCA BRINDAR UN APOYO INTEGRAL, PARA EL CRECIMIENTO Y DESARROLLO DE LOS NIÑOS Y NIÑAS, PROPORCIONÁNDOLES OPORTUNIDADES EDUCATIVAS PARA UN FUTURO MEJOR.
                        </Parra2>
                    </DivText2>
                </DivContent2>
            </BoxCuerpo>
        </Fondo>
    )
}

export default Presentacion