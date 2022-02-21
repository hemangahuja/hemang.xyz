import Image from "next/image"

export default function Face(){
    return(
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
    )
}