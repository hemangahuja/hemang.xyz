import Image from "next/image"

export default function Footer() {
    return(
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
    )
}