import styled from "styled-components";
import { inter } from '../global/fonts';


export const colors = {
    primary: '#312E81',
    secondary: {
        cyan: '#59fefe',
        lightGray: '#A0A0A0',
        darkGray: '#333333',
        darkBlue: '#1E3A8A',
        veryDarkBlue: '#23232b',
    },
    background: '#222',
    text: {
     white:   '#FFFFFF',
     lightPurple: '#d4d4f4',
     lighterPurple: '#e9e9f8',
     gray: '#b1b1c5',
    }
};

export const CyanWrap = styled.span`
  color: ${colors.secondary.cyan};
  font-weight: ${inter.fontWeight.extraBold};
`;