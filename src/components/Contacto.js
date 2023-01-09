import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import styled from "styled-components";

const Contacto = ({index}) => {
    const form = useRef();
    const [nombre, setNombre] = useState();
    const [apellidos, setApellidos] = useState();
    const [correo, setCorreo] = useState();
    const [mensaje, setMensaje] = useState();

    const enviar = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_y8v8e7c', 'template_soo6e7h', form.current, 'yVNkR7zhi44nL8Vny').then(res => {
            console.log("formulario enviado");
            console.log(res);
        });
    }
    return ( 
        <ContactoContenedor hidden={index !== 4}>
            <Titulo>Contacto</Titulo>
            <Formulario ref={form} onSubmit={enviar}>
                <Input 
                    type="text" 
                    name="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.value)}
                    placeholder="Nombres"
                />

                <Input 
                    type="text" 
                    name="apellidos"
                    value={apellidos}
                    onChange={(e) => setApellidos(e.value)}
                    placeholder="Apellidos"
                />

                <Input 
                    type="text" 
                    name="correo"
                    value={correo}
                    onChange={(e) => setCorreo(e.value)}
                    placeholder="Correo"
                />

                <Input 
                    as="textarea"
                    type="text" 
                    name="mensaje"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.value)}
                    placeholder="Mensaje"
                    rows="10" 
                    cols="50"
                ></Input>

                <Button as="button">Enviar</Button>
            </Formulario>
        </ContactoContenedor>
     );
}

const ContactoContenedor = styled.div`
    padding:2.9rem 2.8rem;

    @media screen and (min-width: 700px){
        padding:2.8rem 18rem;
    }
`

const Titulo = styled.h3`
    text-align: center;
    font-size: 24px;
`

const Formulario = styled.form`
    margin-top: 2.2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Input = styled.input`
    padding: 1.8rem 1.4rem;
    background-color: #E0E0E0;
    border: 0;
    margin-bottom: 1.4rem;
    border-radius: 8px;
    width: 100%;
    @media screen and (min-width: 500px){
        &:nth-child(1), &:nth-child(2) {
            width: 49%;
        }
    }
`
const Button = styled(Input)`
    background-color: #262626;
    color: #fff;
    cursor: pointer;
`
export default Contacto;