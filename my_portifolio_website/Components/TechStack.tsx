import Image from "next/image"

export default function TechStack(){
    return(
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
    )
}