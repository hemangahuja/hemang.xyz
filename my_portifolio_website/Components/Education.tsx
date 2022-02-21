import Image from "next/image"

export default function Education(){
    return(
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

    )
}