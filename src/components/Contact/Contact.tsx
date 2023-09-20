import React from 'react';
import { ContactTitle, ContactContainer, ContactContent, Button, ButtonsContainer } from './styles';
import { CyanWrap } from '../../global/Colors';

export const ContactSection: React.FC = () => {

    const downloadResume = () => {
        window.open('/resume_jouni_johansson.pdf', '_blank');
    };

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
        </ContactContainer>
    );
};