import { useStore } from '../store'
import { Footprints, Droplets, Moon, Flame } from 'lucide-react'

function MetricCards() {
  const { metrics, goal } = useStore()

  const cards = [
    {
      label: 'steps',
      value: metrics?.steps ?? 7612,
      unit: '',
      goal: goal.steps,
      icon: <Footprints size={18} />,
      color: 'text-green-400'
    },
    {
      label: 'water',
      value: metrics?.water ?? 1.4,
      unit: 'L',
      goal: goal.water,
      icon: <Droplets size={18} />,
      color: 'text-blue-400'
    },
    {
      label: 'sleep',
      value: metrics?.sleep ?? 7.2,
      unit: 'hrs',
      goal: goal.sleep,
      icon: <Moon size={18} />,
      color: 'text-purple-400'
    }
  ]

  return (
    <div className="mb-6">
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">today's metrics</p>
      <div className="grid grid-cols-2 gap-3">
        {cards.map((card) => (
          <div key={card.label} className="bg-gray-900 border border-gray-800 rounded-2xl p-4">
            <div className={`${card.color} mb-2`}>{card.icon}</div>
            <div className="text-xl font-semibold">{card.value} <span className="text-sm text-gray-500">{card.unit}</span></div>
            <div className="text-xs text-gray-500 mt-1">{card.label}</div>
            <div className="h-1 bg-gray-800 rounded-full mt-2">
              <div
                className="h-1 rounded-full bg-green-400"
                style={{ width: `${Math.min((Number(card.value) / card.goal) * 100, 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MetricCards