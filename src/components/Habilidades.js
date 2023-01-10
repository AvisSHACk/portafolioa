import styled from "styled-components";

const Habilidades = ({index}) => {
    return ( 
        <HabilidadesContent hidden={index !== 2}>
            <Titulo>Habilidades</Titulo>
            <HabilidadesContenedor>
                <Habilidad title="HTML">
                    <img src="img/html-5.png" alt="" />
                </Habilidad>

                <Habilidad title="CSS">
                    <img src="img/css-3.png" alt="" />
                </Habilidad>

                <Habilidad title="Javascript">
                    <img src="img/java-script.png" alt="" />
                </Habilidad>

                <Habilidad title="SASS">
                    <img src="img/sass.png" alt="" />
                </Habilidad>

                <Habilidad title="Reactjs">
                    <img src="img/physics.png" alt="" />
                </Habilidad>

                <Habilidad title="PHP">
                    <img src="img/php.png" alt="" />
                </Habilidad>

                <Habilidad title="Firebase">
                    <img src="img/firebase.png" alt="" />
                </Habilidad>

                <Habilidad title="MySql">
                    <img src="img/mysql.png" alt="" />
                </Habilidad>

                <Habilidad title="Github">
                    <img src="img/github.png" alt="" />
                </Habilidad>

                <Habilidad title="Figma">
                    <img src="img/figma.png" alt="" />
                </Habilidad>

                <Habilidad title="Gulp">
                    <img src="img/descarga.png" alt="" />
                </Habilidad>

                <Habilidad title="Git">
                    <img src="img/git.png" alt="" />
                </Habilidad>
            </HabilidadesContenedor>
        </HabilidadesContent>
     );
}

const HabilidadesContent = styled.div`
    padding: 2.9rem 4.6rem;
`

const Titulo = styled.h3`
    text-align: center;
    font-size: 24px;
`

const HabilidadesContenedor = styled.div`
    margin-top: 2.2rem;
    display: grid;
    /* grid-template-columns: repeat(auto-fill, minmax(50px, 1fr)); */
    grid-template-columns: repeat(2, 1fr);
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

const Habilidad = styled.div`
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
export default Habilidades;