import Image from "next/image";

interface typeAgentsCard {
  name: string
  imageAgent?: any 
}



export function Card({name, imageAgent}:typeAgentsCard){
  return(
    <div 
      className="flex flex-col justify-center items-center"
      >
        <div className="relative overflow-hidden w-60 h-80 rounded outline outline-offset-8 hover:outline-purple-100">
        <div className="absolute w-full h-full bg-[linear-gradient(0deg,rgba(0,0,0,0.80)_6.82%,rgba(0,0,0,0.00)_81.44%)] hover:bg-[linear-gradient(0deg,rgba(103,89,233,0.75)_6.82%,rgba(0,0,0,0.00)_81.44%)]"></div>
          <Image
            className="object-cover w-full h-full"
            style={{objectFit: "cover"}}
            alt=""
            src={imageAgent}
            quality={75}
            sizes="100vw"
            width="0"
            height="0"
            />
          <h1 className="absolute bottom-8 inset-x-0 text-center text-[#ffff]">{name}</h1>
        </div>
    </div>
  )
}