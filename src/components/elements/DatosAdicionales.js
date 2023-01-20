import styled from "styled-components";

const DatosAdicionales = ({correo, contraseña}) => {
    return ( 
        <DatosAdicionalesElement>
            <h4>Datos de ingreso</h4> 
            <p><b>Correo:</b> {correo}</p>
            <p><b>Contraseña:</b> {contraseña}</p>
        </DatosAdicionalesElement>
     );
}

const DatosAdicionalesElement = styled.div`
    margin-top: 1rem;
    width: 100%;
    font-size: 1.6rem;
`
 
export default DatosAdicionales;