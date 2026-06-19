import { useState, useEffect } from 'react'
import { Play, Pause, RotateCcw } from 'lucide-react'

function WorkoutTimer() {
  const [seconds, setSeconds] = useState<number>(0)
  const [running, setRunning] = useState<boolean>(false)

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    if (running) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [running])

  const format = (s: number): string => {
    const m = Math.floor(s / 60).toString().padStart(2, '0')
    const sec = (s % 60).toString().padStart(2, '0')
    return `${m}:${sec}`
  }

  const reset = () => {
    setRunning(false)
    setSeconds(0)
  }

  return (
    <div className="mb-6">
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">workout timer</p>
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col items-center gap-4">
        <div className="text-5xl font-semibold text-green-400">{format(seconds)}</div>
        <div className="flex gap-3">
          <button
            onClick={() => setRunning(!running)}
            className="flex items-center gap-2 px-5 py-2 bg-green-500 text-black rounded-xl font-medium text-sm"
          >
            {running ? <Pause size={16} /> : <Play size={16} />}
            {running ? 'Pause' : 'Start'}
          </button>
          <button
            onClick={reset}
            className="flex items-center gap-2 px-5 py-2 border border-gray-700 rounded-xl text-sm"
          >
            <RotateCcw size={16} />
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default WorkoutTimer