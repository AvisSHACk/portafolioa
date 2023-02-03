import { motion } from "framer-motion";
import styled, { css } from "styled-components";

const Header = () => {
    return ( 
        <HeaderContainer className='Header' as={motion.header} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Profile src="img/profile.png" alt="" />
            <HeaderInfo className="Header__info">
                <Nombre className='Header__name'>Hola, soy Anthony Serquén</Nombre>
                <Profession className='Header__h3'>Ing° Tecnico de software</Profession>
                <ButtonsContainer>
                    <Button href="https://github.com/avisshack" target="_blank" github>
                        Github
                    </Button>
                    <Button href="https://www.linkedin.com/in/anthony-serqu%C3%A9n/" target="_blank" linkedin>
                        Linkedin
                    </Button>
                </ButtonsContainer>
            </HeaderInfo>
        </HeaderContainer>
     );
}

const HeaderContainer = styled(motion.header)`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 600px){
        width: 100%;
        justify-content: center;
        flex-direction: row;
    }
`;

const HeaderInfo = styled.div`

    @media screen and (min-width: 600px){
        margin-left: 3.5rem;
    }
`;

const Profile = styled.img`
    width: 100px;
    height: 100px;

    @media screen and (min-width: 600px){
        width: 180px;
        height: 180px;
    }
`

const Nombre = styled.h1`
    font-size: 2rem;
    text-align: center;
    margin-top: .8rem;
    margin-bottom: .8rem;
    @media screen and (min-width: 600px){
        text-align: left;
        margin-top: 0;
    }
`

const Profession = styled.h3`
    font-size: 1.5rem;
    text-align: center;
    color: #797979;
    margin-bottom: .8rem;

    @media screen and (min-width: 600px){
        text-align: left;
    }
`

const Button = styled.a`
    font-size: 1.6rem;
    text-align: center;
    border-radius: 4px;
    padding:.1rem 2.5rem;
    margin-right: .9rem;
    color: #fff;
    border: 0;
    text-decoration: none;

    ${({github}) => github && css`
        background:#333333;
    `}
    ${({linkedin}) => linkedin && css`
        background:#0077B5;
    `}
`

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (min-width: 600px){
        justify-content: flex-start;
    }
`
 
export default Header;