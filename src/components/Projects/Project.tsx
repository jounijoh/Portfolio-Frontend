import React from 'react';
import {
  ContentContainer,
  DescriptionContainer,
  ImageContainer,
  TechWrapper,
  LinkIcon,
  LinkIconContainer,
  LinksAndSkillsContainer,
  ProjectContainer,
  ProjectImage,
  ProjectName,
  SkillsContainer,
  SkillIcon,
  LinksWrapper,
} from './styles';
import { SkillType } from '../../types';
import { } from './styles';
import { iconMapping } from '../SkillsSection/iconMapping';
import { IconType } from 'react-icons';

interface Link {
  title?: string;
  url?: string;
}


interface ProjectProps {
  name: string;
  description: string;
  skills?: SkillType[];
  imageSrc?: string;
  links?: Link[];
  reverse?: boolean;
}

export const Project: React.FC<ProjectProps> = ({ name, description, skills, imageSrc, links, reverse }) => {

  // Find the external link from the links array
  const externalLink = links?.find(link => link.title === "External link");

  // Find the GitHub link from the links array
  const gitHubLink = links?.find(link => link.title === "GitHub");

  // Conditional rendering of ProjectImage with or without the link
  const RenderedImage = externalLink ? (

    <ImageContainer href={externalLink.url} target="_blank" rel="noopener noreferrer">
      <ProjectImage src={imageSrc} alt={name} />
    </ImageContainer>
  ) : (
    <ImageContainer href={gitHubLink?.url} target="_blank" rel="noopener noreferrer">
      <ProjectImage src={imageSrc} alt={name} />
    </ImageContainer>

  );


  return (
    <ProjectContainer>
      <ProjectName>{name}</ProjectName>
      <ContentContainer reverse={reverse}>
        {RenderedImage}
        <DescriptionContainer>
          <p>{description}</p>
        </DescriptionContainer>
      </ContentContainer>

      <LinksAndSkillsContainer reverse={reverse}>
        {skills && (
          <TechWrapper>
            <p>Tech used:</p>
            <SkillsContainer>
              {skills.map((skill, index) => (
                <SkillIcon as={iconMapping[skill.name]} title={skill.name} />
              ))}
            </SkillsContainer>
          </TechWrapper>
        )}
        {links && (
          <LinksWrapper>
            <p>Links:</p>
            <LinkIconContainer>
              {links.map((link, index) => {
                let IconComponent: IconType | null = null;
                if (link.title === "GitHub") {
                  IconComponent = iconMapping["GitHubLink"];
                } else if (link.title === "External link") {
                  IconComponent = iconMapping["Link"];
                }

                return (
                  <LinkIcon key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                    {IconComponent && <IconComponent title={link.title} />}
                  </LinkIcon>
                );
              })}
            </LinkIconContainer>
          </LinksWrapper>
        )}
      </LinksAndSkillsContainer>
    </ProjectContainer>
  );
};