import React from 'react'
import { ContactUs } from '../Components/ContactUs'
 import { Footer } from "../Components/Footer";
const About = () => {
  return (
    <div className='text-white flex flex-col justify-center items-center mt-[50px]'>
       <style>
      {`
        body {
          overflow-x: hidden;
        }
      `}
    </style>
    <div>
      <section className="container mt-5">
        <h2 className="text-center mb-4 font-serif">About YouTube Layer</h2>

        <p className='font-mono'>
          Welcome to YouTube Layer, your go-to destination for engaging and informative content! We are passionate about providing quality tutorials, tips, and insights to our viewers.
        </p>

        <p>
          Our mission is to make cool intractive between YouTuber and Editor so that a youTuber can never face problem for searching a good editor.
        </p>

        <h3 className="mt-4 font-serif">What You'll Find Here:</h3>
        <ul className='font-mono'>
          <li>🫂Best Intraction between YouTuber and Editor</li>
          <li>💡 Project showcases and vedio Editing</li>
          <li>🌐 Edited vedio upload on YouTube and make money Transfer</li>
        </ul>

        <h3 className="mt-4 font-serif">Meet the Team:</h3>
        <p className='font-mono'>
          Our team is a passionate group of individuals dedicated to creating high-quality content for our audience. We believe in the power of knowledge-sharing and community building.
        </p>
        
        <div className='flex mx-auto gap-12'>
          <img src='https://res.cloudinary.com/du6cdpmzi/image/upload/v1710073017/samples/WhatsApp_Image_2023-12-20_at_01.53.34_jg6cyv.jpg' width={120} height={100} className='rounded-[50%]' alt='Ankul Raja Patel'/>

          <img src='https://res.cloudinary.com/du6cdpmzi/image/upload/v1710073016/samples/WhatsApp_Image_2024-03-08_at_15.18.42_kgjylq.jpg' width={120} height={100} className='rounded-[50%]' alt='Kamna Jain'/>
          <img src='https://res.cloudinary.com/du6cdpmzi/image/upload/v1710065398/samples/my_pic_ptcezp.jpg' width={120} height={100} className='rounded-[50%]' alt='Priyanshu jaiswal'/>
        </div>
        <div className='flex gap-16 font-serif '>
        <span className='text-orange-500'>Ankul Raja Patel</span>
        <span className='text-white'>Kamna Jain</span>
        <span className='text-green-400'>Priyanshu Jaiswal</span>
</div>


        <ContactUs className="mb-48"></ContactUs>
        
      </section>
    </div>
    <div className='w-[100vw]'>
      <Footer className="footer"/>
    </div>
     
    </div>
  )
}

export default About