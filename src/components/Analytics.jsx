import React from 'react'
import Laptop from '../images/laptop.jpg'

const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto py-4' src={Laptop} alt="laptop" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam blanditiis natus voluptas aliquam aspernatur recusandae ullam porro cum, molestias eaque atque itaque. Sunt quaerat, recusandae inventore nostrum cupiditate mollitia totam!</p>
                    <button className='text-[#00df9a] bg-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Get Started</button>
                </div>
            </div>

        </div>
    )
}

export default Analytics