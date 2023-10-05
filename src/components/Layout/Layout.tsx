import React from 'react';
import { LayoutContainer, MainContent, AnimatedSection, } from './styles';
import { SidebarComponent } from '../SideBar/SideBar';
import { Navbar } from '../Navbar/Navbar';
import Homepage from '../Homepage/Homepage';
import AboutMe from '../AboutMe/AboutMe';
import { SkillsSection } from '../SkillsSection/SkillsSection';
import { useInView } from 'react-intersection-observer';
import { ProjectsSection } from '../Projects/Projects';
import { ContactSection } from '../Contact/Contact';
import { AboutType } from '../../types';

interface LayoutProps {
  children: React.ReactNode;
  aboutData: AboutType[];
}

export const Layout: React.FC<LayoutProps> = ({ children, aboutData }) => {
  const [homepageRef, homepageInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.7, triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.5, triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.07, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <LayoutContainer id="homepage">
      <Navbar />
      <SidebarComponent />
      <MainContent >

        <AnimatedSection id="homepage" ref={homepageRef} inView={homepageInView}>
          <Homepage />
        </AnimatedSection>

        <AnimatedSection id="about" ref={aboutRef} inView={aboutInView}>
          <AboutMe data={aboutData} />
        </AnimatedSection>

        <AnimatedSection id="skills" ref={skillsRef} inView={skillsInView}>
          <SkillsSection />
        </AnimatedSection>

        <AnimatedSection id="projects" ref={projectsRef} inView={projectsInView}>
          <ProjectsSection />
        </AnimatedSection>

        <AnimatedSection id="contact" ref={contactRef} inView={contactInView}>
          <ContactSection />
        </AnimatedSection>
      </MainContent>
    </LayoutContainer>

  );
};
