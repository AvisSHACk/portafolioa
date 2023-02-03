import { motion } from "framer-motion";
import styled from "styled-components";
import DatosAdicionales from "./elements/DatosAdicionales";
import TitleSection from "./elements/TitleSection";
const Portafolio = () => {
    return ( 
        <PortafolioCntent as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <TitleSection contenido="Portafolio"/>
            <PortafolioContenedor>
                <Proyecto>
                    <Linker href="https://app-anime-b2601.firebaseapp.com" target="_blank" rel="noreferrer">
                        <img src="img/portafolio1.png" alt="" />
                        <Mask>
                            <TituloProyecto>TheAnimeDatabase</TituloProyecto>
                            <Tec>REACT</Tec>
                            <Tec>fIREBASE</Tec>
                        </Mask>
                    </Linker>
                    <DatosAdicionales correo={'correo@correo'} contraseña={'naruto96'}/>
                </Proyecto>
                <Proyecto>
                    <Linker href="http://bibliotecasofia.byethost10.com/login" rel="noreferrer" target="_blank">
                        <img src="img/portafolio4.png" alt="" />
                        <Mask>
                            <TituloProyecto>Biblioteca virtual</TituloProyecto>
                            <Tec>HTML</Tec>
                            <Tec>CSS</Tec>
                            <Tec>JS</Tec>
                            <Tec>PHP</Tec>
                            <Tec>MySql</Tec>
                        </Mask>
                    </Linker>
                    <DatosAdicionales correo={'admin@iesofia.edu.pe'} contraseña={'1234'}/>
                </Proyecto>
            </PortafolioContenedor>
        </PortafolioCntent>
     );
}



const PortafolioCntent = styled(motion.div)`
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

const PortafolioContenedor = styled.div`
    margin-top: 2.2rem;
    display: grid;
    gap: 1.2rem 0;

    @media screen and (min-width: 600px){
        grid-template-columns: repeat(2, 1fr);
        gap: 1.2rem 2.2rem;
    }
`



const Mask = styled.div`
    position: absolute;
    top: 0;
    opacity: 0;
    color: #fff;
    background: hsla(0, 0%, 15%, .8);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content:center;
    transition: opacity .3s;
`

const Proyecto = styled.article`
`

const Linker = styled.a`
    position: relative;

    &:hover ${Mask} {
        opacity: 1;
    }
`

const TituloProyecto = styled.h4`
    text-align: center;
    width: 100%;
    font-size: 1.7rem;
    margin-bottom: .5rem;
`

const Tec = styled.span`
    padding: .2rem .5rem;
    background-color: #0077B5;
    margin-right: .5rem;
    border-radius: 4px;
    font-size:1.4rem;
    margin-bottom: .4rem;
`


 
export default Portafolio;