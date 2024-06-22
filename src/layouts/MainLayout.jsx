import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LandingPage from '../pages/LandingPage'


function MainLayout() {
  return (
    <div className='min-h-[100svh]'>
      <Header />
      <main>
        <LandingPage />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout