
export interface SkillType {
    _id: string;
    name: string;
    description: string;
    iconComponent?: React.ElementType;
  }
  
  export interface CategoryType {
    _id: string;
    category: string;
    skills: SkillType[];
  }

 export interface AboutType {
    _id: string;
    contentType: string;
    context: string;
    position: number;
  }

  export interface ProjectType {
    _id: string;
    name: string;
    description: string;
    skills: SkillType[];
    imageSrc?: string;
    links: { title?: string; url?: string }[];
    reverse?: boolean;
  }