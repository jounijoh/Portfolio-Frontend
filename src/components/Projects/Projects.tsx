import React, { useEffect, useState } from 'react';
import { ProjectsSectionContainer, ProjectsTitle } from './styles';
import { Project } from './Project';
import { CyanWrap } from '../../global/Colors';
import axios from 'axios';
import { ProjectType } from '../../types';

export const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    const fetchContext = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_FETCH_URL}/projects`);
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching content for about section:', error);
      }
    };

    fetchContext();
  }, []);



  return (
    <ProjectsSectionContainer>
      <ProjectsTitle>
        My Creations<CyanWrap>.</CyanWrap>
      </ProjectsTitle>
      {projects.map((project, index) => (
        <Project
          key={project._id}
          name={project.name}
          description={project.description}
          skills={project.skills}
          imageSrc={project.imageSrc}
          links={project.links}
          reverse={index % 2 !== 0}
        />
      ))}
    </ProjectsSectionContainer>
  );
};