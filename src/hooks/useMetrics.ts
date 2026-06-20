import { useState, useEffect } from 'react'
import { supabase } from '../supabase'
import type { Metrics } from '../types'

export function useMetrics() {
  const [metrics, setMetrics] = useState<Metrics | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const fetchMetrics = async () => {
    const { data, error } = await supabase
      .from('metrics')
      .select('*')
      .order('timestamp', { ascending: false })
      .limit(1)
      .single()

    if (!error && data) {
      setMetrics(data)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchMetrics()

    // listen for new data every 5 seconds
    const interval = setInterval(fetchMetrics, 5000)
    return () => clearInterval(interval)
  }, [])

  return { metrics, loading }
}