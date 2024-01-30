import getSkills from '../../data/Skills';
import SkillsData from '../../interfaces/Skills.interface';

export default function Skills() {
  const data: SkillsData[] = getSkills();

  return (
    <section id="skills" className="space-y-4">
      {data.map((item) => (
        <div
          key={item.type}
          className="flex flex-col items-center justify-center space-y-2"
        >
          <h2 className="border-b-2 border-custom-primary text-xl font-bold">
            {item.type}
          </h2>
          <ul className="flex list-none flex-wrap items-center justify-center space-x-6">
            {item.skills.map((skill) => (
              <li
                key={skill.name}
                className="my-2 flex flex-col items-center justify-center text-4xl"
              >
                <div>{skill.icon}</div>
                <label className="text-sm font-semibold">{skill.name}</label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
