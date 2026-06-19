import { useState } from 'react'

type BodyPart = {
  id: string
  label: string
  x: number
  y: number
}

const bodyParts: BodyPart[] = [
  { id: 'head', label: 'Head', x: 95, y: 20 },
  { id: 'shoulders', label: 'Shoulders', x: 95, y: 60 },
  { id: 'chest', label: 'Chest', x: 95, y: 90 },
  { id: 'arms', label: 'Arms', x: 95, y: 110 },
  { id: 'core', label: 'Core', x: 95, y: 130 },
  { id: 'legs', label: 'Legs', x: 95, y: 180 },
  { id: 'calves', label: 'Calves', x: 95, y: 220 },
]

function BodyHeatmap() {
  const [sore, setSore] = useState<string[]>([])

  const toggle = (id: string) => {
    setSore((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    )
  }

  return (
    <div className="mb-6">
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">muscle soreness</p>
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4">
        <p className="text-xs text-gray-500 mb-3">tap body parts that feel sore</p>
        <div className="flex flex-wrap gap-2">
          {bodyParts.map((part) => (
            <button
              key={part.id}
              onClick={() => toggle(part.id)}
              className={`px-3 py-2 rounded-xl text-sm border transition-all ${
                sore.includes(part.id)
                  ? 'border-red-400 bg-red-900 text-red-300'
                  : 'border-gray-700 bg-gray-800 text-gray-400'
              }`}
            >
              {part.label}
            </button>
          ))}
        </div>
        {sore.length > 0 && (
          <p className="text-xs text-red-400 mt-3">
            Sore: {sore.join(', ')}
          </p>
        )}
      </div>
    </div>
  )
}

export default BodyHeatmap  