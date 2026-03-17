import { useEffect, lazy, Suspense } from 'react'
import Layout from './components/Layout'
import BackgroundAurora from './components/BackgroundAurora'
import Hero from './components/Hero'

const About = lazy(() => import('./components/About'))
const BentoGrid = lazy(() => import('./components/BentoGrid'))
const Contact = lazy(() => import('./components/Contact'))

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
        <Suspense fallback={<div className="min-h-screen bg-transparent" />}>
          <About />
          <BentoGrid />
          <Contact />
        </Suspense>
      </div>
    </Layout>
  )
}

export default App
