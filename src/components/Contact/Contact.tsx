import React from 'react';
import { ContactTitle, ContactContainer, ContactContent, MailButton } from './styles';
import { CyanWrap } from '../../global/Colors';

export const ContactSection: React.FC = () => {

    return (
        <ContactContainer>
            <ContactTitle>Contact<CyanWrap>.</CyanWrap></ContactTitle>
            <ContactContent>
                I am currently looking for Internship, Trainee or Junior position. If you have any questions or want to contact me, please feel free to send me an email!
                </ContactContent>
                <MailButton as="a" href="mailto:jouni.johansson@hotmail.com">
                  Say Hello
                </MailButton>
        </ContactContainer>
    );
};