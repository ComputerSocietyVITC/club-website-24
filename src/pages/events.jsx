import React from 'react'
import Header from '../components/header'

const events = () => {
return (
    <>
    <Header type={0} />
    <div className='bg-slate-950 p-9'>
        <h1 className='text-white text-9xl font-bold text-center pb-16'> <span className='text-emerald-500 font-extrabold'>&lt;/</span>Events<span className='text-emerald-500 font-extrabold'>&gt;</span></h1>
        <div className='flex flex-col  items-center group w-full h-full gap-y-[230px] mb-32'>
            <div className='relative h-[400px]'>
                <div className='w-[1100px] h-[400px] border-white border-4 p-16 rounded-2xl z-10'><h1 className='text-white text-center text-3xl font-bold align-center'>Insert Photo</h1></div>
                <div className=' absolute bottom-[-30%] w-[1100px] h-[135px] border-emerald-500 border-4 border-t-0 border-dashed rounded-b-2xl z-0 px-[5%]'>
                    <div className='absolute bottom-[15%] w-[80%] text-white flex flex-col gap-y-3'>
                        <h2 className='text-4xl font-semibold text-emerald-500'>Event name</h2>
                        <div className='flex justify-between'>
                            <h3 className='text-2xl font-mono'>Date:XX/XX/XXXX</h3>
                            <h3 className='text-2xl font-mono'>Venue:</h3>
                            <h3 className='text-2xl font-mono'>Prize Pool:XXXX/-</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative h-[400px]'>
                <div className='w-[1100px] h-[400px] border-white border-4 p-16 rounded-2xl z-10'><h1 className='text-white text-center text-3xl font-bold align-center'>Insert Photo</h1></div>
                <div className=' absolute bottom-[-30%] w-[1100px] h-[135px] border-emerald-500 border-4 border-t-0 border-dashed rounded-b-2xl z-0 px-[5%]'>
                    <div className='absolute bottom-[15%] w-[80%] text-white flex flex-col gap-y-3'>
                        <h2 className='text-4xl font-semibold text-emerald-500'>Event name</h2>
                        <div className='flex justify-between'>
                            <h3 className='text-2xl font-mono'>Date:XX/XX/XXXX</h3>
                            <h3 className='text-2xl font-mono'>Venue:</h3>
                            <h3 className='text-2xl font-mono'>Prize Pool:XXXX/-</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div></>
)
}

export default events
