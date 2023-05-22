'use client';

import Image from 'next/image'
import {AiFillGithub, AiFillLinkedin, AiFillPushpin} from "react-icons/ai";
import avatar from "../public/avatar.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const nameElement = document.querySelector('.slide-in');
    const bioElement = document.querySelector('.slide-in-bottom');

    nameElement.classList.add('slide-in');
    bioElement.classList.add('slide-in-bottom');
  }, []);
  return (
    <div>
      <main className='bg-black px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-end'>
            <ul className='flex items-center'>
              <li>
                <a className='bg-gradient-to-r from-yellow-100 to-yellow-50 text-black px-4 py-2 rounded-md ml-8' href='https://drive.google.com/file/d/14kasRNYA2zbRp9ZFEYCL4WnS1sFM4uZQ/view?usp=sharing'>Resume</a>
                </li>
            </ul>
          </nav>
          <div className='p-10'>
            <h2 className='text-5xl py-2 text-amber-100 font-medium md:text-9xl slide-in'>Hey,</h2>
            <h2 className='text-5xl py-2 text-amber-100 font-medium md:text-9xl slide-in'>I am Amaan</h2>
          </div>
          <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2'>
              <div className='pl-20 py-3'>
                <h3 className='text-amber-100 text-2xl py-2 md:text-3xl'>Software Developer</h3>
                <p className='text-md py-5 leading-8 text-amber-100 md:text-xl max-w-2xl slide-in-bottom'>
                  As a Developer based in Canada <span className='inline-block'><AiFillPushpin/></span>  I hold a degree in computer science from McMaster University. I am eager to embark on the next phase of my journey and explore new opportunities.
                </p>
              </div>
            </div>
            <div className='w-full md:w-1/2 flex justify-center items-center'>
              <div className='relative mt-30 mx-auto bg-gradient-to-b from-amber-100 rounded-full w-80 h-80 overflow-hidden'>
                <Image src={avatar} fill style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-16 text-amber-100'>
            <AiFillGithub/>
            <AiFillLinkedin/>
          </div>
          
        </section>
        {/* Second page */} 
        <section>
          <div>
            <h3 className='text-amber-100 text-3xl py-1'>Services I offer</h3>
            <p className='text-amber-100 text-md py-2 leading-8 text-grey-800'>
              I have degree in <span className='text-teal-500'>computer science</span> from McMaster University with technical background in Development as a DevOps Developer prev @ Benevity
            </p>
            <p className='text-amber-100 text-md py-2 leading-8 text-grey-800'>
              I have degree in <span className='text-teal-500'>computer science</span> from McMaster University with technical background in Development as a DevOps Developer prev @ Benevity
            </p>
          </div>
          <div className='xl:flex gap-10 mx-auto'> 
            <div className='bg-amber-100 text-center shadow-lg p-10 rounded-xl my-10'>
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
            <div className='bg-amber-100 text-center shadow-lg p-10 rounded-xl my-10'>
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
            <div className='bg-amber-100 text-center shadow-lg p-10 rounded-xl my-10'>
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
            <h3 className='text-3xl py-1 text-amber-100'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-grey-800 text-amber-100'>
              I have degree in <span className='text-teal-500'>computer science</span> from McMaster University with technical background in Development as a DevOps Developer prev @ Benevity
            </p>
            <p className='text-md py-2 leading-8 text-grey-800 text-amber-100'>
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
