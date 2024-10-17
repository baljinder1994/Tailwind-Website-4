import { useState } from 'react'

import {FaApple, FaArrowRight, FaGoogle, FaHeadphones, FaMicrophoneAlt, FaMusic, FaSpotify} from 'react-icons/fa'

function App() {
 
  const episodes=[
    {
      title:'Ep 4: Lorem Ipsum is simply dummy text of the printing and typesetting industry ',
      category:"Career",
      date:"September 6,2024",
      time:'25min',
      image:'img3.webp'
    },
    {
      title:'Ep 4: Lorem Ipsum is simply dummy text of the printing and typesetting industry ',
      category:"Career",
      date:"September 6,2024",
      time:'25min',
      image:'img4.webp'
    },
    {
      title:'Ep 4: Lorem Ipsum is simply dummy text of the printing and typesetting industry ',
      category:"Career",
      date:"September 6,2024",
      time:'25min',
      image:'img3.webp'
    },
    {
      title:'Ep 4: Lorem Ipsum is simply dummy text of the printing and typesetting industry ',
      category:"Career",
      date:"September 6,2024",
      time:'25min',
      image:'img3.webp'
    },

    {
      title:'Ep 4: Lorem Ipsum is simply dummy text of the printing and typesetting industry ',
      category:"Career",
      date:"September 6,2024",
      time:'25min',
      image:'img3.webp'
    },

    {
      title:'Ep 4: Lorem Ipsum is simply dummy text of the printing and typesetting industry ',
      category:"Career",
      date:"September 6,2024",
      time:'25min',
      image:'img4.webp'
    },

  ]

  return (
    <>
     <div className='bg-gradient-to-b from-[#480048] via-[#c04848] to-[#f56991] min-h-screen  flex flex-col items-center justify-center text-white'>
      <nav className='absolute top-0 w-full flex justify-between px-8 py-4'>
        <div className='text-xl font-bold'>BaL</div>
        <div className='flex space-x-6'>
          <a href="#home"className='hover:text-pink-300'>Home</a>
          <a href="#episode"className='hover:text-pink-300'>Episode</a>
          <a className='hover:text-pink-300'>Contact</a>
          <a className='hover:text-pink-300'>Pages</a>
        </div>
        <button className='bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg md:block hidden'>Get For Free</button>
      </nav>
     <div className='flex flex-col items-center md:flex-row lg:justify-between lg:flex-row lg:px-24 mt-16 lg:mt-0'>
      <div className='text-center lg:text-left lg:max-w-md'>
        <h1 className='text-3xl md:text-5xl font-bold mb-4 leading-tight'>Launch your podcast website with Bal</h1>
      <p className='mb-6 text-gray-200 '>Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.</p>
     
      <div className='flex space-x-4 justify-center lg:justify-start'>
        <button className='bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-lg'>Subscribe</button>
        <button className='bg-gray-200 text-pink-500 hover:bg-gray-300 py-3 px-6 rounded-lg'>Latest Episode</button>
      </div>
      </div>

      <div className='mt-8 lg:mt-0 lg:ml-12 grid grid-cols-2  gap-4'>
        <div className='w-48 h-48'>
          <img src="img3.webp" className='rounded-lg w-full h-full object-cover'></img>
        </div>
        <div className='w-48 h-48'>
          <img src="img4.webp"  className='rounded-lg w-full h-full object-cover'></img>
        </div>
        <div className='w-48 h-48'>
          <img src="img3.webp"  className='rounded-lg w-full h-full object-cover'></img>
        </div>

        <div className='flex flex-col justify-center text-left'>
          <p className='text-gray-200 mb-2'>Available on</p>
          <ul className='space-y-4'>
            <li className='flex items-center'>
              <div className='bg-white p-2 rounded-full text-pink-600 mr-4'>
                <FaApple size={20}/>
              </div>
              <span>Apple Podcast</span>
            </li>
            <li className='flex items-center'>
              <div className='bg-white p-2 rounded-full text-pink-600 mr-4'>
                <FaGoogle size={20}/>
              </div>
              <span>Google Podcast</span>
            </li>
            <li className='flex items-center'>
              <div className='bg-white p-2 rounded-full text-pink-600 mr-4'>
                <FaSpotify size={20}/>
              </div>
              <span>Spotify Podcast</span>
            </li>
          </ul>
        </div>
      </div>
     </div>
     </div>

     <div className='py-16 px-8 mx-20' >
       <div>
        <h2 className='text-pink-600 font-bold text-sm uppercase'>Most Popular Category</h2>
        <h1 className='text-4xl font-bold text-gray-900 mt-2'>Get Started with our featured category show.</h1>
       </div>

       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
        <div className='relative overflow-hidden rounded-xl group'>
          <img src="img3.webp" className='w-full object-cover transform transition-transform duration-500 group-hover:scale-110'></img>
        <div className='absolute top-4 right-4 flex space-x-2'>
          <span className='p-2 bg-white rounded-full'><FaMicrophoneAlt className='text-pink-500'/></span>
          <span className='p-2 bg-white rounded-full'><FaHeadphones className='text-pink-500'/></span>
          <span className='p-2 bg-white rounded-full'><FaMusic className='text-pink-500'/></span>
        </div>
        </div>

        <div className='relative overflow-hidden rounded-xl group'>
          <img src="img4.webp" className='w-full  object-cover transform transition-transform duration-500 group-hover:scale-110'></img>
        <div className='absolute top-4 right-4 flex space-x-2'>
          <span className='p-2 bg-white rounded-full'><FaMicrophoneAlt className='text-pink-500'/></span>
          <span className='p-2 bg-white rounded-full'><FaHeadphones className='text-pink-500'/></span>
          <span className='p-2 bg-white rounded-full'><FaMusic className='text-pink-500'/></span>
        </div>
        </div>

        <div className='relative overflow-hidden rounded-xl group'>
          <img src="img3.webp" className='w-full object-cover transform transition-transform duration-500 group-hover:scale-110'></img>
        <div className='absolute top-4 right-4 flex space-x-2'>
          <span className='p-2 bg-white rounded-full'><FaMicrophoneAlt className='text-pink-500'/></span>
          <span className='p-2 bg-white rounded-full'><FaHeadphones className='text-pink-500'/></span>
          <span className='p-2 bg-white rounded-full'><FaMusic className='text-pink-500'/></span>
        </div>
        </div>
       </div>
     </div>

     {/*section 3*/}
     <div className='py-16 px-8 bg-gray-50'>
      <div className='text-start mb-12'>
        <h2 className='text-pink-600 font-bold text-2xl uppercase'>About Our Show</h2>
        <h1 className='text-5xl font-bold text-gray-900 mt-2'>Awareness and Presense in Everyday Moments</h1>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        <div className='grid grid-cols-2 gap-4'>
          <img src="img.png" className='w-full rounded-lg grid col-span-2'></img>
      </div>

      <div>
        <p className='text-gray-700 mb-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    
      <button className='bg-pink-500 text-white py-2 px-6 rounded-full flex items-center hover:bg-pink-600'>
        <span>Subscribe</span><FaArrowRight className='ml-2'/>
        </button>
        <div className='mt-16'>
          <div className='bg-white shadow-md rounded-lg p-6 flex justify-around items-center'>

           <div className='text-center'>
           <span className='text-4xl font-bold text-gray-900'>06</span>
           <p className='text-pink-500 font-bold'>Studio</p>
           </div>

           <div className='text-center'>
           <span className='text-4xl font-bold text-gray-900'>25</span>
           <p className='text-pink-500 font-bold'>Years Of Experience</p>
           </div>

           <div className='text-center'>
           <span className='text-4xl font-bold text-gray-900'>1M+</span>
           <p className='text-pink-500 font-bold'>Happy Listener</p>
           </div>

          </div>
        </div>
     </div>
     </div>
     </div>
     
     <div className='bg-gray-50 py-12 px-8'>

      <div className='max-w-7xl mx-auto text-center mb-8'>
        <h3 className='text-pink-500 font-semibold uppercase'>Lost Popular Category</h3>
        <h2 className='text-4xl font-bold text-gray-800 mb-6'>All of our latest episodes</h2>
      </div>

      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        
          {episodes.map((episode) =>(
            <div key={episode} className='relative overflow-hidden rounded-lg shadow-md'>
              <div className='group'>
                <img src={episode.image} className='w-full h-60 object-cover group-hover:scale-105 group-hover:brightness-110 transition-transform duration-300'></img>
                <div className='absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent w-full p-4'>
                  <p className='text-white text-sm'>{episode.category}</p>
                  <h3 className='text-lg font-bold text-white'>{episode.title}</h3>

                  <p className='text-white text-xs mt-1'>{episode.date}</p>

                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='text-center mt-8'>
          <button className='px-6 py-2 bg-pink-500 text-white font-semibold rounded-full'>View All Episodes</button>
        </div>
      </div>
     
     <div className='bg-gradient-to-b from-[#531f53] to-pink-600 relative py-20'>
       <div className='text-center text-white mb-12'>
        <p className='text-pink-300 uppercase font-semibold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        <h2 className='text-4xl font-bold'>What they're saying about us</h2>
       </div>

       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-20'>
        <div className='bg-white bg-opacity-10 p-6 rounded-xl shadow-lg hover:bg-opacity-20 trasition'>
          <div className='flex items-center mb-4'>
            <img src="img3.webp" className='w-12 h-12 rounded-full mr-3'></img>
          
          <div>
            <h3 className='text-lg font-semibold text-white'>Baljinder</h3>
            <p className='text-sm text-gray-300'>Web Developer</p>
          </div>
        </div>
        <p className='text-gray-200'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
       </div>

       <div className='bg-white bg-opacity-10 p-6 rounded-xl shadow-lg hover:bg-opacity-20 trasition'>
          <div className='flex items-center mb-4'>
            <img src="img3.webp" className='w-12 h-12 rounded-full mr-3'></img>
          
          <div>
            <h3 className='text-lg font-semibold text-white'>Baljinder</h3>
            <p className='text-sm text-gray-300'>Web Developer</p>
          </div>
        </div>
        <p className='text-gray-200'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
       </div>

          
       <div className='bg-white bg-opacity-10 p-6 rounded-xl shadow-lg hover:bg-opacity-20 trasition'>
          <div className='flex items-center mb-4'>
            <img src="img3.webp" className='w-12 h-12 rounded-full mr-3'></img>
          
          <div>
            <h3 className='text-lg font-semibold text-white'>Baljinder</h3>
            <p className='text-sm text-gray-300'>Web Developer</p>
          </div>
        </div>
        <p className='text-gray-200'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
       </div>
       <div className='bg-white bg-opacity-10 p-6 rounded-xl shadow-lg hover:bg-opacity-20 trasition'>
          <div className='flex items-center mb-4'>
            <img src="img3.webp" className='w-12 h-12 rounded-full mr-3'></img>
          
          <div>
            <h3 className='text-lg font-semibold text-white'>Baljinder</h3>
            <p className='text-sm text-gray-300'>Web Developer</p>
          </div>
        </div>
        <p className='text-gray-200'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
       </div>
       <div className='bg-white bg-opacity-10 p-6 rounded-xl shadow-lg hover:bg-opacity-20 trasition'>
          <div className='flex items-center mb-4'>
            <img src="img3.webp" className='w-12 h-12 rounded-full mr-3'></img>
          
          <div>
            <h3 className='text-lg font-semibold text-white'>Baljinder</h3>
            <p className='text-sm text-gray-300'>Web Developer</p>
          </div>
        </div>
        <p className='text-gray-200'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
       </div>
       <div className='bg-white bg-opacity-10 p-6 rounded-xl shadow-lg hover:bg-opacity-20 trasition'>
          <div className='flex items-center mb-4'>
            <img src="img3.webp" className='w-12 h-12 rounded-full mr-3'></img>
          
          <div>
            <h3 className='text-lg font-semibold text-white'>Baljinder</h3>
            <p className='text-sm text-gray-300'>Web Developer</p>
          </div>
        </div>
        <p className='text-gray-200'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
       </div>
       </div>

       
     </div>

     <section className='bg-white py-10'>
      <div className='max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative'>
        <div className='text-center md:text-left'>
          <h3 className='text-pink-500 font-bold uppercase'>About The Host</h3>
          <h2 className='text-4xl font-bold mb-4'>Meet our host</h2>
          <p className='text-gray-600 mb-4 text-justify text-2xl'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
          </p>
          

          <div className='flex justify-center md:justify-start space-x-4'>
            <button className='bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 trasition duration-300'>Suscribe</button>
            <button className='border border-gray-400 px-6 py-2 rounded-full hover:bg-gray-200 trasition duration-300'>Latest Episode</button>
          </div>
        </div>

        <div className='relative flex'>
          <div className='w-32 md:w-40 h-48 md:h-56 rounded-lg'>
            <img className='object-cover w-full h-full' src="img3.webp"></img>
          </div>

          <div className='absolute bg-white shadow-lg rounded-lg p-4 flex items-center space-x-4 bottom-8 md:bottom-16'>
            <div>
              <h4 className='font-bold text-lg'>Baljinder</h4>
              <p className='text-gray-500'>What is Lorem Ipsum </p>
              <div className='flex space-x-2 mt-2'>
                <a href="#"><i className='fab fa-instagram'></i></a>
                <a><i className='fab fa-facebook'></i></a>
                <a><i className='fab fa-twitter'></i></a>
                <a><i className='fab fa-linkedin'></i></a>
              </div>
            </div>
          </div>

          <div className='w-full h-full rounded-lg overflow-hidden shadow-lg ml-4 md:ml-10'>
            <img src="img4.webp" className='object-cover w-full'></img>
          </div>
        </div>

      </div>
     </section>

     <section className='relative bg-gradient-to-b from-purple-900 to-pink-900 text-white py-20'>
      <div className='max-w-4xl  mx-auto text-center'>
        <h2 className='text-3xl font-bold mb-4'>Get Notified every time we post a new episode</h2>
        <p className='text-gray-300 mb-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      
       <div>
        <input
         type="email"
         placeholder="Your email"
         className='px-4 py-3 w-64 rounded-full border border-gray-300 text-gray-800'
        ></input>
        <button className='px-6 py-3 bg-pink-500 rounded-full text-white hover:bg-pink-600'>Submit</button>
       </div>
      </div>
     </section>
     <footer className='border-t border-gray-300 py-4'>
      <div className='container mx-auto flex justify-between items-center px-4'>
        <p className='text-gray-500'>&copy; All rights reserved</p>
        <a href="#" className='text-gray-500'>BaL</a>
      </div>
     </footer>
    </>
  )
}

export default App
