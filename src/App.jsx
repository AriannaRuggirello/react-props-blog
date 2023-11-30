import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from './components/Header'
import Footer from './components/Footer'
import Post from './components/Post'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>

    <main className='min-h-screen'>
    <Post/>

    </main>

    <Footer/>
    </>
  )
}

export default App
