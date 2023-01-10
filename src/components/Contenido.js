import { useState } from "react";
import styled from "styled-components";
import AboutMe from "./Aboutme";
import Contacto from "./Contacto";
import Habilidades from "./Habilidades";
import Portafolio from "./portafolio";

const Contenido = () => {
    const [index, setIndex] = useState(1);
    return ( 
        <Main>
            <TabHeading>
                <ContainerItem>
                    <TabItem onClick={() => setIndex(1)} activo={index === 1}>Sobre mi</TabItem>
                    <TabItem onClick={() => setIndex(2)} activo={index === 2}>Habilidades</TabItem>
                    <TabItem onClick={() => setIndex(3)} activo={index === 3}>Portafolio</TabItem>
                    <TabItem onClick={() => setIndex(4)} activo={index === 4}>Contacto</TabItem>
                </ContainerItem>
            </TabHeading>
            <AboutMe index={index}/>
            <Habilidades index={index}/>
            <Portafolio index={index}/>
            <Contacto index={index}/>
        </Main>
     );
}

const Main = styled.main`
    webkit-box-shadow: -1px 4px 5px -1px rgba(0,0,0,0.51);
    -moz-box-shadow: -1px 4px 5px -1px rgba(0,0,0,0.51);
    box-shadow: -1px 4px 5px -1px rgba(0,0,0,0.51);
    margin-top:4.2rem;
    border-radius: 4px;
    overflow: hidden;
`

const TabHeading = styled.div`
    overflow-x: auto;
`

const ContainerItem = styled.div`
    display: flex;
    width: 800px;

    @media screen and (min-width: 900px){
        width: 100%;
    }
`

const TabItem = styled.div`
    flex:1;
    font-size: 1.6rem;
    text-align: center;
    background-color: ${({ activo }) => activo ? '#262626' : '#4A4A4A'} ;
    color:#fff;
    padding-top: 1rem;
    padding-bottom: 1rem;
    cursor: pointer;
    
`
 
export default Contenido;