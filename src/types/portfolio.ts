export interface SkillItem {
  name: string;
  category: 'web' | 'programming' | 'cs';
  status: 'Working Knowledge' | 'Familiar' | 'Currently Learning' | 'Practicing';
  iconName: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  isPlaceholder: boolean;
  features: string[];
  category: 'web' | 'dsa';
}

export interface JourneyMilestone {
  title: string;
  phase: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Continuous' | 'Practicing';
  highlights: string[];
}

export interface CodingProfile {
  platform: string;
  handleOrUrl: string;
  description: string;
  iconType: 'github' | 'linkedin' | 'leetcode' | 'hackerrank' | 'gfg';
  color: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  headline: string;
  status: string;
  bio: string;
  collegeName: string;
  university: string;
  degree: string;
  currentYear: string;
  graduationYear: string;
  cgpa: string;
  email: string;
  phone: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
  leetcodeUrl: string;
  hackerrankUrl: string;
  geeksforgeeksUrl: string;
  availableFor: string;
}
