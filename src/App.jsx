import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import ZoneLayout from './components/ZoneLayout'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/:zone" element={<ZoneLayout />}>
        <Route index element={<Home />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
