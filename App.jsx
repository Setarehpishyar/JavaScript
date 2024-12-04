import './App.css'
import Client from './components/Client.jsx'
import Features from './components/Features.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Input from './components/Input.jsx'
import Logo from './components/Logo.jsx'
import Money from './components/Money.jsx'
import Question from './components/Question.jsx'
import Three from './components/Three.jsx'


function App() {
  console.log('App component is rendering');

  return (
    <div className="wrapper">
      <Header/>
      <main id="main">
      <Hero />
      <Logo />
      <Features />
      <Three />
      <Money />
      <Client />
      <Question />
      <Input />
      <Footer />
      </main>
    </div>
  )
}

export default App
