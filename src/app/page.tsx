"use client"
import Agents from "@/components/Agents"
import { AgentsMeta } from "@/components/AgentsMeta"
import { Header } from "@/components/Header"
import { Agent } from "http"
import { Roboto } from "next/font/google"
import { createContext, useState, useEffect, SetStateAction, Dispatch } from "react"

const roboto = Roboto({
    subsets:['latin'],
    weight:"400",
    variable: '--font-roboto',
})


interface valorantPropsType {
  map(arg0: (agent: any) => import("react").JSX.Element): any
  uuid: string,
  displayName: string,
  fullPortrait: string
  splash: string
  displayIcon: string
}

interface agentsContextType {
  agents: valorantPropsType
  maps: valorantPropsType
  selectPage: string
  setSelectPage: Dispatch<SetStateAction<string>>
  removingDuplicateAgents: valorantPropsType
}

export const AgentsContext = createContext({} as agentsContextType)


export default function Home() {
  const [agents, setAgents] = useState<valorantPropsType[]>([])
  const [maps, setMaps] = useState<valorantPropsType[]>([])
  const [selectPage, setSelectPage] = useState('agents')

  const setPerson = new Set();

  useEffect(()=>{
    fetch('https://valorant-api.com/v1/agents')
      .then(response => response.json())
      .then(data =>{
        setAgents(data.data)
      })
  },[])
  
  useEffect(()=>{
    fetch('https://valorant-api.com/v1/maps')
      .then(response => response.json())
      .then(data =>{
        setMaps(data.data)
      })
  },[])


  const removingDuplicateAgents = agents.filter((person) => {
    const duplicatedPerson = setPerson.has(person?.displayName);
    setPerson.add(person.displayName);
    return !duplicatedPerson;
  });

  return (
    <main className={`${roboto.variable} font-sans flex min-h-screen flex-col items-center justify-between py-6 text-gray-100 bg-purple-500`}>
      <AgentsContext.Provider value={{removingDuplicateAgents, selectPage, setSelectPage, maps}}>
        <Header />
        <Agents />
        <AgentsMeta />
      </AgentsContext.Provider>
    </main>
  )
}
