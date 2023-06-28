import React from "react";
import styled from "styled-components";
import { Carousel } from 'antd';
import foto from "../../../assest/cuatro.jpg";
import fotodos from "../../../assest/imgdivvv.png";

const DivImg = styled.div`
    display: flex;
    margin: 4rem 0;
    width: 100%;
    height: 30rem;
    background-color: #D6D582;
`

const Imagenes = () => {
    return(
        <DivImg>
            {/* <Carousel autoplay>
                <div>
                <img src={foto}/>
                </div>
                <div>
                <img src={fotodos}/>
                </div>
            </Carousel> */}
        </DivImg>
    )
}

export default Imagenes