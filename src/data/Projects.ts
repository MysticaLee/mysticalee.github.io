import FPGA from '../assets/projects/FPGA.gif';
import LeetNode from '../assets/projects/LeetNode.png';
import Portfolio from '../assets/projects/Portfolio.png';
import RecommenderMicroservice from '../assets/projects/Recommender-Microservice.png';
import STM32 from '../assets/projects/STM32.gif';

export default function getProjects() {
  return [
    {
      id: 1,
      name: "Sound Display & Entertainment (SDE) System",
      description:
        "A hammer game implemented on the FPGA board with the use of a MEMs Microphone and a OLED RGB Display Screen.",
      tech: ["Verilog", "FPGA"],
      repository: "https://github.com/MysticaLee/SoundDisplay",
      url: "",
      src: FPGA,
    },
    {
      id: 2,
      name: "COvid Patients Enhanced Monitoring (COPEMON)",
      description:
        "The system sends data periodically to a server known as CHIP Associated Cloud Unit (CHIPACU), which simulates an Internet of Things (IoT) server, whenever certain conditions are met. This allows us to better monitor the patients, and to show warning signs whenever something abnormal is detected in the patient.",
      tech: ["C", "STM32"],
      repository: "https://github.com/MysticaLee/COPEMON",
      url: "",
      src: STM32,
    },
    {
      id: 3,
      name: "Recommender Microservice",
      description:
        "A backend microservice, built on a core of Bayesian Knowledge Tracing (BKT), wrapped within a REST API, to provide endpoints for the main website to retrieve and process the data. pyBKT is a Python implementation of BKT, a machine learning algorithm that models and predicts the probability of the students' mastery of a skill.",
      tech: [
        "Machine Learning (pyBKT)",
        "Python",
        "FastAPI",
        "Heroku",
        "Firebase",
        "Redis",
        "JWT",
        "OAuth2.0",
        "PostgreSQL",
      ],
      repository: "https://github.com/MysticaLee/recommender-deployment",
      url: "",
      src: RecommenderMicroservice,
    },
    {
      id: 4,
      name: "LeetNode",
      description:
        "An adaptive learning and educational platform, targeted towards electrical circuit principles at the undergraduate level. Students gradually achieve mastery in these principles through practicing dynamically generated questions, recommended and adjusted in accordance with their learning needs and performance levels.",
      tech: [
        "Next.js",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Mantine",
        "NextAuth",
        "Prisma",
        "MySQL",
        "React Query",
        "Zod",
        "Vercel",
        "PlanetScale",
        "Cloudinary",
        "Heroku",
        "Redis",
        "FastAPI",
        "Firebase",
        "Machine Learning (pyBKT)",
        "Figma",
        "GitHub Actions",
        "Notion",
      ],
      repository: "https://github.com/zhermin/LeetNode",
      url: "https://leetnode.vercel.app/",
      src: LeetNode,
    },
    {
      id: 5,
      name: "Portfolio",
      description:
        "A portfolio website to showcase my projects and experiences.",
      tech: ["TypeScript", "React", "Tailwind CSS", "Vite"],
      repository: "https://github.com/MysticaLee/mysticalee.github.io",
      url: "",
      src: Portfolio,
    },
  ].reverse();
}
