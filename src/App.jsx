import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/gaming" element={<div className="theme-gaming">gaming home</div>} />
      <Route path="/brand" element={<div className="theme-brand">brand home</div>} />
    </Routes>
  )
}