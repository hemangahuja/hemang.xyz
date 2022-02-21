import React, { useEffect } from 'react'
import Particle from '../Components/Particles'
import Contact from '../Components/Contact'
import Header from '../Components/Header'
import Education from '../Components/Education'
import Projects from '../Components/Projects'
import Face from '../Components/Face'
import Footer from '../Components/Footer'
import TechStack from '../Components/TechStack'
export default function index() {
  useEffect(() => {
    const mobileNavButton = document.getElementById('mobile-nav-button')
    const mobileNav = document.getElementById('mobile-nav')
    const cross = document.getElementById('cross')
    const toggle = () => {
      mobileNav!.classList.toggle('hidden');
      mobileNavButton!.classList.toggle('hidden');
    }
    mobileNavButton!.onclick = () => {
      toggle();
    }
    cross!.onclick = () => {
      toggle();
    }
    const navLinks = document.querySelectorAll<HTMLElement>('.mob-nav-b');
    navLinks.forEach(link  => {
      link.onclick = () => {
        toggle();
      }
    }
    )
  }, [])
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = e.currentTarget.Uname.value;
    const message = e.currentTarget.message.value;
    const response = await fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        message
      })
    })
    const data = await response.json();
    if(data.statusCode === 200){
      alert('Message Sent! :) Thanks for reaching out to me!')
    }
    else{
      alert('Message Failed, try again after a while. Sorry for the inconvenience!')
    }
  }
  return (
    <>
      <div style={{ position: 'absolute' }}>
        <Particle></Particle>
      </div>
      <body className="bg-blue-400 font-body">
       
        <main className="flex flex-col">
         
          <Header></Header>
          <Face></Face>
          <TechStack></TechStack>
          <Education></Education>
          <Projects></Projects>
          <TechStack></TechStack>
          <Contact handleSubmit={handleSubmit}></Contact>         
        </main>
        <Footer></Footer>
      </body>
    </>
  )
}
