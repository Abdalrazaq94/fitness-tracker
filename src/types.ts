export interface Workout {
  id?: string;
  name: string;
  duration: number;
  calories: number;
  type: string;
  created_at?: string;
}

export interface Metrics {
  id?: string;
  steps: number;
  water: number;
  sleep: number;
  mood: string;
  calories: number;
  heartRate: number;
  date?: string;
}

export interface Goal {
  steps: number;
  water: number;
  sleep: number;
  calories: number;
}

export type Theme = 'dark' | 'light';

export type MoodType = 'great' | 'good' | 'okay' | 'bad';

export type WorkoutType = 'run' | 'yoga' | 'cycling' | 'gym' | 'walk';