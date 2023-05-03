import { IconType } from 'react-icons';
import { FaJsSquare, FaNodeJs, } from 'react-icons/fa';
import { SiTypescript, SiStyledcomponents, SiReactrouter ,SiExpress, SiMariadb, SiMongodb,  SiFirebase, SiMicrosoftazure, SiTailwindcss } from 'react-icons/si';
import { DiJava, DiPython, DiReact, DiScrum, DiHtml5, DiGithubBadge, DiCss3, } from "react-icons/di";
import { TbSql } from 'react-icons/tb';


export const iconMapping: { [key: string]: IconType } = {
    React: DiReact,
    JavaScript: FaJsSquare,
    TypeScript: SiTypescript,
    HTML5: DiHtml5,
    'React Native': DiReact,
    'Node.js': FaNodeJs,
    Express: SiExpress,
    MongoDB: SiMongodb,
    Firebase: SiFirebase,
    Java: DiJava,
    Python: DiPython,
    Azure: SiMicrosoftazure,
    Git: DiGithubBadge,
    SQL: TbSql,
    Mongoose: SiMongodb,
    Scrum: DiScrum,
    CSS: DiCss3,
    'Tailwind CSS': SiTailwindcss,
    'Styled Components': SiStyledcomponents,
};