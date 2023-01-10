import React from 'react';
import temp1 from '../../assets/img/temp1.png'
import { Icon } from '../../icons';
import Fancy from '../Fancy';
import { Link } from 'react-router-dom'

const TemplateCard = ({ values }) => {
    return (
        <div>
            <div className='max-w-[220px]'>
                <Fancy>
                    <>
                        <div className='relative group'>
                            <img className='w-full rounded-lg' src={temp1} alt="lorem" />
                            <div className='w-full h-full bg-white opacity-5 group-hover:opacity-75 duration-200 absolute rounded-lg top-0'></div>
                            <div className='absolute top-1/2 left-1/2 flex gap-4 -translate-x-[50%] opacity-0 group-hover:opacity-100 duration-200'>
                                <Link to="/templates/1">
                                    <Icon name="select" size={30} className="cursor-pointer mt-5 group-hover:mt-0 duration-200" />
                                </Link>
                                <button
                                    data-fancybox="gallery"
                                    data-src={temp1}
                                >
                                    <Icon name="eye" size={30} className="cursor-pointer mt-5 group-hover:mt-0 duration-200 delay-75" />
                                </button>
                            </div>
                        </div>
                        <div className='bg-white mt-1 py-2 rounded-lg'>
                            <h1 className='text-center font-semibold'
                            >Template 1</h1>
                        </div>
                    </>
                </Fancy>
            </div>
        </div>
    )
}
export default TemplateCard