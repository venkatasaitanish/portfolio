import {SiCplusplus, SiJavascript} from "react-icons/si";
import {FaReact, FaHtml5, FaGitAlt, FaNode} from "react-icons/fa";
import {GrMysql} from "react-icons/gr";
import {DiCss3} from "react-icons/di";

const SkillsList = [
    {
        id: 1,
        name: "C++",
        icon: <SiCplusplus size="5.5rem" />
    } ,
    {
        id: 2,
        name: "HTML 5",
        icon: <FaHtml5 size="5.5rem" />
    } ,
    {
        id: 3,
        name: "CSS",
        icon: <DiCss3 size="5.5rem" />
    } ,
    {
        id: 4,
        name: "Javascript",
        icon: <SiJavascript size="5.5rem" />
    } ,
    {
        id: 5,
        name: "MySQL",
        icon: <GrMysql size="5.5rem" />
    } ,
    {
        id: 6,
        name: "Node JS",
        icon: <FaNode size="5.5rem" />
    } ,
    {
        id: 7,
        name: "React JS",
        icon: <FaReact size="5.5rem" />
    } ,
    {
        id: 8,
        name: "Git",
        icon: <FaGitAlt size="5.5rem" />
    }
]

export default SkillsList;