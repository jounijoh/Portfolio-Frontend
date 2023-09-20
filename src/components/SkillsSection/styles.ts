import styled from 'styled-components';
import { colors } from '../../global/Colors';


export const SkillSection = styled.section`
  min-height: 50vh;
`;

export const SectionTitle = styled.h2`
font-size: ${({ theme }) => theme.fontSizes.h2};
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

export const CategorySection = styled.section`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1px;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.secondary.veryDarkBlue};
  padding: 0.6rem;
  border-radius: 10px;
  border: 1px solid ${colors.secondary.lightGray};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  margin-bottom: 1.5rem;
  margin-right: 2rem;

  @media (max-width: 768px) {
    padding: 0.1rem;
   max-width: 90%;
   text-align: center;
   margin-right: 0rem;
  }
`;
export const CategoryTitle = styled.h3`
  font-size: 1rem;
  margin-right: 2rem;
  color: ${colors.text.lighterPurple};
`;

export const SkillsContainer = styled.div`
  display: flex;
  width: auto;
  flex-direction: column;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    width: auto;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

export const Skill = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 20px;
  margin: 0.1rem;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 5px ${colors.secondary.lightGray};
  }

  @media (max-width: 768px) {
    align-items: center;
    padding: 0;
  }
`;

export const SkillIcon = styled.span`
  font-size: 1.5rem;
  padding: 0.5rem;
  color: ${colors.secondary.cyan};
`;

export const SkillName = styled.span`
  font-size: 0.9rem;
  color: ${colors.text.lightPurple};
  margin-right: 0rem;
  //hidden on mobile
  @media (max-width: 768px) {
    display: none;
  }
`;
export const SkillDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;
export const SkillDescription = styled.span`
  font-size: 0.9rem;
  color: ${colors.text.gray};
  margin-left: 0.5rem;
  
`;

export const SkillsContent = styled.p`
  font-size: clamp(14px, 1.5vw, 16px);
  line-height: 0.1rem;
  color: ${colors.text.lightPurple};
`;