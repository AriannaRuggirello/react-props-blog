import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Post from './components/Post'
import PostCard from './components/PostCard'



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
