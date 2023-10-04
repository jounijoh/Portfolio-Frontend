import React, { useEffect, useState } from 'react';
import {
  Button,
  ProjectsContent,
  ProjectsSectionContainer,
  ProjectsTitle,
} from './styles';
import { Project } from './Project';
import { CyanWrap } from '../../global/Colors';
import axios from 'axios';
import { ProjectType } from '../../types';


export const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    const fetchContext = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_VERCEL_FETCH_URL}/projects`);
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching content for about section:', error);
      }
    };

    fetchContext();
  }, []);

  const handleButtonClick = () => {
    window.location.href = "https://github.com/jounijoh";
  };

  return (
    <ProjectsSectionContainer>
      <ProjectsTitle>
        My Projects<CyanWrap>.</CyanWrap>
      </ProjectsTitle>
      <>
        <ProjectsContent>
          Some projects I have worked on
        </ProjectsContent>
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
      </>
      <Button onClick={handleButtonClick}>See more projects in my GitHub</Button>
    </ProjectsSectionContainer>
  );
};