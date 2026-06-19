import { create } from 'zustand'
import type { Theme, Workout, Metrics, Goal } from './types'

interface AppState {
  theme: Theme
  workouts: Workout[]
  metrics: Metrics | null
  goal: Goal
  toggleTheme: () => void
  setWorkouts: (workouts: Workout[]) => void
  setMetrics: (metrics: Metrics) => void
  setGoal: (goal: Goal) => void
}

export const useStore = create<AppState>((set) => ({
  theme: 'dark',
  workouts: [],
  metrics: null,
  goal: {
    steps: 10000,
    water: 2.5,
    sleep: 8,
    calories: 500
  },
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
  setWorkouts: (workouts) => set({ workouts }),
  setMetrics: (metrics) => set({ metrics }),
  setGoal: (goal) => set({ goal })
}))