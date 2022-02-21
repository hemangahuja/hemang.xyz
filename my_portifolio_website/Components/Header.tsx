import Image from "next/image"

export default function Header() {
    return (
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
            <button id="cross">
                <Image src={'/back.svg'} width={20} height={20}/>
             </button>
            <a className='mob-nav-b' href="#edu">Education</a>
            <a className='mob-nav-b' href="#projects">Projects</a>
            <a className='mob-nav-b' href="#contact">Contact</a>
          </div>
        </div>
      </header>
    )
}