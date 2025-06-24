import React from 'react'
import Home from './Components/Home'
const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4'>

      {/* Heading */}
      <div className='text-center mb-8'>
        <h1 className='text-5xl font-bold text-gray-800 mb-2'>
          AI Image Enhancer{""}

        </h1>
        <p className='text-lg text-gray-400'>Upload your Image and let AI enhance yo in second</p>
      </div>

      {/* Home component */}
      <Home />
      
      {/* Footer */}
      <div className='text-sm text-gray-500 mt-6'>Powered by @DeepakAI</div>
    </div>
  )
}

export default App
