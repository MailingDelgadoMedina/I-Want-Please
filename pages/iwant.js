

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Speech from '../components/Speech';


const messageImg = "https://res.cloudinary.com/programandoconmei/image/upload/v1657355229/iWantImg/volodymyr-hryshchenko-V5vqWC9gyEU-unsplash_uwveaj.jpg";
const iwant = () => {
    

    return (
        <div>

<Navbar/>

<section className="bg-white dark:bg-gray-800">
        <div className="container px-6 py-8 mx-auto">
            <div className="items-center lg:flex">
                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">I want Please</h2>

                    <p className="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
                        Hello there, 👋 welcome to this wonderful space to speak by typing. This service is free and made with love for the non-verbal community.
                    </p>

              
                </div>

                <div className="mt-8 lg:mt-0 lg:w-1/2">
                    <div className="flex items-center justify-center lg:justify-end">
                        <div className="max-w-lg">

                            <Image className="object-cover object-center w-full h-64 rounded-md shadow" src={messageImg} 
                            alt=""
                            layout="intrinsic"
              width={712}
              height={424}
                            />


                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
{/* 
Middle section */}


<section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                      
        
                        <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Default Taiwindcss Config</h1>
        
                        <p className="mt-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
                    </div>
        
                    <div>
                         
        
                        <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Fully Responsive Components</h1>
                        
                        <p className="mt-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
                    </div>
                    
                    <div>
                     
                        <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">RTL Languages Support</h1>
                    
                        <p className="mt-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
                    </div>
                </div>
            </div>
        </section>

{/* Text box area */}
    <Speech/>



     <Footer/>
        </div>
    );
}

export default iwant;