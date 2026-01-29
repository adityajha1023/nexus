import { Share } from 'lucide-react'
import React from 'react'

function Header() {
    return (
        <div className='h-16 ml-[20%] flex justify-between items-center border-b border-gray-200 bg-gray-50 pl-4 pr-8 py-4 font-p'>
            <a href="/" className='font-semibold text-h6 flex items-center'>
            <img src="./logo.png" alt="Nexus" className='h-12' />
            Nexus</a>
            <ul className='flex justify-center items-center gap-6 font-normal text-gray-500'>
                <a href="#" className='hover:text-black transition-all duration-300 flex items-center gap-2'>Share <Share className="w-4 h-4" />  </a>
            </ul>
        </div>
    )
}

export default Header
