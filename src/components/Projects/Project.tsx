import React from 'react';
import { ProjectContainer, ProjectImage, ProjectInfo } from './styles';
import { SkillType } from '../../types';

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
            <h4>Skills:</h4>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill.name}</li>
              ))}
            </ul>
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