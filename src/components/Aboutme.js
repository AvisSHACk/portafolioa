import styled, { css } from "styled-components";
const AboutMe = ({index}) => {
    return ( 
        <AboutmeContent hidden={index !== 0}>
                <Left className="left">
                    <h3>Quien Soy</h3>
                    <p>
                    Hola, soy recientemente egresado en la carrera técnica de Ingeniería de Software con IA en ETI SENATi, actualmente tengo 24 años y estoy buscando mi primer empleo, tengo experiencia en la I.E. Santa Magdalena sofia Barat ubicada en la ciudad de Chiclayo/Lambayeque donde desarrolle una biblioteca virtual para uso de todas las personas relacionadas a la institución.
                    Me considero bastante responsable, competente y siempre estoy tratando de dar lo mejor de mí en cualquier reto que se me proponga.
                    Tengo conocimientos en HTML, CSS, SASS, JAVASCRIPT, REACTJS, FIREBASE, PHP, MYSQL, GIT, GITHUB, FIGMA, Gulp.
                    </p>
                </Left>

                <div className="right">
                    <Cv href="/">Descargar CV</Cv>
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
    margin: auto;
    
    @media screen and (min-width: 900px){
        margin: 0;
        width: 150px;
        height: 150px;
        line-height: 150px;
        margin-right: 10rem;
    }
`
 
export default AboutMe;