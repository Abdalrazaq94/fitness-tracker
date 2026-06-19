import { useStore } from '../store'
import { Sun, Moon } from 'lucide-react'
import MetricCards from './MetricCards'
import WorkoutList from './WorkoutList'
import WeeklyChart from './WeeklyChart'
import WorkoutTimer from './WorkoutTimer'
import StreakCounter from './StreakCounter'
import MoodTracker from './MoodTracker'
import BodyHeatmap from './BodyHeatmap'
import AICoach from './AICoach'
import SleepPlan from './SleepPlan'
import HeartRate from './HeartRate'
import AddWorkout from './AddWorkout'

function Dashboard() {
  const { theme, toggleTheme } = useStore()

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm text-gray-500">Good morning 👋</p>
          <h1 className="text-xl font-semibold">Alex Johnson</h1>
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full border border-gray-700"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>

      <MetricCards />
      <WorkoutList />
      <WeeklyChart />
      <WorkoutTimer />
      <StreakCounter />
      <MoodTracker />
      <BodyHeatmap />
      <AICoach />
      <SleepPlan />
      <HeartRate />
      <AddWorkout />
    </div>
  )
}

export default Dashboard