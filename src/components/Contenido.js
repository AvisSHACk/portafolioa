import { useState } from "react";
import styled from "styled-components";
import AboutMe from "./Aboutme";
import Habilidades from "./Habilidades";

const Contenido = () => {
    const [index, setIndex] = useState(0);
    return ( 
        <Main>
            <TabHeading>
                <ContainerItem>
                    <TabItem onClick={() => setIndex(0)}>Sobre mi</TabItem>
                    <TabItem onClick={() => setIndex(1)} >Habilidades</TabItem>
                    <TabItem onClick={() => setIndex(2)}>Portafolio</TabItem>
                    <TabItem onClick={() => setIndex(3)}>Contacto</TabItem>
                </ContainerItem>
            </TabHeading>
            <AboutMe index={index}/>

            <Habilidades index={index}/>
        </Main>
     );
}

const Main = styled.main`
    webkit-box-shadow: -1px 4px 5px -1px rgba(0,0,0,0.51);
    -moz-box-shadow: -1px 4px 5px -1px rgba(0,0,0,0.51);
    box-shadow: -1px 4px 5px -1px rgba(0,0,0,0.51);

    margin-top:4.2rem;
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
    background-color: #4A4A4A;
    color:#fff;
    padding-top: 1rem;
    padding-bottom: 1rem;
    cursor: pointer;
`
 
export default Contenido;