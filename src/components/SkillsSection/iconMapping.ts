import { IconType } from 'react-icons';
import { FaJsSquare, FaNodeJs, } from 'react-icons/fa';
import { SiTypescript, SiReactrouter,SiExpress, SiMariadb, SiMongodb,  SiFirebase, SiMicrosoftazure } from 'react-icons/si';
import { DiJava, DiPython, DiReact, DiHtml5, DiGithubBadge } from "react-icons/di";
import { TbSql } from 'react-icons/tb';

export type IconMapping = {
    React: IconType;
    JavaScript: IconType;
    TypeScript: IconType;
    HTML5: IconType;
    'React Native': IconType;
    'Node.js': IconType;
    Express: IconType;
    MongoDB: IconType;
    Firebase: IconType;
    Java: IconType;
    SQL: IconType;
};

export const iconMapping: { [key: string]: IconType } & IconMapping = {
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
};