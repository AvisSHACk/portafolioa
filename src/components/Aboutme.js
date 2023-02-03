import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import TitleSection from "./elements/TitleSection";
const AboutMe = () => {
    return ( 
        <AboutmeContent as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <TitleSection contenido="Sobre mi"/>
            <Descripcion>
                Hola, soy recientemente egresado en la carrera técnica de Ingeniería de Software con IA en ETI SENATi.
                <br/>
                <br/>
                Tengo experiencia en la I.E. Santa Magdalena sofia Barat ubicada en la ciudad de Chiclayo/Lambayeque donde participé en el desarrollo de una biblioteca virtual.
                <br/>
                <br/>
                Me considero bastante responsable, competente y siempre estoy tratando de dar lo mejor de mí en cualquier reto que se me proponga.
            </Descripcion>
            <Cv href="https://drive.google.com/file/d/1stSF4NayszDg_Mluiyd49jnAWB0BvSIh/view?usp=share_link" target="_blank">Revisar CV</Cv>
        </AboutmeContent>
     );
}

const AboutmeContent = styled(motion.div)`
    margin: 6rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size:1.6rem;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 1.40rem;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333333;
        opacity: .4;
    }

    
    @media screen and (min-width: 900px){
        /* padding: 3.4rem 4.4rem; */
    }
    ${({hidden}) => hidden && css`
        display:none;
    `}

`;

// const Left = styled.div`
//     text-align: center;
//     @media screen and (min-width: 900px){
//         width: 48%;
//         text-align: left;
//     }
// `;

const Descripcion = styled.p`
    line-height: 1.4;
    text-align: center;
`

const Cv = styled.a`
    background-color: #333333;
    display: inline-block;
    border-radius: 9px;
    color: #fff;
    text-decoration: none;
    margin-top: 2rem;
    padding:2rem 4rem;
`
 
export default AboutMe;