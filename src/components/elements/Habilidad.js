import styled from "styled-components";

const HabilidadElement = ({habilidad}) => {
    return (
        <Habilidad>
            <Imagen title={habilidad.name}>
                <img src={habilidad.img} alt="" />
            </Imagen>
            <HabilidadName>{habilidad.name}</HabilidadName>
        </Habilidad>
    )
}

export default HabilidadElement;

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