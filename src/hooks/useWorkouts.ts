import { useState, useEffect } from 'react'
import { supabase } from '../supabase'
import type { Workout } from '../types'

export function useWorkouts() {
  const [workouts, setWorkouts] = useState<Workout[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const fetchWorkouts = async () => {
    const { data, error } = await supabase
      .from('workouts')
      .select('*')
      .order('created_at', { ascending: false })

    if (!error && data) {
      setWorkouts(data)
    }
    setLoading(false)
  }

  const addWorkout = async (workout: Omit<Workout, 'id' | 'created_at'>) => {
    const { data, error } = await supabase
      .from('workouts')
      .insert([workout])
      .select()

    if (!error && data) {
      setWorkouts((prev) => [data[0], ...prev])
    }
  }

  useEffect(() => {
    fetchWorkouts()
  }, [])

  return { workouts, loading, addWorkout }
}