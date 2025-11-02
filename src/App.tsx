import './App.css'
import Header from './components/Header'
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  return (
    <div className='font-sans min-h-screen'>
      <Header />
      <main className="mx-auto w-350 px-4 space-y-16">
        <section id="about" className="scroll-m-20 text-center pt-24">
          <About />
        </section>
        <section id="skills" className="scroll-m-20 ">
          <Skills />
        </section>
        <section id="projects" className="scroll-m-20 w-full flex flex-col justify-center items-center">
          <Projects />
        </section>
        <section id="contact" className="scroll-m-20 pb-16">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App

