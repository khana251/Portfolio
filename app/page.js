'use client';

import Image from 'next/image'
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import avatar from "../public/avatar.png";
import quizApp from "../public/quiz-app.png";
import pong from "../public/pong.png";
import two048 from "../public/2048.png";
import discScheduling from "../public/Disc-Scheduling.png";
import folder from "../public/Folder.png";
import minimalCountdownTimer from "../public/minimal-countdown-timer.png";
import { useEffect } from 'react';
import { motion } from "framer-motion"


export default function Home() {
  return (
    <div>
      <main className='bg-[#0A192F] pt-5'>
        <section className='px-10 md:px-20 lg:px-40 min-h-screen'>
          <motion.div 
            initial={{x: '-100vw', opacity: 0}} 
            animate={{x: 0, opacity: 1}}
            transition={{type: 'spring', duration: 0.5, bounce: 0.3}}
            className='py-12'>
            <h2 className="text-center text-5xl py-2 font-medium md:text-9xl bg-clip-text text-transparent bg-gradient-to-r from-[#796afca6] via-[#a69df8a6] to-[#eeecffa6]">
              Hey, I am Amaan
            </h2>
          </motion.div>
          <div className='flex flex-wrap'>
            <motion.div 
              initial={{x: '-100vw', opacity: 0}} 
              animate={{x: 0, opacity: 1}}
              transition={{duration: 0.8}}
              className='w-full md:w-1/2'>
              <div className='pl-20 py-10'>
                <p className='pl-5 text-sm py-12 leading-8 text-gray-300 md:text-lg max-w-2xl'>
                  I am a creative developer with an eye for creating beautiful websites. My focus is on building human-centered software with usability in mind. I'm based in <span className="text-[#796afca6]">Ontario, Canada</span>!
                </p>
                <p className=''></p>
              </div>
            </motion.div>
            <motion.div 
              initial={{opacity: 0}}
              animate={{
                opacity: 1,
                duration: 0.8
              }}
              className='w-full md:w-1/2 flex justify-center items-center'>
              <div className='relative mt-30 mx-auto bg-gradient-to-b from-[#796afca6] rounded-full w-80 h-80 overflow-hidden'>
                <Image src={avatar} alt='My icon' fill sizes="(max-width: 768px) 100vw" priority style={{ objectFit: "cover" }} />
              </div>
            </motion.div>
          </div>

          <motion.div
          initial={{opacity: 0}} 
          animate={{opacity: 1}}
          transition={{duration: 0.8}} 
          className='text-5xl gap-16 py-16 text-[#796afca6] flex justify-center items-center'>
            <motion.ul
              className='flex justify-center gap-16'>
              <motion.li whileHover={{ scale: 1.2 }}>
                <a href="https://www.linkedin.com/in/amaan-a-khan/">
                  <AiFillLinkedin/>
                </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.2 }}>
                <a href="https://github.com/khana251">
                  <AiFillGithub/>
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        </section>

        <div class="flex items-center justify-center py-5">
          <hr class="w-64 h-1 my-8 bg-[#796afca6]/20 border-0 rounded"></hr>
        </div>

        {/* Second page */} 
        <section className='px-10 md:px-20 lg:px-40'>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className='px-5 l:px-10'>
            <h3 className='text-center text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#796afca6] via-[#a69df8a6] to-[#eeecffa6] font-medium md:text-9xl pb-10'>About Me</h3>
            <p className='text-gray-300 text-md md:text-lg leading-8'>
              As a computer science graduate from McMaster University, I thrive on solving complex technical challenges and optimizing system performance. In my role as a DevOps Engineer at Descartes, I focus on investigating and resolving critical issues while ensuring exceptional customer satisfaction. My experience includes implementing innovative solutions that enhance system reliability and efficiency. Previously at Benevity, I developed a strong foundation in production support and infrastructure optimization, working collaboratively to deliver robust solutions that exceed customer expectations.
            </p>
          </motion.div>

        <div class="flex items-center justify-center pt-20">
          <hr class="w-64 h-1 my-8 bg-[#796afca6]/20 border-0 rounded"></hr>
        </div>

        {/* Work Experience Timeline */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className='px-5 l:px-10'>
          <h3 className='text-center text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#796afca6] via-[#a69df8a6] to-[#eeecffa6] font-medium md:text-9xl pb-10'>Work Experience</h3>
          
          <div className="relative container mx-auto px-6 flex flex-col space-y-8">
            {/* Vertical line */}
            <div className="absolute z-0 w-2 h-full bg-[#796afca6] shadow-md inset-0 left-17 md:mx-auto md:left-0 md:right-0"></div>

            {/* First item */}
            <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className="relative z-10">
              <div className="timeline-container md:flex md:justify-between items-center w-full md:odd:flex-row-reverse">
                <div className="hidden md:block w-5/12"></div>
                <div className="absolute left-16 md:mx-auto md:left-0 md:right-0 flex items-center justify-center w-6 h-6 transform -translate-x-1/2 bg-[#796afca6] rounded-full">
                  <div className="w-3 h-3 bg-[#0A192F] rounded-full"></div>
                </div>
                <div className="ml-24 md:w-5/12 md:ml-0 p-6 bg-[#112240] rounded-lg shadow-md border border-[#796afca6]/20">
                  <h3 className="text-xl font-bold mb-2 text-[#796afca6]">DevOps Engineer</h3>
                  <h4 className="text-lg font-semibold mb-1 text-gray-300">Descartes Systems Group</h4>
                  <p className="text-sm text-gray-400 mb-2">August 2023 - Present</p>
                  <p className="text-sm text-gray-400">Waterloo, ON</p>
                </div>
              </div>
            </motion.div>

            {/* Second item */}
            <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} className="relative z-10">
              <div className="timeline-container md:flex md:justify-between items-center w-full">
                <div className="hidden md:block w-5/12"></div>
                <div className="absolute left-16 md:mx-auto md:left-0 md:right-0 flex items-center justify-center w-6 h-6 transform -translate-x-1/2 bg-[#796afca6] rounded-full">
                  <div className="w-3 h-3 bg-[#0A192F] rounded-full"></div>
                </div>
                <div className="ml-24 md:w-5/12 md:ml-0 p-6 bg-[#112240] rounded-lg shadow-md border border-[#796afca6]/20">
                  <h3 className="text-xl font-bold mb-2 text-[#796afca6]">DevOps Engineer Intern</h3>
                  <h4 className="text-lg font-semibold mb-1 text-gray-300">Benevity Inc.</h4>
                  <p className="text-sm text-gray-400 mb-2">May 2022 - August 2022</p>
                  <p className="text-sm text-gray-400">Toronto, ON</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div class="flex items-center justify-center pt-20">
          <hr class="w-64 h-1 my-8 bg-[#796afca6]/20 border-0 rounded"></hr>
        </div>

          <motion.div initial={{ opacity: 0 }} transition={{ duration: 1 }} whileInView={{ opacity: 1 }} className='p-10'>
            <h2 className='text-center text-5xl py-2 bg-clip-text text-transparent bg-gradient-to-r from-[#796afca6] via-[#a69df8a6] to-[#eeecffa6] font-medium md:text-9xl'>Some</h2>
            <h2 className='text-3xl py-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#796afca6] via-[#a69df8a6] to-[#eeecffa6] font-medium md:text-3xl'>of my</h2>
            <h2 className='text-center text-5xl py-2 bg-clip-text text-transparent bg-gradient-to-r from-[#796afca6] via-[#a69df8a6] to-[#eeecffa6] font-medium md:text-9xl'>Projects</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} className='flex flex-wrap gap-10 mx-auto justify-center m:10'> 
            <div className='xl:w-1/4 bg-[#112240] text-center shadow-lg p-10 rounded-xl my-10 border border-[#796afca6]/20'>
              <Image src={quizApp} alt='Question Mark' wdith={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2 text-[#796afca6]'>Quiz Application</h3>
              <p className='py-2 text-gray-300'>
                A quiz application to test your knowledge of basic to advanced github commands.
              </p>
              <h4 className='py-4 text-[#796afca6]'>Tools</h4>
              <p className='text-gray-300 py-1'>HTML</p>
              <p className='text-gray-300 py-1'>CSS</p>
              <p className='text-gray-300 py-1'>JavaScript</p>
              <motion.ul className='px-4 py-4 flex flex-wrap justify-center gap-5 md:gap-18 align-bottom'>
                <motion.li whileHover={{ scale: 1.2 }}>
                  <a className='bg-[#0A192F] px-4 py-2 text-[#796afca6] rounded-md border border-[#796afca6]' href='https://khana251.github.io/quiz-app/'>Demo</a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.2 }}>
                  <a className='bg-[#0A192F] px-4 py-2 text-[#796afca6] rounded-md border border-[#796afca6]' href='https://github.com/khana251/quiz-app'>Code</a>
                </motion.li>
              </motion.ul>
            </div>
            <div className='xl:w-1/4 bg-[#112240] text-center shadow-lg p-10 rounded-xl my-10 border border-[#796afca6]/20'>
              <Image src={pong} alt='Pong logo' wdith={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2 text-[#796afca6]'>Pong Game Simulator</h3>
              <p className='py-2 text-gray-300'>
                A graphical game to simulate the classic pong game. Keeping track of scores as you play.
              </p>
              <h4 className='py-4 text-[#796afca6]'>Tools</h4>
              <p className='text-gray-300 py-1'>Python</p>
              <p className='text-gray-300 py-1'>Turtle</p>
              <p className='text-gray-300 py-1'>Graphics</p>
              <motion.ul className='px-4 py-4 flex flex-wrap justify-center'>
                <motion.li whileHover={{ scale: 1.2 }}>
                  <a className='bg-[#0A192F] px-4 py-2 text-[#796afca6] rounded-md border border-[#796afca6]' href='https://github.com/khana251/pong'>Code</a>
                </motion.li>
              </motion.ul>
            </div>
            <div className='xl:w-1/4 bg-[#112240] text-center shadow-lg p-10 rounded-xl my-10 border border-[#796afca6]/20'>
              <Image src={minimalCountdownTimer} alt='Timer logo' wdith={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2 text-[#796afca6]'>Minimal Countdown Timer</h3>
              <p className='py-2 text-gray-300'>
                A clean and minimal countdown timer with the precise number of days, hours, minutes and seconds to new year.
              </p>
              <h4 className='py-4 text-[#796afca6]'>Tools</h4>
              <p className='text-gray-300 py-1'>HTML</p>
              <p className='text-gray-300 py-1'>CSS</p>
              <p className='text-gray-300 py-1'>JavaScript</p>
              <motion.ul className='px-4 py-4 flex flex-wrap justify-center gap-5 md:gap-18'>
                <motion.li whileHover={{ scale: 1.2 }}>
                  <a className='bg-[#0A192F] px-4 py-2 text-[#796afca6] rounded-md border border-[#796afca6]' href='https://khana251.github.io/Minimal-Countdown-Timer/'>Demo</a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.2 }}>
                  <a className='bg-[#0A192F] px-4 py-2 text-[#796afca6] rounded-md border border-[#796afca6]' href='https://github.com/khana251/Minimal-Countdown-Timer'>Code</a>
                </motion.li>
              </motion.ul>
            </div>
            
            <div className='xl:w-1/4 bg-[#112240] text-center shadow-lg p-10 rounded-xl my-10 border border-[#796afca6]/20'>
              <Image src={folder} alt='folder' wdith={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2 text-[#796afca6]'>AutoFileSorter</h3>
              <p className='py-2 text-gray-300'>
               A script to sort user files based on the file type to facilitate quick and efficient management!
              </p>
              <h4 className='py-4 text-[#796afca6]'>Tools</h4>
              <p className='text-gray-300 py-1'>Python</p>
              <motion.ul className='px-4 py-4 flex flex-wrap justify-center gap-20'>
                <motion.li whileHover={{ scale: 1.2 }}>
                  <a className='bg-[#0A192F] px-4 py-2 text-[#796afca6] rounded-md border border-[#796afca6]' href='https://github.com/khana251/AutoFileSorter'>Code</a>
                </motion.li>
              </motion.ul>
            </div>
            <div className='xl:w-1/4 bg-[#112240] text-center shadow-lg p-10 rounded-xl my-10 border border-[#796afca6]/20'>
              <Image src={discScheduling} alt='disc scheduling logo' wdith={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2 text-[#796afca6]'>Disk Scheduling in C</h3>
              <p className='py-2 text-gray-300'>
                A C program to simulate and compare the different kinds of disc scheduling algorithms.
              </p>
              <h4 className='py-4 text-[#796afca6]'>Tools</h4>
              <p className='text-gray-300 py-1'>C</p>
              <motion.ul className='px-4 py-4 flex flex-wrap justify-center gap-20'>
                <motion.li whileHover={{ scale: 1.2 }}>
                  <a className='bg-[#0A192F] px-4 py-2 text-[#796afca6] rounded-md border border-[#796afca6]' href='https://github.com/khana251/Disk-Scheduling-in-C'>Code</a>
                </motion.li>
              </motion.ul>
            </div>
            <div className='xl:w-1/4 bg-[#112240] text-center shadow-lg p-10 rounded-xl my-10 border border-[#796afca6]/20'>
              <Image src={two048} alt='2048 logo' wdith={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2 text-[#796afca6]'>2048 Game</h3>
              <p className='py-2 text-gray-300'>
                A replica of the 2048 game where the goal of the player is simple, get to 2048.
              </p>
              <h4 className='py-4 text-[#796afca6]'>Tools</h4>
              <p className='text-gray-300 py-1'>Java</p>
              <motion.ul className='px-4 py-4 flex flex-wrap justify-center gap-20'>
                <motion.li whileHover={{ scale: 1.2 }}>
                  <a className='bg-[#0A192F] px-4 py-2 text-[#796afca6] rounded-md border border-[#796afca6]' href='https://github.com/khana251/2048-game'>Code</a>
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-10 mt-20 border-t border-[#796afca6]/10">
          <div className="text-center">
            <p className="text-[#796afca6]/60 text-sm">
              © {new Date().getFullYear()} Amaan Ahmad Khan. All rights reserved.
            </p>
          </div>
        </footer>

      </main>
    </div>
  );
}
