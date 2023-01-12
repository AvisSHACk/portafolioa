import styled from "styled-components";
const Portafolio = ({index}) => {
    return ( 
        <PortafolioCntent hidden={index !== 3}>
            <Titulo>Portafolio</Titulo>
            <PortafolioContenedor>
                <Proyecto>
                    <a href="https://app-anime-b2601.firebaseapp.com" target="_blank" rel="noreferrer">
                        <img src="img/portafolio1.png" alt="" />
                        <Mask>
                            <TituloProyecto>TheAnimeDatabase</TituloProyecto>
                            {/* <ContenedorTec> */}
                                <Tec>REACT</Tec>
                                <Tec>fIREBASE</Tec>
                                {/* <DatosAdicionales>
                                    Datos de ingreso
                                    <p>correo: correo@correo.com</p>
                                    <p>contraseña: naruto96</p>
                                </DatosAdicionales> */}
                            {/* </ContenedorTec> */}
                        </Mask>
                    </a>
                </Proyecto>
                <Proyecto>
                    <a href="/">
                        <img src="img/portafolio3.png" alt="" />
                        <Mask>
                            <TituloProyecto>App Lista de tareas</TituloProyecto>
                            {/* <ContenedorTec> */}
                                <Tec>REACT</Tec>
                                <Tec>FIREBASE</Tec>
                            {/* </ContenedorTec> */}
                        </Mask>
                    </a>
                </Proyecto>
            </PortafolioContenedor>
        </PortafolioCntent>
     );
}

const Titulo = styled.h3`
    text-align: center;
    font-size: 24px;
`

const PortafolioCntent = styled.div`
    padding:2.9rem 2.8rem;
    @media screen and (min-width: 400px){
        padding:2.9rem 5rem;
    }

    @media screen and (min-width: 600px){
        padding:2.9rem 2.8rem;
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

    /* @media screen and (min-width: 700px){
        grid-template-columns: repeat(3, 1fr);
    } */
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

// const DatosAdicionales = styled.div`
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     font-size: 1.6rem;
// `
 
export default Portafolio;