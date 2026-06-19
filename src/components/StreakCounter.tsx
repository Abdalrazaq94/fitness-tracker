import { Flame } from 'lucide-react'

function StreakCounter() {
  const streak: number = 7

  return (
    <div className="mb-6">
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">current streak</p>
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-orange-900 flex items-center justify-center text-orange-400">
          <Flame size={24} />
        </div>
        <div>
          <p className="text-3xl font-semibold text-orange-400">{streak} days</p>
          <p className="text-xs text-gray-500">keep it up!</p>
        </div>
      </div>
    </div>
  )
}

export default StreakCounter