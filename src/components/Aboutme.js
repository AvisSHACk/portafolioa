import styled, { css } from "styled-components";
const AboutMe = ({index}) => {
    return ( 
        <AboutmeContent hidden={index !== 1}>
                <Left className="left">
                    <Titulo>Quien Soy</Titulo>
                    <Descripcion>
                        Hola, soy recientemente egresado en la carrera técnica de Ingeniería de Software con IA en ETI SENATi, actualmente tengo 24 años.
                        <br/>
                        <br/>
                        Tengo experiencia en la I.E. Santa Magdalena sofia Barat ubicada en la ciudad de Chiclayo/Lambayeque donde participe en el desarrollo de una biblioteca virtual.
                        <br/>
                        <br/>
                        Me considero bastante responsable, competente y siempre estoy tratando de dar lo mejor de mí en cualquier reto que se me proponga.
                    </Descripcion>
                </Left>

                <div className="right">
                    <Cv href="https://drive.google.com/file/d/1stSF4NayszDg_Mluiyd49jnAWB0BvSIh/view?usp=share_link" target="_blank">Revisar CV</Cv>
                </div>
            </AboutmeContent>
     );
}

const AboutmeContent = styled.div`
    padding: 2rem 3rem;
    display: flex;
    flex-direction: column;
    font-size:1.6rem;
    @media screen and (min-width: 900px){
        padding: 3.4rem 4.4rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    ${({hidden}) => hidden && css`
        display:none;
    `}

`;

const Left = styled.div`
    text-align: center;
    @media screen and (min-width: 900px){
        width: 48%;
        text-align: left;
    }
`;

const Titulo = styled.h3`
    margin-bottom: 1rem;
    font-size: 2.5rem;
`

const Descripcion = styled.p`
    line-height: 1.4;
`

const Cv = styled.a`
    display: block;
    width: 100px;
    height: 100px;
    background-color: #333333;
    text-align: center;
    line-height: 100px;
    border-radius: 50%;
    color: #fff;
    text-decoration: none;
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: 900px){
        margin: 0;
        width: 150px;
        height: 150px;
        line-height: 150px;
        margin-right: 8rem;
    }
`
 
export default AboutMe;