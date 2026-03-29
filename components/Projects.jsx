import React from 'react'
import 'swiper/css'
import image from '../public/images/image4.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import "swiper/css/pagination"

const Projects = () => {
  const projects = [
    { 
      img :image ,
      name:'Personal project ',
      github_link:'https://github.com/Taiseer-coder/my-portfolio',
      live_link:'https://taiseer-1-portfolio.netlify.app/'
    },
    { 
      img :image ,
      name:' Advance Personal project ',
      github_link:'https://github.com/Taiseer-coder/advance-portfolio',
      live_link:'https://taiseer-2-portfolio.netlify.app/'
    },
    { 
      img :image ,
      name:' Personal project ',
      github_link:'https://github.com/Taiseer-coder/my-portfolio',
      live_link:'https://taiseer-1-portfolio.netlify.app/'
    },
    
    { 
      img :image ,
      name:' Advance Personal project ',
      github_link:'https://github.com/Taiseer-coder/advance-portfolio',
      live_link:'https://taiseer-2-portfolio.netlify.app/'
    },
  ]
  return (
    <section id='projects' className='py-10 px-3  text-white'>
      <div className='text-center mt-8'>
        <h3 className='text-4xl font-semibold'>
          My <span className='text-cyan-600'> Projects</span>
        </h3>
        <p className='text-gray-600 mt-3 text-lg'> My Awesome Works </p>
      </div>
      <br/>
      <div className='flex max-w-6xl px-5 mx-auto items-center relative '>
        <div className=' px-4 lg:w-2/3 w-full'>

        <Swiper 
          className="mySwiper"
        slidesPerView={1} 
        spaceBetween={20} 
        breakpoints={{
           
            768: {
              slidesPerView: 2, // تابلت
            },
            
        }}
        loop={true}
        autoplay={{ delay: 3000 }} 
        pagination={{ clickable: true }}
        modules={[Pagination,Autoplay]}
        >
        {
          projects.map((project,index) => (
            <SwiperSlide key={index}>
            <div   className=' h-fit w-full p-4  bg-slate-700 rounded-xl'>
              <img  src={project.img} alt='' className='rounded-lg'/>
              <h3 className=' text-xl my-4'>{project.name}</h3>
              <div className=' flex gap-3'>
                <a href={project.github_link} target='_blank' rel='noopener noreferrer' className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block' >
                  Github
                </a>
                <a href={project.live_link} target='_blank' rel='noopener noreferrer' className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block' >
                  Live Demo 
                </a>

              </div>
            </div>
          </SwiperSlide>
          

        ))}
        </Swiper>

        </div>
        <div className=' lg:block hidden'>
          <img src={image} alt=''/>
        </div>

      </div>


        
    </section>  )
}

export default Projects