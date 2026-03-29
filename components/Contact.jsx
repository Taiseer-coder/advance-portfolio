import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
    const contact_info = [
        {
            icon: <MdEmail/>,
            text: 'codeaprogram@gmail.com',
        },
        {
            icon: <BsWhatsapp/>,
            text: '776231475',
        },
    ]
  return (
    <section id='contact' className='py-10 px-3  text-white'>
      <div className='text-center mt-8'>
        <h3 className='text-4xl font-semibold'>
          My <span className='text-cyan-600'> Projects</span>
        </h3>
        <p className='text-gray-600 mt-3 text-lg'> My Awesome Works </p>

        <div className='mt-16 flex md:flex-row flex-col  gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto'>

           <form className='flex flex-col flex-1 gap-5 '>

            <input type='text'  placeholder='Your Name ' />
            <input type='email'  placeholder='Your Email ' />

            <textarea placeholder='Your Message ' rows={10} />

            <button className=' btn-primery w-fit'>Send Message </button>

           </form>
           <div className='flex flex-col gap-7'>
             {contact_info.map((info, index) => (
               <div className=' flex items-center gap-4 w-fit' key={index}>
                 <div className=' min-w-[3.5rem] text-3x min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full' >
                   {info.icon}
                 </div>
                 <p  className='text-base'>{info.text}</p>
               </div>
             ))}
             

           </div>
        </div>
      </div>
      
        
    </section>
  )
}

export default Contact