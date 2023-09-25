import React from "react";
import styled from "styled-components";
import foto from "../../../assest/cuatro2.png";
import foto1 from "../../../assest/fotomovil.jpg";
import foto2 from "../../../assest/siete2.png";
import foto2m from "../../../assest/siete.jpg";
import foto3 from "../../../assest/tres2.png";
import foto3m from "../../../assest/tres.jpg";
import foto4 from "../../../assest/14dos.png";
import foto4m from "../../../assest/14.jpg";
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
    overflow: hidden;

  @media (max-width: 800px) {
      background-attachment: fixed;
      background-image: none;
  }
`

const BoxCuerpo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3.5rem;
    width: 80%;
    overflow: hidden;

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
        color: #2E8B57;
        font-size: 2.8rem;
        z-index: 100;
        font-weight: 800;
        margin-top: 1rem;
        padding-bottom: 1rem;
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
    overflow: hidden;

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
    overflow: hidden;

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
    border-top: 4px solid #c9c86f;
    width: 20%;

    @media (max-width: 800px) {
        text-align: center;
        align-items: center;
        border-top: none;
        padding-top: .8rem;
        gap: 1.2rem;
        width: 100%;
    }
`

const DivText2 = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    align-items: flex-end;
    border-top: 4px solid #c9c86f;
    width: 20%;    

    @media (max-width: 800px) {
        align-items: center;
        border-top: none;
        padding-top: 1rem;
        gap: 1.2rem;
        order: 1;
        width: 100%;
    }
`

const Titu = styled.h1`
    display: flex;
    width: 36rem;
    flex-direction: column;
    color: #4f4f4f;
    font-size: 2rem;
    font-weight: 700;
    font-family: 'Bebas Neue', sans-serif;
    line-height: 2.5rem;
    letter-spacing: 2px;

    @media (max-width: 800px) {
        border-top: 4px solid #2E8B57;
        padding-top: 2.5rem;
        letter-spacing: 0.5px;
        width: 95%;
        font-size: 1.8rem;
        line-height: 2rem;
        color: #4f4f4f;
        font-weight: 600;
        text-align: center;
    }
`

const Titu2 = styled.h1`
    display: flex;
    width: 36rem;
    flex-direction: column;
    text-align: end;
    color: #4f4f4f;
    font-size: 2rem;
    font-weight: 700;
    font-family: 'Bebas Neue', sans-serif;
    line-height: 2.5rem;
    letter-spacing: 2px;

    @media (max-width: 800px) {
        border-top: 4px solid #2E8B57;
        padding-top: 2.5rem;
        letter-spacing: 0.5px;
        width: 90%;
        font-size: 1.8rem;
        line-height: 2rem;
        color: #4f4f4f;
        font-weight: 600;
        text-align: center;
    }
`  

const Parra = styled.p`
    display: flex;
    width: 36rem;
    flex-direction: column;
    margin: 0;
    color: #4f4f4f;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.1px;
    padding-top: .5rem;

    @media (max-width: 800px) {
        width: 100%;
        padding: 0 5%;
        font-size: .9rem;
        line-height: 2rem;
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
    color: #4f4f4f;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.1px;
    padding-top: .5rem;


    @media (max-width: 800px) {
        width: 100%;
        padding: 0 5%;
        font-size: .9rem;
        line-height: 2rem;
        letter-spacing: 0;
        text-align: center;
    }
`

const Gif = styled.img`
    width: 24rem;
    height: 24rem;
    border-radius: 5px;
    margin: 0;
    /* box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.5); */

    @media (max-width: 800px) {
        display: none;
    }
`

const Gif2 = styled.img`
    width: 24rem;
    height: 24rem;
    border-radius: 5px;
    margin: 0;
    /* box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.5); */

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
    color: #c9c86f;
    font-weight: 800;
    font-size: 3.2rem;
    margin: 0;

    @media (max-width: 800px) {
        font-size: 2.5rem;
        text-align: flex-start;
    }
`

const Presentacion = () => {

    return (
        <Fondo>
            <BoxCuerpo>
                    <TituloPortada>CONOCER PARA CUIDAR Y CONSERVAR</TituloPortada>
                <DivContent>
                    <DivText data-aos="fade-right"  data-aos-duration="1500">
                        <Titu>CONTRIBUYENDO A LA CONCIENTIZACIÓN SOBRE <STRONG>EL CUIDADO Y LA PRESERVACIÓN</STRONG> DE LA FLORA Y FAUNA SILVESTRE.</Titu>
                        <GifM src={foto1}/>
                        <Parra> 
                        Granja los pibes ha asumido la importante tarea de concientizar a la comunidad, a través de su incansable labor, el centro busca preservar la riqueza y la biodiversidad que nos rodea, consideradas tesoros vivos de nuestra región.
                        </Parra>
                    </DivText>
                    <Gif src={foto} data-aos="fade-left"  data-aos-duration="1000"/>
                </DivContent>
                <DivContent2>
                    <Gif2 src={foto2} data-aos="fade-right" data-aos-duration="1000"/>
                    <DivText2 data-aos="fade-left" data-aos-duration="1500">
                        <Titu2>APOYO INTEGRAL A LA CONSERVACIÓN DE LA VIDA SILVESTRE: <STRONG>RESCATES, ESTUDIOS Y LIBERACIONES.</STRONG></Titu2>
                        <GifM src={foto2m}/>
                        <Parra2> 
                        A través de acciones de rescate, estudios veterinarios y liberaciones, nuestro equipo se dedica a brindar un apoyo integral tanto a la comunidad local como a nivel provincial, para asegurar el bienestar y la supervivencia de los animales silvestres.
                        </Parra2>
                    </DivText2>
                </DivContent2>
                <DivContent>
                    <DivText data-aos="fade-right"  data-aos-duration="1500">
                        <Titu><STRONG>MASCOTISMO, EXPANSIÓN URBANA-AGRÍCOLA Y TRÁFICO ILEGAL:</STRONG> PRINCIPALES AMENAZAS CONTRA LA BIODIVERSIDAD.</Titu>
                        <GifM src={foto3m}/>
                        <Parra>
                        En respuesta a estos desafíos, que representan los principales focos de conflicto, consideramos de vital importancia concientizar y unir esfuerzos para proteger y preservar nuestro hábitat natural.
                        </Parra>
                    </DivText>
                    <Gif src={foto3} data-aos="fade-left"  data-aos-duration="1000"/>
                </DivContent>
                <DivContent2>
                    <Gif2 src={foto4} data-aos="fade-right" data-aos-duration="1000"/>
                    <DivText2 data-aos="fade-left" data-aos-duration="1500">
                        <Titu2><STRONG>CUIDANDO DEL PLANETA Y DE LOS NIÑOS:</STRONG> CENTRO DE RESCATE QUE COMBINA CONSERVACIÓN AMBIENTAL Y AYUDA SOCIAL.</Titu2>
                        <GifM src={foto4m}/>
                        <Parra2>
                        Funcionamiento del centro de día para niños y niñas en situaciones de vulnerabilidad. Se busca brindar un apoyo integral, para el crecimiento y desarrollo de los niños y niñas, proporcionándoles oportunidades educativas para un futuro mejor.
                        </Parra2>
                    </DivText2>
                </DivContent2>
            </BoxCuerpo>
        </Fondo>
    )
}

export default Presentacion