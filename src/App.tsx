import { useEffect } from 'react'
import { useStore } from './store'
import Dashboard from './components/Dashboard'

function App() {
  const { theme } = useStore()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-950 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Dashboard />
    </div>
  )
}

export default App