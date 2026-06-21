import { useState, useEffect } from 'react'
import { supabase } from '../supabase'
import type { Metrics } from '../types'

export function useMetrics() {
  const [metrics, setMetrics] = useState<Metrics | null>(null)

  const fetchMetrics = async () => {
    const [steps, water, sleep, calories, heartRate] = await Promise.all([
      supabase.from('metrics').select('steps').not('steps', 'is', null).order('timestamp', { ascending: false }).limit(1).single(),
      supabase.from('metrics').select('water').not('water', 'is', null).order('timestamp', { ascending: false }).limit(1).single(),
      supabase.from('metrics').select('sleep').not('sleep', 'is', null).order('timestamp', { ascending: false }).limit(1).single(),
      supabase.from('metrics').select('calories').not('calories', 'is', null).order('timestamp', { ascending: false }).limit(1).single(),
      supabase.from('metrics').select('heartRate').not('heartRate', 'is', null).order('timestamp', { ascending: false }).limit(1).single(),
    ])

    setMetrics({
      steps: steps.data?.steps ?? 0,
      water: water.data?.water ?? 0,
      sleep: sleep.data?.sleep ?? 0,
      calories: calories.data?.calories ?? 0,
      heartRate: heartRate.data?.heartRate ?? 0,
      mood: 'good'
    })
  }

  useEffect(() => {
    fetchMetrics()
    const interval = setInterval(fetchMetrics, 5000)
    return () => clearInterval(interval)
  }, [])

  return { metrics }
}