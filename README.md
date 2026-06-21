# Fitness Tracker App

A real-time fitness tracking application built with TypeScript, React, and IoT simulation using Node-RED.

## Live Demo
🔗 Coming soon on Vercel

## Architecture

```
Node-RED (Railway) → Supabase → React App (Vercel)
```

### How It Works

1. **Node-RED** runs on Railway cloud and simulates 4 fitness sensors every few seconds
2. Each sensor sends data directly to **Supabase** via HTTP POST request
3. The **React app** fetches the latest data from Supabase every 5 seconds and updates the UI in real time

### Simulated Sensors

| Sensor | Topic | Interval |
|--------|-------|----------|
| Heart Rate | fitness/heartrate | Every 5 seconds |
| Step Counter | fitness/steps | Every 5 seconds |
| Sleep Tracker | fitness/sleep | Every 30 seconds |
| Calorie Tracker | fitness/calories | Every 15 seconds |

Each sensor calculates realistic data based on time of day:
- **Steps** accumulate gradually throughout the day using Node-RED context store
- **Heart rate** is higher during the day and lower at night
- **Calories** are calculated based on step count
- **Sleep** is only recorded in the morning hours

## Tech Stack

### Frontend
- **React** with **TypeScript** — UI components and type safety
- **Vite** — fast development and build tool
- **Tailwind CSS** — styling
- **Recharts** — charts and graphs
- **Zustand** — global state management (theme, goals)
- **Lucide React** — icons
- **Supabase JS** — database client

### Backend / IoT Simulation
- **Node-RED** — IoT sensor simulation and data pipeline
- **Railway** — cloud hosting for Node-RED (runs 24/7)

### Database
- **Supabase (PostgreSQL)** — stores all sensor data with real-time updates

## Features

- Real-time metrics dashboard (steps, heart rate, sleep, calories, water)
- Weekly bar chart showing activity trends
- Live heart rate line chart
- Sleep plan with line graph
- Workout timer
- Workout logging with Supabase storage
- Mood tracker
- Body soreness heatmap
- AI coach tips
- Streak counter
- Dark and light theme toggle

## Database Schema

```sql
-- metrics table (updated by Node-RED sensors)
create table metrics (
  id uuid default gen_random_uuid() primary key,
  steps int,
  water float,
  sleep float,
  mood text,
  calories int,
  "heartRate" int,
  date date default current_date,
  day text,
  timestamp timestamptz
);

-- workouts table (updated by user via app)
create table workouts (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  duration int not null,
  calories int not null,
  type text not null,
  created_at timestamp default now()
);
```

## Getting Started

### Prerequisites
- Node.js v18 or higher
- Supabase account
- Railway account (for Node-RED hosting)

### Installation

```bash
# Clone the repo
git clone https://github.com/Abdalrazaq94/fitness-tracker

# Install dependencies
cd fitness-tracker
npm install

# Add environment variables
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Start the app
npm run dev
```

### Node-RED Setup

1. Deploy Node-RED to Railway using Docker image `nodered/node-red`
2. Import the flow from `node-red-flow.json`
3. Update the Supabase API key in each function node
4. Deploy the flow

## Project Structure

```
src/
  components/
    Dashboard.tsx       — main layout
    MetricCards.tsx     — live sensor metric cards
    WeeklyChart.tsx     — weekly steps bar chart
    HeartRate.tsx       — heart rate line chart
    SleepPlan.tsx       — sleep schedule and chart
    WorkoutTimer.tsx    — workout stopwatch
    WorkoutList.tsx     — recent workouts from Supabase
    AddWorkout.tsx      — log new workout form
    MoodTracker.tsx     — daily mood selector
    BodyHeatmap.tsx     — muscle soreness tracker
    AICoach.tsx         — daily fitness tips
    StreakCounter.tsx   — consecutive day streak
  hooks/
    useMetrics.ts       — fetch live sensor data from Supabase
    useWorkouts.ts      — fetch and add workouts from Supabase
  store.ts              — Zustand global state
  types.ts              — TypeScript interfaces
  supabase.ts           — Supabase client
  App.tsx               — root component with theme toggle
```

## Author

Abed- Software Development Graduate
GitHub: https://github.com/Abdalrazaq94