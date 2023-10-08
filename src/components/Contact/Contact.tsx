import React from 'react';
import { ContactTitle, ContactContainer, ContactContent, Button, ButtonsContainer, SocialMediaIcons } from './styles';
import { CyanWrap } from '../../global/Colors';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { downloadResume } from '../downloadResume';


export const ContactSection: React.FC = () => {

    return (
        <ContactContainer>
            <ContactTitle>Contact<CyanWrap>.</CyanWrap></ContactTitle>
            <ContactContent>
                I am currently looking for Internship, Trainee or Junior position. If you have any questions or want to contact me, please feel free to send me an email!
            </ContactContent>
            <ButtonsContainer>
                <Button as="a" href="mailto:jouni.johansson@hotmail.com">
                    Say Hello
                </Button>
                <Button onClick={downloadResume}>
                    Resume
                </Button>
            </ButtonsContainer>
            <SocialMediaIcons>
                <a href="https://www.linkedin.com/in/JouniJohansson" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/jounijoh" target="_blank" rel="noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://www.github.com/jounijoh" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
            </SocialMediaIcons>
        </ContactContainer>
    );
};