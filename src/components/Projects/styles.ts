import styled from "styled-components";
import { colors } from '../../global/Colors';

export const ProjectsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  min-height: 50vh;
`;

export const ProjectContainer = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  width: 70%;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ProjectImage = styled.img`
  width: 45%;
  max-height: 250px;
  object-fit: cover;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const ProjectInfo = styled.div`
  width: 50%;
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${colors.text.lightPurple};
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const ProjectsTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  margin-bottom: 1rem;
  margin-top: 4rem;
`;


export const ProjectsContent = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${colors.text.lightPurple};
  line-height: 1.5;
`;

export const SkillIcon = styled.span`
  font-size: 1.5rem;
  padding: 0.5rem;
  //margin-right: 0.5rem;
`;

export const SkillsContainer = styled.div`
  display: flex;
  width: auto;
  flex-direction: row;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
 
  }
`;