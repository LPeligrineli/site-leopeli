export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  key: string;
  skills: Skill[];
}
