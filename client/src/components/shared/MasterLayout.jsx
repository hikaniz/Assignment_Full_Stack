import React from 'react'
import Header from './Header'

const MasterLayout = (props) => {
    return (
        <div className=''>
            <div className=' px-4 flex gap-3 items-center border-b py-4 shadow-xl'>
                <h3 className='bg-violet-600 w-8 h-8 text-xl font-bold text-white flex justify-center items-center rounded-full'>G</h3>
                <h3 className='text-xl font-semibold text-violet-600'>CRUD Food</h3>
            </div>
            <div className='flex gap-3 px-4 py-6'>
                <div className='w-2/12'>
                    <Header/>
                </div>
                <div className='w-10/12'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default MasterLayout