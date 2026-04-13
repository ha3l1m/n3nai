import { useState, useCallback } from 'react'
import { useTheme } from './hooks/useTheme'
import { useLang } from './hooks/useLang'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Industries from './components/Industries'
import About from './components/About'
import ConnectingThings from './components/ConnectingThings'
import OperationIntelligence from './components/OperationIntelligence'
import Products from './components/Products'
import UseCases from './components/UseCases'
import Technology from './components/Technology'
import Vision from './components/Vision'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  const { isDark, toggle: toggleTheme } = useTheme()
  const { lang, tr, toggle: toggleLang } = useLang()
  const [loaded, setLoaded] = useState(false)

  const handleLoadComplete = useCallback(() => setLoaded(true), [])

  return (
    <div className={isDark ? 'dark' : ''}>
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}

      <div className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'} bg-white dark:bg-gray-950`}>
        <Navbar isDark={isDark} onToggleTheme={toggleTheme} lang={lang} onToggleLang={toggleLang} tr={tr} />
        <main>
          <Hero tr={tr} />
          <Industries tr={tr} />
          <About tr={tr} />
          <ConnectingThings tr={tr} />
          <OperationIntelligence tr={tr} />
          <Products tr={tr} />
          <UseCases tr={tr} />
          <Technology tr={tr} />
          <Vision tr={tr} />
          <Contact tr={tr} />
        </main>
        <Footer tr={tr} />
      </div>
    </div>
  )
}
