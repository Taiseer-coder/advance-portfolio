import React from 'react'

const Navbar = () => {
  const menuLinks = [
    {name : 'HOME' ,link : '#home'},
    {name : 'ABOUT' ,link : '#about'},
    {name : 'SKILLS' ,link : '#skills'},
    {name : 'PROJECTS' ,link :'#projects'},
    {name : 'CONTACT' ,link : '#contact'},
  ];
  return (
<nav>
        <div className='items-center justify-between flex '>
            <div className=" mx-7 ">
                <h4 className='text-4xl uppercase font-bold'>
                    t<span className='text-cyan-600'>aisee</span>R
                </h4>
            </div>
            <div  className=' text-gray-900 sm:block hidden px-7 py-2 font-medium 
            bg-white rounded-bl-full'>
                <ul className=' flex items-center gap-1 py-2 text-lg'>
                    {menuLinks?.map((menu,i) => (
                        <li key={i} className='px-6 hover:text-cyan-600' >

                          <a href={menu?.link}> {menu?.name}</a>
                        </li>
                      )) 
                    }
                </ul>
            </div>
        </div>
    </nav>   
    
  )
}

export default Navbar