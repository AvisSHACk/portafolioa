import styled from "styled-components";

const Habilidades = ({index}) => {
    return ( 
        <HabilidadesContent hidden={index !== 1}>
            <Titulo>Habilidades</Titulo>
            <HabilidadesContenedor>
                <Habilidad>
                    <img src="img/html-5.png" alt="" />
                </Habilidad>

                <Habilidad>
                    <img src="img/css-3.png" alt="" />
                </Habilidad>

                <Habilidad>
                    <img src="img/java-script.png" alt="" />
                </Habilidad>

                <Habilidad>
                    <img src="img/sass.png" alt="" />
                </Habilidad>

                <Habilidad>
                    <img src="img/physics.png" alt="" />
                </Habilidad>

                <Habilidad>
                    <img src="img/php.png" alt="" />
                </Habilidad>

                <Habilidad>
                    <img src="img/firebase.png" alt="" />
                </Habilidad>

                <Habilidad>
                    <img src="img/mysql.png" alt="" />
                </Habilidad>

                <Habilidad>
                    <img src="img/github.png" alt="" />
                </Habilidad>

                <Habilidad>
                    <img src="img/figma.png" alt="" />
                </Habilidad>

                <Habilidad>
                    <img src="img/descarga.png" alt="" />
                </Habilidad>

                <Habilidad>
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
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 3.3rem 1.8rem ;

    @media screen and (min-width: 700px){
        grid-template-columns: repeat(6, 100px);
    }
`

const Habilidad = styled.div`
    background-color: #EDEDED;
    border-radius: 50%;
    padding:4rem;
`
export default Habilidades;