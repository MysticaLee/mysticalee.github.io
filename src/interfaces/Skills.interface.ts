export default interface SkillsData {
  type: string;
  skills: Skill[];
}
[];

interface Skill {
  name: string;
  icon: JSX.Element;
}
