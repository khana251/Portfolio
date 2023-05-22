'use client';

import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode? "dark" : ""}>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>WELCOME TO MY PORTFOLIO</h1>
            <ul className='flex item-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/>
                </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='https://www.google.com/'>Resume</a>
                </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-7xl'>Amaan Ahmad Khan</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Software Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>I have degree in computer science from McMaster University with technical background in Development as a DevOps Developer prev @ Benevity</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-16 text-gray-600'>
            <AiFillGithub/>
            <AiFillLinkedin/>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <Image src={deved} fill style={{objectFit:"cover"}}/>
          </div>
        </section>
        {/* Second page */} 
        <section>
          <div>
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-grey-800'>
              I have degree in <span className='text-teal-500'>computer science</span> from McMaster University with technical background in Development as a DevOps Developer prev @ Benevity
            </p>
            <p className='text-md py-2 leading-8 text-grey-800'>
              I have degree in <span className='text-teal-500'>computer science</span> from McMaster University with technical background in Development as a DevOps Developer prev @ Benevity
            </p>
          </div>
          <div className='xl:flex gap-10'> 
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={design} wdith={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful designs</h3>
              <p className='py-2'>
                Creating elegant designs suited for your needs following design theory
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-grey-800 py-1'>Photoshop</p>
              <p className='text-grey-800 py-1'>Illustrator</p>
              <p className='text-grey-800 py-1'>figma</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={code} wdith={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful designs</h3>
              <p className='py-2'>
                Creating elegant designs suited for your needs following design theory
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-grey-800 py-1'>Photoshop</p>
              <p className='text-grey-800 py-1'>Illustrator</p>
              <p className='text-grey-800 py-1'>figma</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={consulting} wdith={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful designs</h3>
              <p className='py-2'>
                Creating elegant designs suited for your needs following design theory
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-grey-800 py-1'>Photoshop</p>
              <p className='text-grey-800 py-1'>Illustrator</p>
              <p className='text-grey-800 py-1'>figma</p>
            </div>
          </div>
        </section>
        {/* Third page */} 
        <section>
          <div>
            <h3 className='text-3xl py-1'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-grey-800'>
              I have degree in <span className='text-teal-500'>computer science</span> from McMaster University with technical background in Development as a DevOps Developer prev @ Benevity
            </p>
            <p className='text-md py-2 leading-8 text-grey-800'>
              I have degree in <span className='text-teal-500'>computer science</span> from McMaster University with technical background in Development as a DevOps Developer prev @ Benevity
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'><Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} responsive/></div>
            <div className='basis-1/3 flex-1'><Image src={web2} className='rounded-lg object-cover' width={'100%'} height={'100%'} responsive/></div>
            <div className='basis-1/3 flex-1'><Image src={web3} className='rounded-lg object-cover' width={'100%'} height={'100%'} responsive/></div>
            <div className='basis-1/3 flex-1'><Image src={web4} className='rounded-lg object-cover' width={'100%'} height={'100%'} responsive/></div>
            <div className='basis-1/3 flex-1'><Image src={web5} className='rounded-lg object-cover' width={'100%'} height={'100%'} responsive/></div>
            <div className='basis-1/3 flex-1'><Image src={web6} className='rounded-lg object-cover' width={'100%'} height={'100%'} responsive/></div>
          </div>
        </section>
      </main>
    </div>
  );
}
