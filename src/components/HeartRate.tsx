import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'

const heartData = [
  { time: '6am', bpm: 58 },
  { time: '8am', bpm: 72 },
  { time: '10am', bpm: 142 },
  { time: '12pm', bpm: 88 },
  { time: '2pm', bpm: 75 },
  { time: '4pm', bpm: 110 },
  { time: '6pm', bpm: 95 },
  { time: '8pm', bpm: 68 },
  { time: '10pm', bpm: 62 },
]

function HeartRate() {
  const current = 72
  const resting = 58
  const peak = 142

  return (
    <div className="mb-6">
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">heart rate</p>
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4">
        
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-3 text-center">
            <p className="text-xs text-gray-500 mb-1">current</p>
            <p className="text-xl font-semibold text-red-400">{current}</p>
            <p className="text-xs text-gray-500">bpm</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-3 text-center">
            <p className="text-xs text-gray-500 mb-1">resting</p>
            <p className="text-xl font-semibold text-green-400">{resting}</p>
            <p className="text-xs text-gray-500">bpm</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-3 text-center">
            <p className="text-xs text-gray-500 mb-1">peak</p>
            <p className="text-xl font-semibold text-orange-400">{peak}</p>
            <p className="text-xs text-gray-500">bpm</p>
          </div>
        </div>

        <p className="text-xs text-gray-500 mb-2">today</p>
        <ResponsiveContainer width="100%" height={160}>
          <LineChart data={heartData}>
            <XAxis dataKey="time" tick={{ fill: '#6b7280', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis domain={[40, 160]} hide />
            <Tooltip
              contentStyle={{ background: '#111', border: '1px solid #222', borderRadius: 8, fontSize: 12 }}
              labelStyle={{ color: '#fff' }}
              formatter={(value: number) => [`${value} bpm`, 'heart rate']}
            />
            <ReferenceLine y={100} stroke="#f87171" strokeDasharray="4 4" />
            <Line
              type="monotone"
              dataKey="bpm"
              stroke="#f87171"
              strokeWidth={2.5}
              dot={{ fill: '#f87171', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-xs text-gray-500 mt-1">red line is your 100bpm threshold</p>
      </div>
    </div>
  )
}

export default HeartRate