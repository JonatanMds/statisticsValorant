"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import bgAgents from '../../../../public/Bg.png'


interface PropsAgents {
  uuid: string;
  displayName: string;
  fullPortrait: string;
  displayIconSmall: string;
  role: any;
  displayIcon: string

}
export function CardMeta(){
  
    const [agents, setAgents] = useState<PropsAgents[]>([])
  
    useEffect(()=>{
      fetch('https://valorant-api.com/v1/agents')
        .then(response => response.json())
        .then(data =>{
          setAgents(data.data)
        })
    },[])

    const firstFourElementsOfTheArray = agents.slice(0,4)
  
    return(
      <div className="grid grid-cols-2 gap-4">
      {firstFourElementsOfTheArray.map(agent=>{
        return(
          <div key={agent.uuid} className="flex justify-between gap-2 bg-[url('https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt08fc3908e36e16de/5f0e84140395fe7f7bb115f4/VALORANT_Maps_Article_Banner.jpg')] bg-cover">
          <div className="flex justify-center items-center gap-2">
          <Image 
          className="h-full bg-[#0e1822]"
            alt=""
            src={agent.displayIconSmall}
            style={{objectFit:'cover'}}
            width={50}
            height={55}
          />
          <div className="py-1">
              <h1 className="font-medium text-white-100">{agent.displayName}</h1>
              <div className="flex flex-column justify-center items-center gap-1">
                <Image
                  src={agent.role?.displayIcon}
                  alt=""
                  width={15}
                  height={0}
                />
                <span>{agent.role?.displayName}</span>
              </div>
            </div>
            </div>
            <div className="p-1 pr-2 pl-0">
              <p className="text-sm">Pick Rate</p>
              <p className="font-[600] text-white-100">17.6%</p>
            </div>
            </div>
        )
      })}
    </div>
  )
}