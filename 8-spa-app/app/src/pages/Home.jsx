import React from 'react'
import GetStarted from '../components/Buttons/GetStarted'
const Home = () => {
    return (
        <div className='bg-green-500 w-full h-full'>
            <div className='flex w-full h-full flex-col items-center justify-center'>
                <h1 className='text-4xl text-white tracking-tight'>Create your CV quickly and professionally here</h1>
                <div className='mt-4'>
                    <GetStarted />
                </div>
            </div>
        </div>
    )
}

export default Home