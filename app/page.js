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
      <main className='bg-slate-700 pt-1'>
        <section className='px-10 md:px-20 lg:px-40 min-h-screen'>
          <motion.div 
            initial={{x: '-100vw', opacity: 0}} 
            animate={{x: 0, opacity: 1}}
            transition={{type: 'spring', duration: 0.5, bounce: 0.3}}
            className='pt-20 pb-48'>
            <h2 className='text-center text-5xl py-2 text-amber-100 font-medium md:text-9xl'>Hey, I am Amaan</h2>
          </motion.div>
          <div className='flex flex-wrap'>
            <motion.div 
              initial={{x: '-100vw', opacity: 0}} 
              animate={{x: 0, opacity: 1}}
              transition={{duration: 0.8}}
              className='w-full md:w-1/2'>
              <div className='pl-20 py-3'>
                <h3 className='text-amber-100 text-2xl py-2 md:text-3xl'>Developer & Designer</h3>
                <p className='text-sm py-5 leading-8 text-amber-100 md:text-xl max-w-2xl'>
                  I like creating beautiful websites and am always up for a chat about all things tech. Is AI going to take over?
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{opacity: 0}}
              animate={{
                opacity: 1,
                duration: 0.8
              }}
              className='w-full md:w-1/2 flex justify-center items-center'>
              <div className='relative mt-30 mx-auto bg-gradient-to-b from-amber-100 rounded-full w-80 h-80 overflow-hidden'>
                <Image src={avatar} alt='My icon' fill sizes="(max-width: 768px) 100vw" priority style={{ objectFit: "cover" }} />
              </div>
            </motion.div>
          </div>

          <motion.div
          initial={{opacity: 0}} 
          animate={{opacity: 1}}
          transition={{duration: 0.8}} 
          className='text-5xl gap-16 py-16 text-amber-100 flex justify-center items-center'>
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

        <div class="flex items-center justify-center py-10">
          <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"></hr>
        </div>

        {/* Second page */} 
        <section className='px-10 md:px-20 lg:px-40'>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className='px-5 l:px-10'>
            <h3 className='text-center text-5xl text-amber-100 font-medium md:text-9xl pb-10'>About me</h3>
            <p className='text-amber-100 text-md md:text-lg leading-8 text-grey-800'>
              As a computer science graduate from McMaster University, I have a passion for coding and problem-solving. I currently work as a DevOps Engineer at Descartes, where I am part of the 3rd Line Team that handles complex system and application issues and deploys solutions to clients. Previously, I gained valuable experience as a DevOps Engineer intern at Benevity, where I worked on various production support tasks and worked alongside a talented team of engineers.
            </p>
          </motion.div>

        <div class="flex items-center justify-center pt-20">
          <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"></hr>
        </div>

          <motion.div initial={{ opacity: 0 }} transition={{ duration: 1 }} whileInView={{ opacity: 1 }} className='p-10'>
            <h2 className='text-center text-5xl py-2 text-amber-100 font-medium md:text-9xl'>Some</h2>
            <h2 className='text-3xl py-2 text-center text-amber-100 font-medium md:text-3xl'>of my</h2>
            <h2 className='text-center text-5xl py-2 text-amber-100 font-medium md:text-9xl'>projects</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} className='flex flex-wrap gap-10 mx-auto justify-center m:10'> 
            <div className='xl:w-1/4 bg-amber-100 text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={quizApp} alt='Question Mark' wdith={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Quiz Application</h3>
              <p className='py-2'>
                A quiz application to test your knowledge of basic to advanced github commands.
              </p>
              <h4 className='py-4 text-grey-800'>Tools I used</h4>
              <p className='text-grey-800 py-1'>HTML</p>
              <p className='text-grey-800 py-1'>CSS</p>
              <p className='text-grey-800 py-1'>JavaScript</p>
              <motion.ul className='px-4 py-4 flex flex-wrap justify-center gap-5 md:gap-20'>
                <motion.li whileHover={{ scale: 1.2 }}>
                  <a className='bg-black px-4 py-2 text-amber-100 rounded-md' href='https://khana251.github.io/quiz-app/'>Demo</a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.2 }}>
                  <a className='bg-black px-4 py-2 text-amber-100 rounded-md' href='https://github.com/khana251/quiz-app'>Code</a>
                </motion.li>
              </motion.ul>
            </div>
            <div className='xl:w-1/4 bg-amber-100 text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={pong} alt='Pong logo' wdith={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Pong Game Simulator</h3>
              <p className='py-2'>
                A graphical game to simulate the classic pong game. Keeping track of scores as you play!
              </p>
              <h4 className='py-4 text-grey-800'>Tools I used</h4>
              <p className='text-grey-800 py-1'>Python</p>
              <p className='text-grey-800 py-1'>Turtle</p>
              <p className='text-grey-800 py-1'>Graphics</p>
              <motion.ul className='px-4 py-4 flex flex-wrap justify-center'>
                <motion.li whileHover={{ scale: 1.2 }}>
                  <a className='bg-black px-4 py-2 text-amber-100 rounded-md' href='https://github.com/khana251/pong'>Code</a>
                </motion.li>
              </motion.ul>
            </div>
            <div className='xl:w-1/4 bg-amber-100 text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={minimalCountdownTimer} alt='Timer logo' wdith={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Minimal Countdown Timer</h3>
              <p className='py-2'>
                A clean and minimal countdown timer with the precise number of days, hours, minutes and seconds to new year.
              </p>
              <h4 className='py-4 text-grey-800'>Tools I used</h4>
              <p className='text-grey-800 py-1'>HTML</p>
              <p className='text-grey-800 py-1'>CSS</p>
              <p className='text-grey-800 py-1'>JavaScript</p>
              <motion.ul className='px-4 py-4 flex flex-wrap justify-center gap-5 md:gap-20'>
                <motion.li whileHover={{ scale: 1.2 }}>
                  <a className='bg-black px-4 py-2 text-amber-100 rounded-md' href='https://khana251.github.io/Minimal-Countdown-Timer/'>Demo</a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.2 }}>
                  <a className='bg-black px-4 py-2 text-amber-100 rounded-md' href='https://github.com/khana251/Minimal-Countdown-Timer'>Code</a>
                </motion.li>
              </motion.ul>
            </div>
            
            <div className='xl:w-1/4 bg-amber-100 text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={folder} alt='folder' wdith={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>AutoFileSorter</h3>
              <p className='py-2'>
               A script to sort user files based on the file type to facilitate quick and efficient management!
              </p>
              <h4 className='py-4 text-grey-800'>Tools I used</h4>
              <p className='text-grey-800 py-1'>Python</p>
              <motion.ul className='px-4 py-4 flex flex-wrap justify-center gap-20'>
                <motion.li whileHover={{ scale: 1.2 }}>
                  <a className='bg-black px-4 py-2 text-amber-100 rounded-md' href='https://github.com/khana251/AutoFileSorter'>Code</a>
                </motion.li>
              </motion.ul>
            </div>
            <div className='xl:w-1/4 bg-amber-100 text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={discScheduling} alt='disc scheduling logo' wdith={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Disk Scheduling in C</h3>
              <p className='py-2'>
                A C program to simulate and compare the different kinds of disc scheduling algorithms.
              </p>
              <h4 className='py-4 text-grey-800'>Tools I used</h4>
              <p className='text-grey-800 py-1'>C</p>
              <motion.ul className='px-4 py-4 flex flex-wrap justify-center gap-20'>
                <motion.li whileHover={{ scale: 1.2 }}>
                  <a className='bg-black px-4 py-2 text-amber-100 rounded-md' href='https://github.com/khana251/Disk-Scheduling-in-C'>Code</a>
                </motion.li>
              </motion.ul>
            </div>
            <div className='xl:w-1/4 bg-amber-100 text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={two048} alt='2048 logo' wdith={100} height={100} className='mx-auto'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>2048 Game</h3>
              <p className='py-2'>
                A replica of the 2048 game where the goal of the player is simple, get to 2048.
              </p>
              <h4 className='py-4 text-grey-800'>Tools I used</h4>
              <p className='text-grey-800 py-1'>Java</p>
              <motion.ul className='px-4 py-4 flex flex-wrap justify-center gap-20'>
                <motion.li whileHover={{ scale: 1.2 }}>
                  <a className='bg-black px-4 py-2 text-amber-100 rounded-md' href='https://github.com/khana251/2048-game'>Code</a>
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
