'use client'
import {BsFillFilePersonFill} from 'react-icons/bs'
import { TbHexagonLetterJ } from "react-icons/tb";
import {FiMap} from 'react-icons/fi'
import Image from 'next/image';
import {useContext, useState} from 'react'
import { AgentsContext } from '@/app/page';
import { Modals } from '@/patters/Modal';




export function Header(){
  const {setSelectPage} = useContext(AgentsContext)
  const [modalIsOpen, setIsOpen] = useState(false);

  
  function closeModal() {
    setIsOpen(false);
  }
 
  function openModal() {
    setIsOpen(true);
  }

  return(
    <header className="w-full flex justify-between items-center px-9">
      <ul className="flex justify-between items-center gap-4">
        <li className="flex items-center justify-center hover:text-white-100 cursor-pointer"><TbHexagonLetterJ size={35}/></li>
        <li className="flex items-center justify-center text-3xl"> | </li>
        <li className="flex items-center justify-center gap-2 hover:text-white-100 cursor-pointer" onClick={()=>setSelectPage('agents')}><BsFillFilePersonFill/> Agents</li>
        <li className="flex items-center justify-center gap-2 hover:text-white-100 cursor-pointer" onClick={()=>setSelectPage('maps')}><FiMap /> Maps</li>
      </ul>
      <nav className='flex justify-center items-center gap-4'>
        <a 
          href="#"
          className="h-[45px] w-[80px] flex justify-center items-center bg-purple-100 rounded p-2 inline-block text-white-100 text-xs hover:bg-purple-200"
          onClick={openModal}
        >
          + CREATE</a>
        <Image
          className='h-full rounded' 
          alt=''
          src={'https://pbs.twimg.com/media/EhgVaPcWkAA1c01.jpg'}
          width={45}
          height={40}
        />
        <Modals closeModal={closeModal} modalIsOpen={modalIsOpen}/>
      </nav>
    </header>
  )
}