import { Routes, Route } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'
import { useLang } from './hooks/useLang'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import Draft2Page from './pages/Draft2Page'
import './index.css'

export default function App() {
  const { isDark, toggle: toggleTheme } = useTheme()
  const { lang, tr, toggle: toggleLang } = useLang()

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="bg-white dark:bg-gray-950">
        <Navbar isDark={isDark} onToggleTheme={toggleTheme} lang={lang} onToggleLang={toggleLang} tr={tr} />
        <Routes>
          <Route path="/" element={<LandingPage tr={tr} lang={lang} />} />
          <Route path="/draft2" element={<Draft2Page tr={tr} lang={lang} />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}
