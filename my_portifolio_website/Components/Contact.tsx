import Image from "next/image";

type Props = {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Contact({handleSubmit} : Props) {
    return(
        <section id="contact" className="w-4/5 m-5 self-center rounded-full p-2 ">
        <div className="flex flex-col items-center mb-2">
          <div className='text-4xl'>Contact</div>
          <Image src={'/contact.svg'} width={100} height={50} />
        </div>
        <hr className="col-span-2 border-black"></hr>
        <form onSubmit={(event)=>handleSubmit(event)} className="m-2 flex flex-col p-2">
          <div className=" flex flex-col md:grid md:grid-cols-2 md:gap-2 ">
            <label className="text-center text-2xl md:ml-auto md:mr-auto ">
              Name -
            </label>
            <input
            required
              name = "Uname"
              className="w-4/5 ml-auto mr-auto rounded-lg border-2 border-gray-800 bg-transparent p-1"
              type="text"
            />

            <label className="text-center text-2xl md:ml-auto md:mr-auto">
              Message -
            </label>
            <textarea
                required
                
                name = "message"
              className="rounded-lg w-4/5 ml-auto mr-auto border-2 border-gray-800 bg-transparent p-2"
            />
          </div>
          <span className="mt-5 self-center">
            <input type={"submit"} className="rounded-full border-2 border-gray-800 p-2 px-3 text-center text-xl hover:cursor-pointer hover:bg-purple-300">
              
            </input>
          </span>
        </form>
      </section>
    )
}