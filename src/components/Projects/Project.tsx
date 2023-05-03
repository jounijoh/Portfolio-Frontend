import React from 'react';
import { ProjectContainer, ProjectImage, ProjectInfo } from './styles';
import { SkillType } from '../../types';
import { SkillIcon } from '../SkillsSection/styles';
import { SkillsContainer } from './styles';
import { iconMapping } from '../SkillsSection/iconMapping';

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
      <ProjectImage src={imageSrc} alt={name} />
      <ProjectInfo>
        <h3>{name}</h3>
        <p>{description}</p>
        {skills && (
          <>
            <h4>Technologies used:</h4>
            <SkillsContainer>
              {skills.map((skill, index) => (
                <SkillIcon as={iconMapping[skill.name]} title={skill.name} />
              ))}
            </SkillsContainer>
          </>
        )}
        {links && (
          <>
            <h4>Links:</h4>
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  {link.title ? (
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.title}
                    </a>
                  ) : (
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.url}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}
      </ProjectInfo>
    </ProjectContainer>
  );
};