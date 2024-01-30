import Prisma from '../assets/icons/prisma-color.svg';
import ReactQuery from '../assets/icons/reactquery-color.svg';

export default function getSkills() {
  return [
    {
      type: "Frontend",
      skills: [
        {
          name: "HTML",
          icon: <i className="devicon-html5-plain colored"></i>,
        },
        {
          name: "CSS",
          icon: <i className="devicon-css3-plain colored"></i>,
        },
        {
          name: "JavaScript",
          icon: <i className="devicon-javascript-plain colored"></i>,
        },
        {
          name: "TypeScript",
          icon: <i className="devicon-typescript-plain colored"></i>,
        },
        {
          name: "React",
          icon: <i className="devicon-react-original colored"></i>,
        },
        {
          name: "Tailwind CSS",
          icon: <i className="devicon-tailwindcss-plain colored"></i>,
        },
        {
          name: "React Query",
          icon: <img height={40} width={40} src={ReactQuery} />,
        },
      ],
    },
    {
      type: "Backend",
      skills: [
        {
          name: "Python",
          icon: <i className="devicon-python-plain colored"></i>,
        },
        {
          name: "Express",
          icon: <i className="devicon-express-original colored"></i>,
        },
        {
          name: "FastAPI",
          icon: <i className="devicon-fastapi-plain colored"></i>,
        },
        {
          name: "Prisma",
          icon: <img height={40} width={40} src={Prisma} />,
        },
        {
          name: "MySQL",
          icon: <i className="devicon-mysql-plain colored"></i>,
        },
        {
          name: "C",
          icon: <i className="devicon-c-plain colored"></i>,
        },
      ],
    },
    {
      type: "Frameworks / Others",
      skills: [
        {
          name: "Next.js",
          icon: <i className="devicon-nextjs-original"></i>,
        },
        {
          name: "Git",
          icon: <i className="devicon-git-plain colored"></i>,
        },
        {
          name: "Linux",
          icon: <i className="devicon-linux-plain"></i>,
        },
      ],
    },
  ];
}
