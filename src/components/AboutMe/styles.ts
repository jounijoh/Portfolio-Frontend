import styled from 'styled-components';
import { colors } from '../../global/Colors';

export const AboutMeContainer = styled.section`
    min-height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
`;


export const AboutMeTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  margin-bottom: 1rem;
  margin-top: 4rem;
  width: 100%;
`;

export const ContentWithImage = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
`;

export const AboutMeContent = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${colors.text.lightPurple};
  line-height: ${({ theme }) => theme.lineHeights.body};
  flex: 1;
`;

export const ProfileImage = styled.img`
    height: 350px;
    margin: 1.5rem 1rem 1rem 1rem;
    margin-left: 2rem;

    @media (max-width: 767px) {
        display: none;
    }
`;