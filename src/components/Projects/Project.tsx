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
  LinksWrapper
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
  return (
    <ProjectContainer>
      <ProjectName>{name}</ProjectName>
      <ContentContainer reverse={reverse}>
        <ImageContainer>
          <ProjectImage src={imageSrc} alt={name} />
        </ImageContainer>
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