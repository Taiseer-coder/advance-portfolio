import React from 'react'
import { DiCss3, DiHtml5, DiNodejs } from 'react-icons/di'
import { FaNodeJs, FaReact } from 'react-icons/fa'

const Skills = () => {
  const skills =[
{    logo :<DiHtml5/> , level : 'Advance' , count:86},
{    logo :<DiCss3/> , level : 'Expect' , count:90},
{    logo :<FaNodeJs/> , level : 'Beginner' , count:40},
{    logo :<FaReact/> , level : 'Intermediate' , count:80},
 
  ]
  return (
    <>
    <section id='skills' className=' py-10 bg-gray-800 relative '>
        <div className='mt-8 text-gray-100 text-center'>
          <h3 className=' text-4xl font-semibold'> 
            My<span className=' text-cyan-600'> Skills</span>
          </h3>
          <p className=' text-gray-400 mt-3 text-lg '>My Knowledge</p>
          <div className=' flex items-center mt-12 justify-center gap-10 flex-wrap'>
            {
              skills?.map((skill,i)=>(
                <div key={i} className=' border-2 group  border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl '>
              <div style={{
                background:`conic-gradient(rgb(8,145,170) ${skill.count}% ,#ddd ${skill.count}%  )`,
              }} className=' w-32 h-32 flex items-center justify-center rounded-full' >
                <div className='text-6xl w-28  h-28 flex items-center justify-center 
                 bg-gray-900 rounded-full group-hover:text-cyan-600'>
                  {skill.logo}
                </div>
              </div>
              <p className='mt-3 text-xl'> {skill.level} </p>
            </div>
              ))
            }
          </div>
        </div>
    </section>
    </>
  )
}

export default Skills