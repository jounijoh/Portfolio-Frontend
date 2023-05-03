import React from 'react';
import { LayoutContainer, MainContent, AnimatedSection,  } from './styles';
import { SidebarComponent } from '../SideBar/SideBar';
import { Navbar } from '../Navbar/Navbar';
import Homepage from '../Homepage/Homepage';
import AboutMe from '../AboutMe/AboutMe';
import { SkillsSection } from '../SkillsSection/SkillsSection';
import { useInView } from 'react-intersection-observer';
import { ProjectsSection } from '../Projects/Projects';
import { ContactSection } from '../Contact/Contact';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [homepageRef, homepageInView] = useInView({ threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.5 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.5 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.5 });
  const [contactRef, contactInView] = useInView({ threshold: 0.5 });
  
  return (
    <LayoutContainer id="homepage">
      <Navbar />
      <SidebarComponent />
      <MainContent >

        <AnimatedSection id="homepage" ref={homepageRef} inView={homepageInView}>
          <Homepage />
        </AnimatedSection>
 
        <AnimatedSection id="about" ref={aboutRef} inView={aboutInView}>
          <AboutMe />
        </AnimatedSection>

          <AnimatedSection id="skills" ref={skillsRef} inView={skillsInView}>
            <SkillsSection />
          </AnimatedSection>
        
          <AnimatedSection id="projects" ref={projectsRef} inView={projectsInView}>
        <ProjectsSection/>
        </AnimatedSection>

          <AnimatedSection id="contact" ref={contactRef} inView={contactInView}>
            <ContactSection />
          </AnimatedSection>
      </MainContent>
    </LayoutContainer>

  );
};
