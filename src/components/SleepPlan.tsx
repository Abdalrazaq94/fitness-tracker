import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'

const sleepData = [
  { day: 'Mon', hours: 6.5 },
  { day: 'Tue', hours: 7.2 },
  { day: 'Wed', hours: 5.8 },
  { day: 'Thu', hours: 8.1 },
  { day: 'Fri', hours: 7.5 },
  { day: 'Sat', hours: 9.0 },
  { day: 'Sun', hours: 7.2 },
]

function SleepPlan() {
  const [bedtime, setBedtime] = useState<string>('22:30')
  const [wakeup, setWakeup] = useState<string>('06:30')

  const calculateHours = (): number => {
    const [bH, bM] = bedtime.split(':').map(Number)
    const [wH, wM] = wakeup.split(':').map(Number)
    let diff = (wH * 60 + wM) - (bH * 60 + bM)
    if (diff < 0) diff += 24 * 60
    return Math.round((diff / 60) * 10) / 10
  }

  const hours = calculateHours()
  const quality = hours >= 8 ? 'Excellent' : hours >= 7 ? 'Good' : hours >= 6 ? 'Fair' : 'Poor'
  const qualityColor = hours >= 8 ? 'text-green-400' : hours >= 7 ? 'text-blue-400' : hours >= 6 ? 'text-yellow-400' : 'text-red-400'

  return (
    <div className="mb-6">
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">sleep plan</p>
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4">
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-2">
              <Moon size={14} className="text-purple-400" />
              <span className="text-xs text-gray-500">bedtime</span>
            </div>
            <input
              type="time"
              value={bedtime}
              onChange={(e) => setBedtime(e.target.value)}
              className="bg-transparent text-lg font-semibold w-full outline-none"
            />
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-2">
              <Sun size={14} className="text-yellow-400" />
              <span className="text-xs text-gray-500">wake up</span>
            </div>
            <input
              type="time"
              value={wakeup}
              onChange={(e) => setWakeup(e.target.value)}
              className="bg-transparent text-lg font-semibold w-full outline-none"
            />
          </div>
        </div>

        <div className="flex gap-2 mb-4">
          <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-xl p-3 text-center">
            <p className="text-xs text-gray-500 mb-1">total sleep</p>
            <p className="text-xl font-semibold">{hours} hrs</p>
          </div>
          <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-xl p-3 text-center">
            <p className="text-xs text-gray-500 mb-1">quality</p>
            <p className={`text-xl font-semibold ${qualityColor}`}>{quality}</p>
          </div>
        </div>

        <p className="text-xs text-gray-500 mb-2">this week</p>
        <ResponsiveContainer width="100%" height={160}>
          <LineChart data={sleepData}>
            <XAxis dataKey="day" tick={{ fill: '#6b7280', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis domain={[4, 10]} hide />
            <Tooltip
              contentStyle={{ background: '#111', border: '1px solid #222', borderRadius: 8, fontSize: 12 }}
              labelStyle={{ color: '#fff' }}
              formatter={(value: number) => [`${value} hrs`, 'sleep']}
            />
            <ReferenceLine y={8} stroke="#4ade80" strokeDasharray="4 4" />
            <Line
              type="monotone"
              dataKey="hours"
              stroke="#818cf8"
              strokeWidth={2.5}
              dot={{ fill: '#818cf8', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-xs text-gray-500 mt-1">green line is your 8hr goal</p>
      </div>
    </div>
  )
}

export default SleepPlan