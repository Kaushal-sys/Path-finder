export interface SkillGap {
  name: string;
  matchPercent: number;
  status: 'gap' | 'warning' | 'success';
  description: string;
}

export interface Trend {
  name: string;
  demandChange: string;
  demandDirection: 'up' | 'down';
  description: string;
  category: string;
}

export interface Activity {
  id: string;
  type: 'application' | 'verification' | 'optimization';
  title: string;
  subtitle: string;
  time: string;
  timestamp: number;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  matchPercent: number;
  description: string;
  skills: string[];
  applied: boolean;
}

export interface Step {
  id: string;
  title: string;
  description: string;
  hours: number;
  type: 'course' | 'project' | 'reading';
  completed: boolean;
  resourceLink?: string;
}

export interface RoadmapPhase {
  id: string;
  title: string;
  subtitle: string;
  status: 'completed' | 'active' | 'locked';
  duration: string;
  steps: Step[];
}

export interface DashboardData {
  readinessPercent: number;
  percentile: number;
  location: string;
  track: string;
  summary: string;
  skills: SkillGap[];
  trends: Trend[];
  activities: Activity[];
  jobs: Job[];
  roadmap: RoadmapPhase[];
}
