import Modal from 'react-modal';
import { FaApple, FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosClose } from "react-icons/io";


interface ModalTypes {
  closeModal: ()=>void
  modalIsOpen: boolean
}

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    border:'none'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#ffff',
    border: 'none',
  },
};

export function Modals({closeModal, modalIsOpen}:ModalTypes){

  let subtitle: HTMLHeadingElement;


  // function afterOpenModal() {
  //   subtitle.style.color = '#f00';
  // }

  
  return(
    <>
      <Modal
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <button className='bg-[#c30004] absolute top-0 right-0' onClick={closeModal}><IoIosClose size={30} color={'white'} /></button>
      <div className='flex flex-col gap-8 justify-center items-center'>
        <h2 className='text-gray-100 text-lg'>Sign In</h2>
        <form className='flex flex-col mt-4 gap-2 justify-center items-center text-purple-400'>
          <input 
            className='flex rounded px-2 py-1 border-solid border border-purple-100 font-semibold placeholder:text-[8px] placeholder:self-center focus:outline-none focus:border-purple-400' 
            type='text' 
            placeholder='USERNAME'
          />
          <input
            className='items-center rounded px-2 py-1 border-solid border border-purple-100 font-semibold placeholder:text-[8px] focus:outline-none focus:border-purple-400' 
            type='password' 
            placeholder='PASSWORD'
          />
        </form>
          <div className='w-full flex items-center justify-between text-white' >
            <button className='w-[70px] h-[30px] flex justify-center items-center bg-purple-100 p-2 rounded hover:bg-purple-200'><FaFacebook /></button>
            <button className='w-[70px] h-[30px] flex justify-center items-center bg-purple-100 p-2 rounded hover:bg-purple-200'><FaGoogle /></button>
            <button className='w-[70px] h-[30px] flex justify-center items-center bg-purple-100 p-2 rounded hover:bg-purple-200'><FaApple /></button>
        </div>
        <button className='rounded border border-1 border-gray-100 hover:border-purple-100 p-2 text-gray-100 hover:text-purple-200'><MdKeyboardArrowRight size={20}/></button>
        <div className='flex flex-col items-center justify-center text-[8px] text-black'>
          <p className='hover:text-purple-100'>CREATE ACCOUNT</p>
        </div>
      </div>
    </Modal>
    </>
  )
}