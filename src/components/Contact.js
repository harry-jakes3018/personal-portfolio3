import { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

function Contact() {
    const form = useRef();
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_6fltq9t",
                "template_keng50m",
                form.current,
                "I-9I236o1JBUU8M8s"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <Wrapper>
            {/* Left Side */}
            <Left>
                <Awesome>
                    <span>Get in Touch</span>
                    <span>Contact Me</span>
                    <LBlur1></LBlur1>
                </Awesome>
            </Left>

            {/* Right */}
            <Right>
                <Form ref={form} onSubmit={sendEmail}>
                    <User type="text" name="from_name" placeholder="Name" />
                    <User type="email" name="from_email" placeholder="Email" />
                    <TextArea name="message" placeholder="Message" />
                    <Button type="submit">Send</Button>
                    <span>{done && "Thanks for contacting me!"}</span>
                    <RBlur1></RBlur1>
                </Form>
            </Right>
        </Wrapper>
    );
}

export default Contact;

const Wrapper = styled.div`
    padding: 0 3rem 0 3rem;
    display: flex;
    height: 80vh;
    margin-top: 4rem;
`;

const Left = styled.div``;

const Awesome = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    & > :first-child,
    & > :nth-child(2) {
        color: var(--black);
        font-size: 2.5rem;
        font-weight: bold;
    }

    & > :nth-child(2) {
        color: var(--orange);
    }

    & > :nth-child(3) {
        color: var(--gray);
        font-size: 14px;
        margin-top: 1rem;
    }
`;

const LBlur1 = styled.div`
    background: skyblue;
    position: absolute;
    width: 22rem;
    height: 14rem;
    border-radius: 50%;
    filter: blur(92px);
    z-index: -9;
    left: -20rem;
    top: 12rem;
`;

const Right = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    flex: 1;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
`;

const User = styled.input`
    width: 20rem;
    height: 2rem;
    padding: 0.3em;
    outline: none;
    border: 2px solid var(--orange);
    border-radius: 8px;
    font-size: 16px;
`;

const TextArea = styled.textarea`
    height: 4rem !important;
    width: 20rem;
    padding: 0.3em;
    outline: none;
    border: 2px solid var(--orange);
    border-radius: 8px;
    font-size: 16px;
`;

const Button = styled.button``;

const RBlur1 = styled(LBlur1)`
    background: var(--purple);
    top: 1rem;
    left: 8rem;
`;
