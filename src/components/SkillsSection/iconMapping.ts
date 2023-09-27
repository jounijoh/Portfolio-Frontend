import { IconType } from 'react-icons';
import { FaJsSquare, FaNodeJs, FaExternalLinkAlt } from 'react-icons/fa';
import {
    SiTypescript,
    SiStyledcomponents,
    SiExpress,
    SiMongodb,
    SiFirebase,
    SiMicrosoftazure,
    SiTailwindcss,
    SiDocker,
    SiSocketdotio,
    SiOpenai,
    SiMui,
}
    from 'react-icons/si';
import { DiJava, DiPython, DiReact, DiScrum, DiHtml5, DiGithubBadge, DiCss3, } from "react-icons/di";
import { TbSql, TbBrandNextjs, TbApi } from 'react-icons/tb';
import { FiGithub } from 'react-icons/fi';

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
    Link: FaExternalLinkAlt,
    GitHubLink: FiGithub,
    Docker: SiDocker,
    'Socket.IO': SiSocketdotio,
    'OpenAI': SiOpenai,
    'Next.js': TbBrandNextjs,
    'Material UI': SiMui,
    'REST API': TbApi,
};