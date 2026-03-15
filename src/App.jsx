import { useEffect } from 'react'
import Layout from './components/Layout'
import BackgroundAurora from './components/BackgroundAurora'
import Hero from './components/Hero'
import About from './components/About'
import BentoGrid from './components/BentoGrid'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    // Ensure the page starts at the top on reload
    window.scrollTo(0, 0);
    
    // Optional: Stop browser from remembering scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <Layout>
      <BackgroundAurora />
      <div className="flex flex-col relative z-10 w-full overflow-hidden">
        <Hero />
        <About />
        <BentoGrid />
        <Contact />
      </div>
    </Layout>
  )
}

export default App
