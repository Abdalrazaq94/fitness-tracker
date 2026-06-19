import { useState } from 'react'
import { Sparkles } from 'lucide-react'


const tips: string[] = [
  'You are 2400 steps away from your daily goal, a 20 minute walk will get you there.',
  'Your sleep average this week is 7.2 hours, try to get to bed 30 minutes earlier tonight.',
  'You have worked out 3 days in a row, great consistency keep it going.',
  'Drink one more glass of water to hit your hydration goal for today.',
  'Your best workout day this week was Saturday with 11000 steps.',
]

function AICoach() {
  const [tip, setTip] = useState<string>(tips[0])
  const [loading, setLoading] = useState<boolean>(false)

  const getNewTip = () => {
    setLoading(true)
    setTimeout(() => {
      const random = tips[Math.floor(Math.random() * tips.length)]
      setTip(random)
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="mb-6">
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">AI coach</p>
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles size={16} className="text-green-400" />
          <p className="text-sm font-medium text-green-400">Daily tip</p>
        </div>
        <p className="text-sm text-gray-300 leading-relaxed">{tip}</p>
        <button
          onClick={getNewTip}
          className="mt-4 text-xs text-gray-500 border border-gray-700 px-3 py-2 rounded-xl hover:border-green-400 hover:text-green-400 transition-all"
        >
          {loading ? 'Thinking...' : 'Get new tip'}
        </button>
      </div>
    </div>
  )
}

export default AICoach