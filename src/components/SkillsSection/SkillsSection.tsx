import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  SkillSection,
  SectionTitle,
  CategoryContainer,
  CategoryTitle,
  SkillsContainer,
  Skill,
  SkillIcon,
  SkillName,
  SkillDescription,
  CategorySection,
  SkillsContent
} from './styles';
import { SkillType, CategoryType } from '../../types';
import { iconMapping } from './iconMapping';
import { CyanWrap } from '../../global/Colors';

export const SkillsSection: React.FC = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [activeSkillId, setActiveSkillId] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
     
      try {
        const response = await axios.get(`${import.meta.env.VITE_VERCEL_FETCH_URL}/skills/groupbycategory`);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    fetchSkills();
  }, []);

  const handleSkillClick = (skillId: string) => {
    setActiveSkillId(skillId === activeSkillId ? null : skillId);
  };


  return (
    <SkillSection>
      <SectionTitle>Skills<CyanWrap>.</CyanWrap></SectionTitle>
      <SkillsContent>What I've learned so far</SkillsContent>
      <CategorySection>
        {categories.map((category) => (
          <CategoryContainer key={category._id}>
            <CategoryTitle>{category._id}</CategoryTitle>
            <SkillsContainer>
              {category.skills.map((skill: SkillType) => (
                <>
                  <Skill
                    key={skill._id}
                    onClick={() => handleSkillClick(skill._id)}
                    isActive={skill._id === activeSkillId}
                  >
                    <SkillIcon as={iconMapping[skill.name]} />
                    <SkillName>{skill.name}</SkillName>

                  </Skill>
                  {skill._id === activeSkillId && (
                    <SkillDescription>{skill.description}</SkillDescription>
                  )}
                </>
              ))}
            </SkillsContainer>
          </CategoryContainer>
        ))}
      </CategorySection>
    </SkillSection>
  );
};
