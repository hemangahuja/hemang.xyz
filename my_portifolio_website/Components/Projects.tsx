import Image from "next/image"
import Link from "next/link"

export default function Projects(){
    return(
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
            <Link href={"/just-chatting"}>
            <Image
              src={'/just_chatting.png'}
              className="rounded-2xl cursor-pointer"
              width={700}
              height={500}
            
            /></Link>
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
    )
}