import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { useStore } from '../store'

const mockData = [
  { day: 'Mon', steps: 6200, calories: 320 },
  { day: 'Tue', steps: 8100, calories: 410 },
  { day: 'Wed', steps: 5400, calories: 280 },
  { day: 'Thu', steps: 9200, calories: 480 },
  { day: 'Fri', steps: 7600, calories: 390 },
  { day: 'Sat', steps: 11000, calories: 560 },
  { day: 'Sun', steps: 7612, calories: 420 },
]

function WeeklyChart() {
  const { theme } = useStore()
  const textColor = theme === 'dark' ? '#6b7280' : '#9ca3af'

  return (
    <div className="mb-6">
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">this week</p>
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4">
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={mockData}>
            <XAxis dataKey="day" tick={{ fill: textColor, fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip
              contentStyle={{ background: '#111', border: '1px solid #222', borderRadius: 8, fontSize: 12 }}
              labelStyle={{ color: '#fff' }}
            />
            <Bar dataKey="steps" fill="#4ade80" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default WeeklyChart