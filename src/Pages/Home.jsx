import React, { use } from 'react'
import { useState } from 'react'
import { Plus, AudioLines, ArrowUp, AudioLinesIcon } from 'lucide-react'

function Home() {

    const[input, setInput] = useState(false);
    const[preview, setPreview] = useState(null);

    return (
        <div className='ml-[20%] h-[calc(100vh-150px)] flex flex-col justify-center items-center'>
            <h1 className='text-h2 font-medium'>nexus</h1>
            {/* input div */}
            <div className="flex flex-row justify-start items-center mt-4 border border-black/20 shadow-sm rounded-full w-[40rem] px-4 py-2 gap-2">
                {/* preview image */}
                {preview && (
                    <img src={preview} alt="preview" className="w-20 h-20 object-cover rounded-xl" />
                )}
                {/* attaching media */}
                <input type="file" id='file-upload' className='hidden'
                onChange = {(e) => {
                    const file = e.target.files[0];
                    const previewURL = URL.createObjectURL(file);
                    setPreview(previewURL);
                }} />
                <label htmlFor='file-upload' className="cursor-pointer text-gray-500 hover:text-black transition-all duration-300"><Plus className='w-5 h-5' /></label>
                {/* giving text inputs */}
                <input type="text" onChange={(e) => setInput(e.target.value.length > 0)}
                 placeholder="Ask anything. Type @ for mentions and / for shortcuts." className="outline-none w-full"/>   
                <button className='bg-black rounded-full p-2'>
                    {input ? (
                        <ArrowUp className='w-6 h-6 text-white'/>
                    ) : (
                        <AudioLinesIcon className='w-6 h-6 text-white'/>
                    )}
                </button>
            </div>
        </div>
    )
}

export default Home
