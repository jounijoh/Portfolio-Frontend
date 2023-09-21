import styled from "styled-components";
import { colors } from '../../global/Colors';

export const ProjectsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 50vh;
`;

export const ProjectContainer = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  margin-bottom: 2rem;
  position: relative;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

// IMAGE
export const ProjectImage = styled.img`
  flex: 1;
  max-height: 300px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 1rem; /* Space between the image and the description */

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  flex: 1;
  max-height: 300px;
  margin-right: 1rem;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -5px;
    right: 10px;
    bottom: 10px;
    background-color: rgba(0,255,255,0.05);
    border-radius: 5px;
    z-index: 0;
    transition: opacity 0.3s;  // Smooth transition for the hover effect
  }

  &:hover::before {
    opacity: 0;  // Make backdrop disappear on hover
  }
`;

// DESCRIPTION
export const DescriptionContainer = styled.div`
  position: relative;
  flex: 1;
  max-height: 300px;
  margin-right: 1rem;
`;

export const ProjectInfo = styled.div`
  flex: 1;
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

export const ProjectName = styled.h3`
  align-self: flex-start;
  font-size: ${({ theme }) => theme.fontSizes.h3};
  color: white;

`;
export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProjectsContent = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${colors.text.lightPurple};
  line-height: 1.5;
`;

// Links and Skills container
export const LinksAndSkillsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;

  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  h4 {
    margin: 0;
  }
`;

// SKILLS
export const SkillIcon = styled.span`
  font-size: 1.5rem;
  transition: color 0.2s;
  color: ${colors.secondary.cyan};

&:hover {
color: ${colors.text.lighterPurple};
}
`;

export const SkillsContainer = styled.div`
 display: flex;
align-items: center;
gap: 1rem;
max-width: 450px;
padding-bottom: 1rem;

@media (max-width: 768px) {
    max-width: 450px;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    gap: 0.5rem;
    overflow-x: auto;  // to scroll if there are too many icons
  }
`;

// LINKS
export const LinkIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const LinkIcon = styled.a`
  font-size: 1.5rem;
  color: ${colors.text.lightPurple};
  transition: color 0.2s;

  &:hover {
color: ${colors.secondary.cyan};
  }
`;