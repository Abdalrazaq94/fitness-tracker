

    import { useState } from 'react'
import type { MoodType } from '../types'

const moods: { label: MoodType; emoji: string }[] = [
  { label: 'great', emoji: '😄' },
  { label: 'good', emoji: '🙂' },
  { label: 'okay', emoji: '😐' },
  { label: 'bad', emoji: '😞' },
]

function MoodTracker() {
  const [selected, setSelected] = useState<MoodType | null>(null)

  return (
    <div className="mb-6">
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">how are you feeling?</p>
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4">
        <div className="grid grid-cols-4 gap-2">
          {moods.map((mood) => (
            <button
              key={mood.label}
              onClick={() => setSelected(mood.label)}
              className={`flex flex-col items-center gap-1 p-3 rounded-xl border transition-all ${
                selected === mood.label
                  ? 'border-green-400 bg-green-900'
                  : 'border-gray-800 bg-gray-800'
              }`}
            >
              <span className="text-2xl">{mood.emoji}</span>
              <span className="text-xs text-gray-400">{mood.label}</span>
            </button>
          ))}
        </div>
        {selected && (
          <p className="text-xs text-green-400 text-center mt-3">
            Feeling {selected} today  logged!
          </p>
        )}
      </div>
    </div>
  )
}

export default MoodTracker