import React from 'react'
// import './Home.css'
import { FaArrowRight } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

export const Home = () => {
  
  const navigate = useNavigate();

  function clickHandler(){
    navigate("/login");
  }
  return (
    <div className='flex flex-col min-h-screen mt-[40px]'>
      <div className='flex flex-col items-center'>
        <h2 className='text-[50px] mt-[120px] text-[#eabc3c] mb-[25px]'>
            Connect with the Best Video Editors
        </h2>
        <h2 className='mb-[20px] text-lg'>Your raw videos transformed into captivating content</h2>
        <div className='flex gap-x-[50px]'>
          <button onClick={clickHandler} className='bg-[#5793e8] p-[5px] w-[130px]'>
            Get Started
          </button>
          <div className='flex gap-x-2 items-center'>
            <a className='text-bold  hover:cursor-pointer' onClick ={()=> navigate("/About")} >Learn More</a>
            <span>
            <FaArrowRight></FaArrowRight>
            </span>
          </div>
        </div>
      </div>
      <div className='mt-[120px] flex flex-col items-center bg-[#e0c067fe] pt-[50px] py-[100px] text-black px-[20px]'>
        <div>
          <h2 className='font-thin'>Features</h2>
        </div>
        <div>
          <h1 className='text-[30px] mb-[20px]'>Unlock the power of Collaboration</h1>
        </div>
        <div>
          <h2 className=''>Discover the features that make our platform the perfect bridge between YouTubers and video editors</h2>
        </div>
        <div className='grid grid-rows-2 grid-flow-col gap-4 mt-[40px] text-black'>
          <div className='bg-[#ddb956fe] p-[20px] flex gap-x-4 '>
              <span className='pt-[7px]' ><FaPlay /></span>
              <div>
                <h1 className='text-[21px]'>Submit Raw Videos</h1>
                <h2>YouTubers can easily submit their raw, unedited videos to our platform</h2>
              </div>
          </div>
          <div className='bg-[#ddb956fe] p-[20px] flex gap-x-4 '>
              <span className='pt-[7px]' ><FaPlay /></span>
              <div>
                <h1 className='text-[21px]'>Review and Approve Edits</h1>
                <h2>You have full control over the editing process and can approve the final version</h2>
              </div>
          </div>
          <div className='bg-[#ddb956fe] p-[20px] flex gap-x-4 '>
              <span className='pt-[7px]' ><FaPlay /></span>
              <div>
                <h1 className='text-[21px]'>Connect with Skilled Editors</h1>
                <h2>Access a pool of talented video editors who can enhance your content</h2>
              </div>
          </div>
          <div className='bg-[#ddb956fe] p-[20px] flex gap-x-4 '>
              <span className='pt-[7px]' ><FaPlay /></span>
              <div>
                <h1 className='text-[21px]'>Seamless Upload to YouTube</h1>
                <h2>Once approved, your edited video will be directly uploaded to your YouTube channel</h2>
              </div>
          </div>
        </div>
      </div>
      <div className='mt-[150px] flex flex-col items-center'>
        <h3 className='text-sm font-thin'>PRICING</h3>
        <h1 className='text-[40px] mt-[15px] mb-[15px]'>Choose the Perfect Plan for You</h1>
        <h2>Unlock the power of professional video editing for your YouTube channel</h2>
        <div className='mt-[60px] flex gap-x-4'>
          <div className='bg-[#e4c672fe] text-black p-[25px] flex flex-col h-[530px] rounded-md'>
            <h2 className='text-[20px] mb-[20px]'>FREE</h2>
            <h1 className='mb-[7px]'>Access to basic video editing features</h1>
            <span>$<span className='text-[70px] font-bold'>0</span></span>
            <ul className='mt-[40px] mb-[40px]'>
              <li className='flex gap-x-2 items-center mb-[15px]'><span ><GiCheckMark/></span>Limited video editing options</li>
              <li className='flex gap-x-2 items-center mb-[15px]'><span><GiCheckMark/></span>Up to 5 minutes of video editing per month</li>
              <li className='flex gap-x-2 items-center'><span><GiCheckMark/></span>Watermarked Videos</li>
            </ul>
            <div className='flex-grow'></div>
              <button className=' w-full bg-black py-[3px] text-white rounded-md'>
                  Continue with Free
              </button>
          </div>
          <div className='bg-[#e4c672fe] text-black p-[25px] rounded-md'>
            <h2 className='text-[20px] mb-[20px]'>BASIC</h2>
            <h1 className='mb-[7px]'>Enhanced video editing capabilities</h1>
            <span>$ <span className='text-[70px] font-bold'>9.99</span><span>/ month</span></span>
            <ul className='mt-[40px] mb-[40px]'>
              <li className='flex gap-x-2 items-center mb-[15px]'><span><GiCheckMark/></span><span>All features of FREE plan</span></li>
              <li className='flex gap-x-2 items-center mb-[15px]'><GiCheckMark/><span className='inline'>Advanced video editing tools</span></li>
              <li className='flex gap-x-2 items-center mb-[15px]'><GiCheckMark/><span className='inline'>Up to 30 minutes of video editing per month</span></li>
              <li className='flex gap-x-2 items-center mb-[15px]'><GiCheckMark/><span className='inline'>No watermarks on videos</span></li>
              <li className='flex gap-x-2 items-center'><GiCheckMark/><span className='inline'>Priority support</span></li>
            </ul>
            <button className=' w-full bg-black text-white py-[3px] rounded-md'>
              Available soon
            </button>
          </div>
          <div className='bg-[#e4c672fe] text-black p-[25px] rounded-md'>
            <h2 className='text-[20px] mb-[20px]'>PRO</h2>
            <h1 className='mb-[7px]'>Professional-grade video editing experience</h1>
            <span>$ <span className='text-[70px] font-bold'>19.99</span>/ month</span>
            <ul className='mt-[40px] mb-[40px]'>
              <li className='flex gap-x-2 items-center mb-[15px]'><GiCheckMark/><span className='inline'>All features of BASIC plan</span></li>
              <li className='flex gap-x-2 items-center mb-[15px]'><GiCheckMark/><span className='inline'>Full access to all video editing features</span></li>
              <li className='flex gap-x-2 items-center mb-[15px]'><GiCheckMark/><span className='inline'>Unlimited video editing per month</span></li>
              <li className='flex gap-x-2 items-center mb-[15px]'><GiCheckMark/><span className='inline'>No watermarks on videos</span></li>
              <li className='flex gap-x-2 items-center'><GiCheckMark/><span className='inline'>24/7 priority support</span></li>
            </ul>
            <button className=' w-full bg-black text-white py-[3px] rounded-md'>
              Available Soon
            </button>
          </div>
        </div>
        <div>
          <div className='flex flex-col items-center mt-[200px]'>
            <h1 className='text-[40px] mb-[20px]'>
              Effortlessly Enhance Your YouTube Channel
            </h1>
            <h2 className='mx-[100px] text-center'>Submit your unedited videos to professional editors who will transform them into high-quality content that engages your audience. With our platform, you can easily collaborate with skilled editors and take your YouTube channel to the next level.</h2>
            <button className='mt-[30px] bg-[#5793e8] w-[120px] p-[5px] hover:cursor-pointer' onClick ={()=> navigate("/About")}>Learn More</button>
          </div>
        </div>
      </div>
      <div className='mt-[100px] flex px-[50px] pt-[60px] pb-[60px] bg-[#e2c060fe] text-black'>
        <div>
          <h3 className='text-sm font-thin'>FAQ</h3>
          <h1 className='text-[45px] font-bold'>Common Questions</h1>
          <h2 className='mt-[20px]'>Here are some of the most common questions that we get.</h2>
        </div>
        <div >
          <div className=''>
            <h2 className='mb-[5px] font-bold'>How does the submission process work?</h2>
            <h3>YouTubers can submit their raw, unedited videos to our platform. Editors will then edit the videos and return them for the YouTuber's approval.</h3>
          </div>
          <div className='mt-[20px]'>
            <h2 className='mb-[5px] font-bold'>Can I choose my own editor?</h2>
            <h3>Yes, you have the option to select an editor from our pool of talented professionals.</h3>
          </div>
          <div className='mt-[20px]'>
            <h2 className='mb-[5px] font-bold'>How long does the editing process usually take?</h2>
            <h3>The editing process duration may vary depending on the length and complexity of the video. However, our editors strive to deliver high-quality edits within a reasonable timeframe.</h3>
          </div>
          <div className='mt-[20px]'>
            <h2 className='mb-[5px] font-bold'>What happens after I approve the edited video?</h2>
            <h3>Once you approve the edited video, it will be seamlessly uploaded directly to your YouTube channel without any additional steps required from your end.</h3>
          </div>
        </div>
      </div>
      <div className='mt-[50px] flex flex-col items-center'>
        <div className='text-[40px] pb-[20px] border-b w-11/12 text-center'>
          Youtube Layer
        </div>
        <div className='flex justify-between w-11/12 my-[30px]'>
          <div className='flex items-center gap-x-2'>
            <span><FaRegCopyright /></span>2024 myCompany, All Rights Reserved.
          </div>
          <div className='flex gap-x-6 text-[25px]'>
            <i><FaTwitter /></i>
            <i><AiFillInstagram /></i>
            <i><FaFacebook /></i>
          </div>
        </div>
      </div>
    </div>
  )
}
