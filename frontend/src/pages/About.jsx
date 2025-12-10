import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque necessitatibus, officia laudantium doloribus, saepe animi quae aliquid minus aliquam assumenda numquam provident hic accusamus labore officiis! Corporis totam molestiae nostrum quo natus minima illum eius ipsam obcaecati. Architecto, ab veniam est harum repellendus sit, asperiores aut, doloribus aliquid culpa quae.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quibusdam ullam molestias blanditiis, quos accusantium commodi impedit iure necessitatibus, sequi facere omnis, nihil voluptas laboriosam vero nulla. Cum, assumenda ipsa.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui temporibus deleniti culpa. Assumenda minus facilis consequuntur perferendis esse cumque quis!</p>
        </div>
      </div>

      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum hic iure aliquid corrupti aut aliquam.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convinience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem libero veritatis velit repellendus deserunt ipsum.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ad sunt at.</p>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default About