import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-900'>
      <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
        <div>
        <div className='grid grid-cols-2 gap-5 lg:col-span-5 md:grid-cols-4 '>
            <div>
              <p className='font-medium text-gray-300 tracking-wide'>Category</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>News</a>
                </li>
                <li>
                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>World</a>
                </li>
                <li>
                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Games</a>
                </li>
                <li>
                    <a href="/" className='text-gray-500 transition-colors duration-300 hover:taxt-orange-500'>Refrences</a>
                </li>
              </ul>
            </div>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Footer
