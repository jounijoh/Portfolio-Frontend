import styled from "styled-components";
import { colors } from '../../global/Colors';

export const ProjectsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem;
`;

export const ProjectContainer = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

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

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const ProjectsTitle = styled.h2`
  font-size: clamp(20px, 4vw, 44px);
  margin-bottom: 1rem;
  margin-top: 4rem;
`;


export const ProjectsContent = styled.p`
  font-size: clamp(14px, 1.5vw, 18px);
  line-height: 1.5;
`;