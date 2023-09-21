import React from 'react';
import {
  ContentContainer,
  DescriptionContainer,
  ImageContainer,
  InfoWrapper,
  LinkIcon,
  LinkIconContainer,
  LinksAndSkillsContainer,
  ProjectContainer,
  ProjectImage,
  ProjectName,
  SkillsContainer,
  SkillIcon
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
    <ProjectContainer reverse={reverse}>
      <ProjectName>{name}</ProjectName>
      <ContentContainer>
        <ImageContainer>
          <ProjectImage src={imageSrc} alt={name} />
        </ImageContainer>
        <DescriptionContainer>
          <p>{description}</p>
        </DescriptionContainer>
      </ContentContainer>

      <LinksAndSkillsContainer>
        {skills && (
          <InfoWrapper>
            <h4>Tech:</h4>
            <SkillsContainer>
              {skills.map((skill, index) => (
                <SkillIcon as={iconMapping[skill.name]} title={skill.name} />
              ))}
            </SkillsContainer>
          </InfoWrapper>
        )}
        {links && (
          <InfoWrapper>
            <h4>Links:</h4>
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

          </InfoWrapper>
        )}
      </LinksAndSkillsContainer>
    </ProjectContainer>
  );
};