import { useStore } from '../store'
import { Dumbbell } from 'lucide-react'

function WorkoutList() {
  const { workouts } = useStore()

  const mockWorkouts = [
    { id: '1', name: 'Morning Run', duration: 32, calories: 280, type: 'run' },
    { id: '2', name: 'Yoga Session', duration: 45, calories: 140, type: 'yoga' },
  ]

  const displayWorkouts = workouts.length > 0 ? workouts : mockWorkouts

  return (
    <div>
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">recent workouts</p>
      <div className="flex flex-col gap-3">
        {displayWorkouts.map((workout) => (
          <div key={workout.id} className="bg-gray-900 border border-gray-800 rounded-2xl p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-green-900 flex items-center justify-center text-green-400">
              <Dumbbell size={18} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">{workout.name}</p>
              <p className="text-xs text-gray-500">{workout.duration} min</p>
            </div>
            <div className="text-green-400 text-sm font-medium">
              {workout.calories} <span className="text-gray-500 text-xs">kcal</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkoutList