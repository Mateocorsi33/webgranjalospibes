import React from "react";
import styled from "styled-components";
import gif1 from "../../../assest/emergencia.gif";
import gif2 from "../../../assest/estetoscopio.gif";
import gif3 from "../../../assest/collar-para-mascotas.gif";
import gif4 from "../../../assest/amabilidad.gif";

const BoxCuerpo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    width: 100%;
    height: auto;
    background-color: #ffffff;
`

const DivContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 6rem;
    width: 100%;
`

const DivContent2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 6rem;
    width: 100%;
`

const DivText = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0;
    border-top: 4px solid #D6D582;
    width: 20%;
    gap: 2rem;
    margin-left: 7rem;
`

const DivText2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 0;
    border-top: 4px solid #D6D582;
    width: 20%;
    gap: 2rem;
    margin-right: 7rem;
`

const Titu = styled.h1`
    display: flex;
    width: 40rem;
    height: 187px;
    flex-direction: column;
    color: #464646;
    font-size: 34px;
    font-weight: 400;
    font-family: Manrope;
    line-height: 42px;
    letter-spacing: 2px;
`

const Titu2 = styled.h1`
    display: flex;
    width: 40rem;
    height: 187px;
    flex-direction: column;
    text-align: end;
    color: #464646;
    font-size: 34px;
    font-weight: 400;
    font-family: Manrope;
    line-height: 42px;
    letter-spacing: 2px;
`  

const Parra = styled.p`
    display: flex;
    width: 40rem;
    flex-direction: column;
    margin: 0;
    color: #586E66;
    font-size: 18px;
    font-family: Manrope;
    line-height: 27px;
    letter-spacing: 0.7px;
`

const Parra2 = styled.p`
    display: flex;
    width: 40rem;
    flex-direction: column;
    text-align: end;
    margin: 0;
    color: #586E66;
    font-size: 18px;
    font-family: Manrope;
    line-height: 27px;
    letter-spacing: 0.7px;
`

const Gif = styled.img`
    width: 26rem;
    height: 26rem;
    margin: 0;
    padding-right: 4.5rem;
`

const Gif2 = styled.img`
    width: 26rem;
    height: 26rem;
    margin: 0;
    padding-left: 4.5rem;
`
const STRONG = styled.h1`
    font-weight: 600;
    font-size: 38px;
    margin: 0;
`

const Presentacion = () => {
    return (
        <BoxCuerpo>
            <DivContent>
                <DivText>
                    <Titu>GRANJA LOS PIBES: CONTRIBUYENDO A LA CONCIENCIACIÓN SOBRE EL <STRONG>CUIDADO Y LA PRESERVACIÓN</STRONG> DE LA FLORA Y FAUNA SILVESTRE.</Titu>
                    <Parra> 
                    El centro de rescate Granja Los Pibes, ha asumido la importante tarea de concientizar a la comunidad sobre los cuidados y conservación de la flora y fauna de nuestra region. A través de su incansable labor, el centro busca preservar la riqueza y la biodiversidad que nos rodea.
                    Su enfoque principal radica en la conservación de la flora y fauna autóctonas, consideradas tesoros vivos de nuestra región.
                    </Parra>
                </DivText>
                <Gif src={gif1}/>
            </DivContent>
            <DivContent2>
                <Gif2 src={gif2}/>
                <DivText2>
                    <Titu2>APOYO INTEGRAL A LA CONSERVACIÓN DE LA VIDA SILVESTRE: <STRONG>RESCATES, ESTUDIOS Y LIBERACIONES.</STRONG></Titu2>
                    <Parra2> 
                    En un esfuerzo por preservar la vida silvestre y su hábitat natural, nuestro equipo se dedica a brindar un apoyo integral tanto a la comunidad local como a nivel provincial. A través de acciones de rescate, estudios veterinarios y liberaciones oportunas, trabajamos incansablemente para asegurar el bienestar y la supervivencia de los animales silvestres.
                    </Parra2>
                </DivText2>
            </DivContent2>
            <DivContent>
                <DivText>
                    <Titu><STRONG>MASCOTISMO, EXPANSIÓN URBANA-AGRÍCOLA Y TRÁFICO ILEGAL:</STRONG> PRINCIPALES AMENAZAS CONTRA LA BIODIVERSIDAD.</Titu>
                    <Parra>
                    El mascotismo, la expansión de la frontera urbana-agrícola y el tráfico ilegal de animales representan los principales focos de conflicto que amenazan nuestra valiosa flora y fauna. En respuesta a estos desafíos, consideramos de vital importancia concientizar y unir esfuerzos para proteger y preservar nuestro hábitat natural. 
                    </Parra>
                </DivText>
                <Gif src={gif3}/>
            </DivContent>
            <DivContent2>
                <Gif2 src={gif4}/>
                <DivText2>
                    <Titu2><STRONG>CUIDANDO DEL PLANETA Y DE LOS NIÑOS:</STRONG> CENTRO DE RESCATE QUE COMBINA CONSERVACIÓN AMBIENTAL Y AYUDA SOCIAL.</Titu2>
                    <Parra2>
                    El centro de rescate desempeña un papel esencial al funcionar como un centro de día para niños y niñas en situaciones de vulnerabilidad. Se busca brindar un apoyo integral a través de actividades educativas, talleres, charlas y servicios de comedor. Además, se compromete en facilitar el acceso a los centros educativos correspondientes. De esta manera, se convierte en un punto de encuentro para el crecimiento y desarrollo de los niños y niñas, proporcionándoles oportunidades educativas para un futuro mejor. 
                    </Parra2>
                </DivText2>
            </DivContent2>
        </BoxCuerpo>
    )
}

export default Presentacion