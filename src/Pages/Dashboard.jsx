import React from 'react'
import { LuUser } from 'react-icons/lu';
import arrowRight from '../assets/arrow-right.png'
import users from '../assets/following.png'


<<<<<<< HEAD
const DashBoard = () => {
  return (
    <div className='max-h-screen grid grid-cols-1 md:grid-cols-3 w-full gap-2 p-3 md:pt-0 pb-16 lg:pb-5'>
        <div className='w-full h-52 m-auto border border-red-100 justify-center flex items-center text-white bg-gray-500 hover:bg-black/80'>
            20k users
        </div>
       
        <div className='w-full h-52 m-auto border border-red-100 justify-center flex items-center text-white bg-yellow-200 hover:bg-black/80'>
            20k users
        </div>
       
        <div className='w-full h-52 m-auto border border-red-100 justify-center flex items-center text-white bg-blue-200 hover:bg-black/80'>
            20k users
        </div>

        <div className='w-full h-52 m-auto border border-red-100 justify-center flex items-center text-white bg-purple-200 hover:bg-black/80'>
            20k users
        </div>

        <div className='w-full h-52 m-auto border border-red-100 justify-center flex items-center text-white bg-pink-200 hover:bg-black/80'>
            20k users
        </div>

        <div className='w-full h-52 m-auto border border-red-100 justify-center flex items-center text-white bg-green-200 hover:bg-black/80'>
            20k users
        </div>

        <div className='w-full h-52 m-auto border border-red-100 justify-center flex items-center text-white bg-slate-400 hover:bg-black/80'>
            20k users
        </div>

        <div className='w-full h-52 m-auto border border-red-100 justify-center flex items-center text-white bg-stone-600 hover:bg-black/80'>
            20k users
        </div>

        <div className='w-full h-52 m-auto border border-red-100 justify-center flex items-center text-white bg-orange-200 hover:bg-black/80'>
            20k users
        </div>

        <div className='w-full h-52 m-auto border border-red-100 justify-center flex items-center text-white bg-amber-200 hover:bg-black/80'>
            20k users
        </div>

        <div className='w-full h-52 m-auto border border-red-100 justify-center flex items-center text-white bg-lime-200 hover:bg-black/80'>
            20k users
        </div>

        <div className='w-full h-52 m-auto border border-red-100 justify-center flex items-center text-white bg-emerald-200 hover:bg-black/80'>
            20k users
        </div>

        <div className='w-full h-52 m-auto border border-red-100 justify-center flex items-center text-white bg-teal-200 hover:bg-black/80'>
            20k users
        </div>

        <div className='w-full h-52 m-auto border border-red-100 justify-center flex items-center text-white bg-cyan-200 hover:bg-black/80'>
            20k users
        </div>

        <div className='w-full h-52 m-auto border border-red-100 justify-center flex items-center text-white bg-sky-400 hover:bg-black/80'>
            20k users
        </div>

    </div>
=======
const Dashboard = () => {
  const data = [
    {
      key: 1,
      small_title: "Users",
      content: "125.3K Users",
      img: users,
      from: "+20 from yesterday",
    },
    {
      key: 2,
      small_title: "Classes",
      content: "3 Classes",
      img: users,
      from: "+5 from yesterday",
    },
    {
      key: 3,
      small_title: "Movies Watched",
      content: "10 Expired",
      img: users,
      from: "+2 from yesterday",
    }, 
  ];
  return (
    <>
      <div className="mt-2 grid grid-cols-3 items-center justify-between flex-wrap">
        {data.map((e, index) => (
          <div className="bg-white mt-3 p-4 w-80 rounded-md" key={index}>
            <p className="mb-2">{e.small_title}</p>
            <div className="flex gap-2 items-center justify-between">
              <div className="flex gap-2 items-center">
                <img src={e.img} className="w-7" />
                <p className="font-semibold text-lg">{e.content}</p>
              </div>
              <div>
                <img src={arrowRight} alt="" />
              </div>
            </div>
            <div className="bg-[#EDFEF6] mt-3 w-28 rounded flex items-center justify-center">
              <p className=" text-[#55E8AD] text-xs ">{e.from}</p>
            </div>
          </div>
        ))}
      </div>
    </>
>>>>>>> e0e33746ec2fc3ed97f037077b16cd6f62971978
  )
}

export default DashBoard