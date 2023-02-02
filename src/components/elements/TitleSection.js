import styled from "styled-components";
const TitleSection = ({contenido}) => {
    return ( 
        <H3>{contenido}</H3>
     );
}

const H3 = styled.h3`
    font-size: 2.5rem;
    background-color: #FAFAFA;
    z-index: 1;
    padding: 0 1rem;
    position: relative;
    display: table;
    margin-left:auto;
    margin-right: auto;
    margin-bottom: 3rem;
`
 
export default TitleSection;