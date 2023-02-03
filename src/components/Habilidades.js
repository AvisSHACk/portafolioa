import styled from "styled-components";
import TitleSection from "./elements/TitleSection";
import HabilidadElement from "./elements/Habilidad";
import { useState } from "react";
import { motion } from "framer-motion";

const Habilidades = () => {

    const [HabilidadesArray] = useState([
        {
            name: 'HTML',
            img: 'img/html-5.png',
        },

        {
            name: 'CSS',
            img: 'img/css-3.png',
        },

        {
            name: 'JavaScript',
            img: 'img/java-script.png',
        },

        {
            name: 'SASS',
            img: 'img/sass.png',
        },

        {
            name: 'ReactJS',
            img: 'img/physics.png',
        },

        {
            name: 'PHP',
            img: 'img/php.png',
        },
        
        {
            name: 'Firebase',
            img: 'img/firebase.png',
        },

        {
            name: 'Mysql',
            img: 'img/MySql.png',
        },

        {
            name: 'Github',
            img: 'img/github.png',
        },

        {
            name: 'Figma',
            img: 'img/figma.png',
        },

        {
            name: 'Gulp',
            img: 'img/descarga.png',
        },

        {
            name: 'Git',
            img: 'img/git.png',
        },

        
    ]);
    return ( 
        <HabilidadesContent as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <TitleSection contenido="Habilidades"/>
            <HabilidadesContenedor>
                {HabilidadesArray.map((habilidad, i) => {
                    return <HabilidadElement key={i} habilidad={habilidad}/>
                })}
            </HabilidadesContenedor>
        </HabilidadesContent>
     );
}

const HabilidadesContent = styled(motion.div)`
    position: relative;
    margin-bottom: 6rem;
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
`

const HabilidadesContenedor = styled.div`
    margin-top: 2.2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3.3rem 1.8rem ;

    @media screen and (min-width: 450px){
        grid-template-columns: repeat(4, 1fr);
    }

    @media screen and (min-width: 600px){
        grid-template-columns: repeat(5, 1fr);
    }

    @media screen and (min-width: 800px){
        grid-template-columns: repeat(6, 1fr);
    }
`
export default Habilidades;