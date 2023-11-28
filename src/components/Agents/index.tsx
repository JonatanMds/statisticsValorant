"use client"
import { Card } from "@/patters/Card";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import { useContext} from "react"
import {
  Breach,
  Deadlock,
  Fade,
  Gekko,
  Iso,
  Astra,
  Brimstone,
  Chamber,
  Cypher,
  Harbor,
  Jett,
  KAYO,
  Killjoy,
  Neon,
  Omen,
  Phoenix,
  Raze,
  Reyna,
  Sage,
  Skye,
  Sova,
  Viper,
  Yoru} from '../../../public/jpg/index'
import { AgentsContext } from "@/app/page";


export default function Agents(){
  const {agents, selectPage, maps, removingDuplicateAgents} = useContext(AgentsContext)

  const imgAgents = [
    {
      nameId:'Gekko', 
      image01:Gekko
    },
    {
      nameId:'Iso', 
      image01:Iso
    },
    {
      nameId:'Fade', 
      image01:Fade
    },
    {
      nameId:'Breach', 
      image01:Breach
    },
    {
      nameId:'Deadlock', 
      image01:Deadlock
    },
    {
      nameId:'Iso', 
      image01:Iso
    },
    {
      nameId:'Raze', 
      image01:Raze
    },
    {
      nameId:'Chamber', 
      image01:Chamber
    },
    {
      nameId:'KAY/O', 
      image01:KAYO
    },
    {
      nameId:'Skye', 
      image01:Skye
    },
    {
      nameId:'Cypher', 
      image01:Cypher
    },
    {
      nameId:'Sova', 
      image01:Sova,
    },
    {
      nameId:'Killjoy', 
      image01:Killjoy,
    },
    {
      nameId:'Harbor', 
      image01:Harbor,
    },
    {
      nameId:'Viper', 
      image01:Viper,
    },
    {
      nameId:'Phoenix', 
      image01:Phoenix,
    },
    {
      nameId:'Astra', 
      image01:Astra,
    },
    {
      nameId:'Brimstone', 
      image01:Brimstone,
    },
    {
      nameId:'Neon', 
      image01:Neon,
    },
    {
      nameId:'Yoru', 
      image01:Yoru,
    },
    {
      nameId:'Sage', 
      image01:Sage,
    },
    {
      nameId:'Reyna', 
      image01:Reyna,
    },
    {
      nameId:'Omen', 
      image01:Omen,
    },
    {
      nameId:'Jett', 
      image01:Jett,
    },
  ]

  function teste02(agentImg: any){
      let index = imgAgents.findIndex(i => i.nameId === agentImg)
      return index
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return(
    <section className="w-full flex flex-col justify-start px-16 pt-12">
      <h1 className="text-white-100 text-4xl pb-8">{selectPage === 'agents'? 'Agents' : 'Maps'}</h1>
      <div className="w-full flex">
      </div>
      {selectPage === 'agents'?
      <Carousel responsive={responsive} className="flex">
        {removingDuplicateAgents.map((agent)=>{
          return(
            <div 
            key={agent.uuid} 
            className="p-6 first-of-type:pl-3"
            >
              <Card name={agent.displayName} imageAgent={imgAgents[teste02(agent.displayName)]?.image01} />
              </div>
          )
        })}
      </Carousel>:
      <Carousel responsive={responsive} className="flex">
        {maps.map((map)=>{
          return(
            <div 
            key={map.uuid} 
            className="p-6 first-of-type:pl-3"
            >
              <Card name={map.displayName} imageAgent={map.splash} />
              </div>
          )
        })}
      </Carousel>
      }
    </section>
  )
}