import styled from "styled-components";
import TitleSection from "./elements/TitleSection";

const Habilidades = () => {
    return ( 
        <HabilidadesContent>
            <TitleSection contenido="Habilidades"/>
            <HabilidadesContenedor>
                <Habilidad>
                    <Imagen title="HTML">
                        <img src="img/html-5.png" alt="" />
                    </Imagen>
                    <HabilidadName>HTML</HabilidadName>
                </Habilidad>

                <Habilidad>
                    <Imagen title="CSS">
                        <img src="img/css-3.png" alt="" />
                    </Imagen>
                    <HabilidadName>CSS</HabilidadName>
                </Habilidad>
                
                <Habilidad>
                    <Imagen title="Javascript">
                        <img src="img/java-script.png" alt="" />
                    </Imagen>
                    <HabilidadName>Javascript</HabilidadName>
                </Habilidad>

                <Habilidad>
                    <Imagen title="SASS">
                        <img src="img/sass.png" alt="" />
                    </Imagen>
                    <HabilidadName>SASS</HabilidadName>
                </Habilidad>
                
                <Habilidad>
                    <Imagen title="Reactjs">
                        <img src="img/physics.png" alt="" />
                    </Imagen>
                    <HabilidadName>ReactJS</HabilidadName>
                </Habilidad>

                <Habilidad>
                    <Imagen title="PHP">
                        <img src="img/php.png" alt="" />
                    </Imagen>
                    <HabilidadName>PHP</HabilidadName>
                </Habilidad>

                <Habilidad>
                    <Imagen title="Firebase">
                        <img src="img/firebase.png" alt="" />
                    </Imagen>
                    <HabilidadName>Firebase</HabilidadName>
                </Habilidad>
                
                <Habilidad>
                    <Imagen title="MySql">
                        <img src="img/mysql.png" alt="" />
                    </Imagen>
                    <HabilidadName>MySql</HabilidadName>
                </Habilidad>
                
                <Habilidad>
                    <Imagen title="Github">
                        <img src="img/github.png" alt="" />
                    </Imagen>
                    <HabilidadName>Github</HabilidadName>
                </Habilidad>
                
                <Habilidad>
                    <Imagen title="Figma">
                        <img src="img/figma.png" alt="" />
                    </Imagen>
                    <HabilidadName>Figma</HabilidadName>
                </Habilidad>
                
                <Habilidad>
                    <Imagen title="Gulp">
                        <img src="img/descarga.png" alt="" />
                    </Imagen>
                    <HabilidadName>Gulp</HabilidadName>
                </Habilidad>
                
                <Habilidad>
                    <Imagen title="Git">
                        <img src="img/git.png" alt="" />
                    </Imagen>
                    <HabilidadName>Gulp</HabilidadName>
                </Habilidad>
            </HabilidadesContenedor>
        </HabilidadesContent>
     );
}

const HabilidadesContent = styled.div`
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
    /* grid-template-columns: repeat(auto-fill, minmax(50px, 1fr)); */
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

const Imagen = styled.div`
    background-color: #EDEDED;
    border-radius: 50%;
    padding:1.5rem;
    cursor: pointer;
    transition: transform .2s;
    &:hover {
        transform: scale(1.1);
    }
    @media screen and (min-width: 800px){
        padding:2.2rem;
    }
`

const Habilidad = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`

const HabilidadName = styled.div`
    font-size: 1.6rem;
    color: #000;
    font-weight: 700;
    margin-top: 1rem;
    opacity: .7;
`
export default Habilidades;