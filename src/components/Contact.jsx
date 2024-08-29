import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full min-h-screen bg-[#0a192f] flex justify-center items-center pt-[75px]'>
        <form method='POST' action="https://getform.io/f/aqonwxya" className='flex flex-col max-w-[800px] w-full px-4'>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Whether you have a project in mind, an opportunity to discuss, or just want to say hello, feel free to drop a message. I will be excited to connect with you!</p>
            </div>
            <input className='bg-[ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='mt-4 mb-2 p-2 bg-[ccd6f6]' type="text" placeholder='Email' name='email' />
            <input className='mt-2 mb-4 p-2 bg-[ccd6f6]' type="text" placeholder='Subject' name='subject' />
            <textarea className='bg-[ccd6f6] p-2' placeholder='Message' name="message" rows="7"></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 my-4 mx-auto flex items-center'>Let's Collaborate!</button>
        </form>
    </div>
  )
}

export default Contact