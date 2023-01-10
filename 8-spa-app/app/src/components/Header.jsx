import React from 'react'
import GetStarted from './Buttons/GetStarted';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='bg-green-600 fixed left-0 right-0 py-3'>
            <div className='max-w-[1200px] mx-auto w-full'>
                <div className="flex justify-between items-center">
                    <div>
                        <Link to="/" className='text-3xl font-bold text-white'>FCM</Link>
                    </div>
                    <div>
                        <ul className='flex gap-4 items-center'>
                            <li className='text-white font-semibold'>
                                <Link to="/templates">Templates</Link>
                            </li>
                            <li>
                                <GetStarted />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header