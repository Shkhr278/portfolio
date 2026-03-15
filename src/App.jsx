import Layout from './components/Layout'
import BackgroundAurora from './components/BackgroundAurora'
import Hero from './components/Hero'
import BentoGrid from './components/BentoGrid'
import Contact from './components/Contact'

function App() {
  return (
    <Layout>
      <BackgroundAurora />
      <div className="flex flex-col min-h-screen relative z-10 w-full overflow-hidden">
        <Hero />
        <BentoGrid />
        <Contact />
      </div>
    </Layout>
  )
}

export default App
