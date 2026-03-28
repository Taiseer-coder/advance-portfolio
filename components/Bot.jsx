import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
 
const Bot = () => {
  return (
    <>
    <div className=" fixed bottom-5 sm:right-8 
     right-4 z-/[999]/ curser-pointer text-4xl bg-cyan-600
      w-16  h-16 text-white flex items-center 
      justify-center rounded-full animate-bounce">
        
        <BsWhatsapp/>
        {/* <Ion-icon icon={chatbubble-ellipses} ></Ion-icon>  */}

    </div>
    </>
  )
}

export default Bot