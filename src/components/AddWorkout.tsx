import { useState } from 'react'
import { useWorkouts } from '../hooks/useWorkouts'
import type { WorkoutType } from '../types'

const workoutTypes: WorkoutType[] = ['run', 'yoga', 'cycling', 'gym', 'walk']

function AddWorkout() {
  const { addWorkout } = useWorkouts()
  const [name, setName] = useState<string>('')
  const [duration, setDuration] = useState<number>(30)
  const [calories, setCalories] = useState<number>(200)
  const [type, setType] = useState<WorkoutType>('run')
  const [saved, setSaved] = useState<boolean>(false)

  const handleSubmit = async () => {
    if (!name) return
    await addWorkout({ name, duration, calories, type })
    setSaved(true)
    setName('')
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="mb-6">
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">log workout</p>
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 flex flex-col gap-3">
        
        <input
          type="text"
          placeholder="workout name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-100 dark:bg-gray-800 rounded-xl px-4 py-3 text-sm outline-none w-full"
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value as WorkoutType)}
          className="bg-gray-100 dark:bg-gray-800 rounded-xl px-4 py-3 text-sm outline-none w-full"
        >
          {workoutTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl px-4 py-3">
            <p className="text-xs text-gray-500 mb-1">duration (min)</p>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="bg-transparent text-sm font-semibold w-full outline-none"
            />
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl px-4 py-3">
            <p className="text-xs text-gray-500 mb-1">calories burned</p>
            <input
              type="number"
              value={calories}
              onChange={(e) => setCalories(Number(e.target.value))}
              className="bg-transparent text-sm font-semibold w-full outline-none"
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-green-500 text-black font-medium rounded-xl text-sm"
        >
          {saved ? 'Saved!' : 'Save workout'}
        </button>
      </div>
    </div>
  )
}

export default AddWorkout