
import React, {useState} from 'react';
import {useSpeechSynthesis}from 'react-speech-kit';

function Speech() {

    const [text, setText]= useState('');
    const {speak} = useSpeechSynthesis();

    const handleOnClick = () =>{
        speak({text:text})
        }

  return (
    <div>
<section className="w-full max-w-2xl px-6 py-4 mx-auto mt-28 bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">Speak by Typing Service</h2>
        <p className="mt-3 text-center text-gray-600 dark:text-gray-400">Type your text on the textbox and click on `&quot;`Talk`&quot;`to convert your text to speech.</p>
        
      
        <div className="mt-6 ">
            <div className="items-center -mx-2 md:flex">
               
            </div>

            <div className="w-full mt-4">
               

                <textarea className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" placeholder='Type here'
                
                onChange={(e) =>{setText(e.target.value)}}
                
                ></textarea>
            </div>

            <div className="flex justify-center mt-6">
                <button className="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" 
                onClick={()=>{handleOnClick()}}
                >Talk</button>
            </div>
        </div>
      
    </section>


    </div>
  )
}

export default Speech