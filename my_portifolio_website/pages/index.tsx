import React, { useEffect, useState } from 'react'
import Particle from '../Components/Particles'
import Contact from '../Components/Contact'
import Header from '../Components/Header'
import Education from '../Components/Education'
import Projects from '../Components/Projects'
import Face from '../Components/Face'
import Footer from '../Components/Footer'
import TechStack from '../Components/TechStack'
export default function index() {

  const [sending, setSending] = useState('');
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
    setSending('Sending');
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
      setSending('Message Sent! Thanks for reaching out to me :)');
    }
    else{
      setSending('Error! Please try again later. Sorry for the inconvenience.');
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
          <Contact handleSubmit={handleSubmit} status = {sending}></Contact>    
               
        </main>
        <Footer></Footer>
      </body>
    </>
  )
}
