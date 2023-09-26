import styled from "styled-components";
import { colors } from '../../global/Colors';

export const ProjectsSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 50vh;
  width: 100%;
  margin: 0 auto; 
  margin-bottom: 10rem;
 
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 100%;
  margin-bottom: 4rem;
;

  @media (max-width: 768px) {
    text-align: center;
  }

`;
export const ContentContainer = styled.div<{ reverse?: boolean }> `
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProjectsContent = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${colors.text.lightPurple};
  line-height: 1.5;
`;

// IMAGE
export const ProjectImage = styled.img`
  flex: 1;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 1rem; /* Space between the image and the description */

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

export const ImageContainer = styled.a`
  position: relative;
  flex: 1;
  width: 50%;
  margin-right: 1rem;
  border-radius: 5px;

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(0,255,255,0.05);
    border-radius: 5px;
    z-index: 0;
    transition: opacity 0.3s;  // Smooth transition for the hover effect
  }

  &:hover::before {
    opacity: 0;  // Make backdrop disappear on hover
  }
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%; // Ensure the image can take full width on smaller screens
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

export const StyledImageLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: inherit;
  max-width: 50%;
`;

// DESCRIPTION
export const DescriptionContainer = styled.div`
  position: relative;
  flex: 1;
  margin-right: 1rem;
  border-radius: 5px;
  background-color: rgba(225,48,108,0.07);

  & > p {
    margin: 15px; // Adjust the margin as per your needs
  }

  @media (max-width: 768px) {
    background-color: rgba(0,255,255,0.05);
    width: 100%;
    max-width: 100%; // Ensure the image can take full width on smaller screens
    margin-right: 0;
  }
`;

export const ProjectsTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  margin-bottom: 1rem;
  margin-top: 4rem;
`;

export const ProjectName = styled.h3`
  align-self: center;
  font-size: ${({ theme }) => theme.fontSizes.h3};
  color: white;

`;

// Links and Skills container
export const LinksAndSkillsContainer = styled.div<{ reverse?: boolean }>`
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
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

export const TechWrapper = styled.div`
  background-color: rgba(225,48,108,0.07);
  position: relative;
  flex: 1;
  width: 50%;
  margin-right: 1rem;
  border-radius: 5px;

  @media (max-width: 768px) {
    background-color: rgba(0,255,255,0.05);
    width: 100%;
    max-width: 100%; // Ensure the image can take full width on smaller screens
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

export const LinksWrapper = styled.div`
  background-color: rgba(0,255,255,0.05);
  position: relative;
  flex: 1;
  max-width: 50%;
  margin-right: 1rem;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%; // Ensure the image can take full width on smaller screens
    margin-right: 0;
  }
`;

// SKILLS
export const SkillIcon = styled.span`
  font-size: 1.5rem;
  transition: color 0.2s;
  color: ${colors.secondary.cyan};
  vertical-align: middle;
&:hover {
color: ${colors.text.lighterPurple};
}
`;

export const SkillsContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
padding-bottom: 1rem;
width: 100%;

`;

// LINKS
export const LinkIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-bottom: 1rem;
`;

export const LinkIcon = styled.a`
  font-size: 1.2rem;
  color: ${colors.text.lightPurple};
  transition: color 0.2s;

  &:hover {
    color: ${colors.secondary.cyan};
  }
`;

// LOADING SPINNER
export const StyledSpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
`;