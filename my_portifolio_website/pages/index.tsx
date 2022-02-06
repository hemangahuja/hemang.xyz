import React, { useEffect } from 'react'
import Image from 'next/image'
import Particle from '../Components/Particles'
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
  return (
    <>
      <div style={{ position: 'absolute' }}>
        <Particle></Particle>
      </div>
      <body className="bg-blue-400 font-body">
        <header className="mx-0 mt-0 flex text-2xl sticky top-0 z-50 bg-gradient-to-r from-gray-700 via-gray-900 to-black p-4">
          <div className="ml-auto md:ml-0 text-white">hemang.xyz</div>
          <nav className="ml-auto hidden space-x-5 text-xl md:flex">
            <a
              href="#edu"
              className="rounded-full border-2 bg-gray-700  text-white border-gray-800 p-2 hover:bg-purple-300 hover:text-black"
            >
              Education
            </a>
            <a
              href="#projects"
              className="rounded-full border-2 bg-gray-700 text-white border-gray-800 p-2 hover:bg-purple-300 hover:text-black"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border-2 bg-gray-700 text-white border-gray-800 p-2 hover:bg-purple-300 hover:text-black"
            >
              Contact
            </a>
          </nav>
          <div className="ml-auto md:hidden">
            <button id="mobile-nav-button" className="outline-none bg-white rounded-3xl p-2">
              <svg
                className="h-6 w-6"
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <div id="mobile-nav" className="flex hidden flex-col bg-white divide-y-2 rounded-3xl p-2">
              <button id="cross"><Image src={'/back.svg'} width={20} height={20}></Image> </button>
              <a className='mob-nav-b' href="#edu">Education</a>
              <a className='mob-nav-b' href="#projects">Projects</a>
              <a className='mob-nav-b' href="#contact">Contact</a>
            </div>
          </div>
        </header>
        <main className="flex flex-col">
          <section className="m-6 self-center md:flex md:justify-between md:self-auto">
            <div className="transform text-center text-4xl transition-all hover:z-10 hover:scale-110 md:ml-10 md:self-center">
              <p>
                Hello
                <br />
                My name is <span className="font-bold">Hemang</span>
                <br />
                I'm a <span className="font-bold">Full Stack Developer</span>
              </p>
            </div>
            <div className="transform transition-all hover:z-10 hover:scale-105">
              <div className="rounded-3xl mt-4">
                <Image src={'/hackerman.svg'} width={800} height={400} />
              </div>
            </div>
          </section>

          <section
            id="tech"
            className="m-5 rounded-xl divide-y-8  divide-gray-800 self-center md:self-auto "
          >
            <div className="flex flex-col items-center">
              <h1 className="text-4xl">Tech Stack</h1>
              <Image src={'/code.svg'} width={100} height={100} />
            </div>
            <div className="grid grid-cols-2 items-center gap-8 pt-10 md:flex md:flex-row md:flex-wrap">
              <div className="transform transition-all hover:z-10 hover:scale-110 flex items-center justify-center bg-blue-100 rounded-lg p-1">
                <Image src={'/flutter.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-10 hover:scale-110">
                <Image src={'/nextjs.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-10 hover:scale-110">
                <Image src={'/nodejs.svg'} width={100} height={200} />
              </div>
              <div className="flex flex-col transform items-center transition-all hover:z-10 hover:scale-110">
                <Image src={'/solidity.svg'} width={100} height={100} />
                <span>Solidity</span>
              </div>
              <div className="transform transition-all hover:z-10 hover:scale-110">
                <Image src={'/c.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-10 hover:scale-110">
                <Image src={'/c++.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-10 hover:scale-110">
                <Image src={'/css.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-10 hover:scale-110">
                <Image src={'/python.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-10 hover:scale-110 flex items-center justify-center bg-blue-100 rounded-lg p-1">
                <Image src={'/dart.svg'} width={100} height={100} />
              </div>
  
              <div className="transform transition-all hover:z-10 hover:scale-110">
                <Image src={'/express.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-10 hover:scale-110">
                <Image src={'/firebase.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-10 hover:scale-110">
                <Image src={'/flask.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-10 hover:scale-110">
                <Image src={'/git.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-10 hover:scale-110">
                <Image src={'/html.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-10 hover:scale-110">
                <Image src={'/java.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-10 hover:scale-110">
                <Image src={'/linux.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-10 hover:scale-110">
                <Image src={'/mongodb.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-10 hover:scale-110">
                <Image src={'/mysql.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-10 hover:scale-110">
                <Image src={'/php.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-10 hover:scale-110 flex items-center justify-center bg-blue-100 rounded-lg">
                <Image src={'/electron.svg'} width={100} height={90} />
              </div>
             
              <div className="transform transition-all hover:z-10 hover:scale-110">
                <Image src={'/tailwind.svg'} width={100} height={200} />
              </div>
              <div className="transform transition-all hover:z-10 hover:scale-110">
                <Image src={'/typescript.svg'} width={100} height={100} />
              </div>
              <div className="transform transition-all hover:z-10 hover:scale-110">
                <Image src={'/javascript.svg'} width={100} height={100} />
              </div>
            </div>
          </section>

          <section
            id="edu"
            className="m-5 rounded-xl  divide-y-8 divide-gray-800 self-center text-4xl"
          >
            <div className='flex flex-col items-center space-y-10'>
              <div >Education</div>
              <Image src={'/school.svg'} width={100} height={100} />
            </div>

            <div className="flex flex-col space-y-10 divide-y-2 divide-gray-800 pt-2 text-2xl">
              <div className="flex justify-between transform items-center space-x-10 border-t-0 p-2 text-xl transition-all hover:z-10 hover:scale-110">
                <div>
                  <Image  className="rounded-3xl" src={'/vit.jpg'} width={300} height={200} />
                </div>

                <div className="flex flex-col items-end">
                  <span className="font-bold">
                    Vellore Institute of Technology, Chennai
                  </span>
                  <span className="ml-auto text-black">
                  
                    - Computer Science Engineering
                  </span>
                  <span className="ml-auto text-black"> - 8.0 CGPA</span>
                </div>
              </div>
              <div className="flex justify-between transform items-center space-x-10 border-t-0 p-2 text-xl transition-all  hover:z-10 hover:scale-110">
                <div>
                  <Image  className="rounded-3xl" src={'/sbsms.webp'} width={300} height={200} />
                </div>

                <div className="flex flex-col items-end">
                  <span className="font-bold">SBSMS, Delhi</span>
                  <span className="ml-auto text-black">
               
                    - Senior Secondary Education
                  </span>
                  <span className="ml-auto text-black"> - 96.2%</span>
                </div>
              </div>
              <div className="flex justify-between transform items-center space-x-10 border-t-0 p-2 text-xl transition-all  hover:z-10 hover:scale-110">
                <div>
                  <Image  className="rounded-3xl" src={'/adarsh.jfif'} width={300} height={200} />
                </div>

                <div className="flex flex-col items-end">
                  <span className="font-bold">Adarsh Public School, Delhi</span>
                  <span className="ml-auto text-black">
                  
                    - Secondary Education
                  </span>
                  <span className="ml-auto text-black"> - 85.6%</span>
                </div>
              </div>
            </div>
          </section>

          <section
            id="projects"
            className="m-5 rounded-xl divide-y-8 p-5 divide-gray-800 self-center "
          >
            <div className="flex flex-col items-center">
              <div className='text-4xl'>Projects</div>
              <Image src={'/project.svg'} width={100} height={100} />
            </div>
            <div className="flex flex-col space-y-20 md:space-y-0 pt-10 md:grid md:grid-cols-2 md:gap-20">
              <div className="flex transform flex-col space-y-8 transition-all hover:z-10 hover:scale-110">
                <Image
                  src={'/bitua.png'}
                  className="rounded-2xl"
                  width={700}
                  height={500}
                />
                <div>
                  <div className="text-xl font-bold">Bitua</div>
                  <div className="text-black">
                    A mobile app for managing crypto currency
                  </div>
                  <div className="text-black">
                    <span className="font-bold">Tech Stack: </span>
                    <span>Flutter and Firebase</span>
                  </div>
                </div>
              </div>
              <div className="flex transform flex-col space-y-8  transition-all hover:z-10 hover:scale-110">
                <Image
                  src={'/just_chatting.png'}
                  className="rounded-2xl"
                  width={700}
                  height={500}
                />
                <div>
                  <div className="text-xl font-bold">Just Chatting</div>
                  <div className="text-black">
                    A web application for channel oriented messaging and
                    video/audio calling
                  </div>
                  <div className="text-black">
                    <span className="font-bold">Tech Stack: </span>
                    <span>NextJS, Pusher, Firebase and Jitsi</span>
                  </div>
                </div>
              </div>
              <div className="flex transform flex-col  space-y-8 transition-all hover:z-10 hover:scale-110">
                <Image
                  src={'/ctf.jfif'}
                  className="rounded-2xl"
                  width={700}
                  height={500}
                />
                <div>
                  <div className="text-xl font-bold">Waspcon</div>
                  <div className="text-black">
                    A CTF event for student chapter of OWASP VIT
                  </div>
                  <div className="text-black">
                    <span className="font-bold">Tech Stack: </span>
                    <span>PHP, MySQL, HTML</span>
                  </div>
                </div>
              </div>
              <div className="flex transform flex-col  space-y-8 transition-all hover:z-10 hover:scale-110">
                <Image
                  src={'/chess.png'}
                  className="rounded-2xl"
                  width={700}
                  height={500}
                />
                <div>
                  <div className="text-xl font-bold">
                    Chess-Coordinate-Practice
                  </div>
                  <div className="text-black">
                    A chess square notation practice game
                  </div>
                  <div className="text-black">
                    <span className="font-bold">Tech Stack: </span>
                    <span>PyGame</span>
                  </div>
                </div>
              </div>
              <div className="flex transform flex-col space-y-8  transition-all hover:z-10 hover:scale-110">
                <Image
                  src={'/ezvoter.png'}
                  className="rounded-2xl"
                  width={700}
                  height={500}
                />
                <div>
                  <div className="text-xl font-bold">EZVoter</div>
                  <div className="text-black">
                    A Decentralized Voting System Web App
                  </div>
                  <div className="text-black">
                    <span className="font-bold">Tech Stack: </span>
                    <span>Solidity, HardHatJS, NextJS, MetaMask</span>
                  </div>
                </div>
              </div>
              <div className="flex transform flex-col  space-y-8 transition-all hover:z-10 hover:scale-110">
                <Image
                  src={'/todo.png'}
                  className="rounded-2xl"
                  width={700}
                  height={500}
                />
                <div>
                  <div className="text-xl font-bold">ToDoer</div>
                  <div className="text-black">
                    A full stack web app for managing your todos
                  </div>
                  <div className="text-black">
                    <span className="font-bold">Tech Stack: </span>
                    <span>
                      NodeJS, ExpressJS, SQLite, HTML, CSS, JavaScript
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="contact" className="w-4/5 m-5 self-center rounded-full p-2 ">
            <div className="flex flex-col items-center mb-2">
              <div className='text-4xl'>Contact</div>
              <Image src={'/contact.svg'} width={100} height={50} />
            </div>
            <hr className="col-span-2 border-black"></hr>
            <form className="m-2 flex flex-col p-2">
              <div className=" flex flex-col md:grid md:grid-cols-2 md:gap-2 ">
                <label className="text-center text-2xl md:ml-auto md:mr-auto ">
                  Name -
                </label>
                <input
                  className="w-4/5 ml-auto mr-auto rounded-lg border-2 border-gray-800 bg-transparent p-1"
                  type="text"
                />

                <label className="text-center text-2xl md:ml-auto md:mr-auto">
                  Message -
                </label>
                <textarea
                 
                  className="rounded-lg w-4/5 ml-auto mr-auto border-2 border-gray-800 bg-transparent p-2"
                />
              </div>
              <span className="mt-5 self-center">
                <button onClick={(event) => {
                  event.preventDefault();
                  alert('Thanks for reaching out! I will get back to you soon.')
                }} className="rounded-full border-2 border-gray-800 p-2 px-3 text-center text-xl hover:cursor-pointer hover:bg-purple-300">
                  Send
                </button>
              </span>
            </form>
          </section>
        </main>
        <footer className="flex items-center justify-center bg-gradient-to-r from-gray-700 via-gray-900 to-black">
          <div className="grid grid-cols-2 gap-x-10 gap-y-5 text-xl md:flex md:justify-between md:space-x-32 pt-5">
            <div className="transform transition-all hover:z-10 hover:scale-110">
              <a href="mailto: hemangahujaeotw@gmail.com">
                <Image src={'/mail.svg'} width={50} height={50} />
              </a>
            </div>
            <div className="transform transition-all hover:z-10 hover:scale-110 bg-blue-100 rounded-full h-12 w-12">
              <a href="https://github.com/hemangahuja">
                <Image src={'/github.svg'} width={48} height={48} />
              </a>
            </div>
            <div className="transform transition-all hover:z-10 hover:scale-110">
              <a href="https://www.linkedin.com/in/hemangahuja/">
                <Image src={'/linkedin.svg'} width={50} height={50} />
              </a>
            </div>
            <div className="transform transition-all hover:z-10 hover:scale-110 flex items-center justify-center ">
              <a href="https://twitter.com/HemangAhuja3" className='p-1'>
                <Image src={'/twitter.svg'} width={50} height={50} />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </>
  )
}
