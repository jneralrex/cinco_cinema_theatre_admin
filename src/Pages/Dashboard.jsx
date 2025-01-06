import React from 'react'
import { LuUser } from 'react-icons/lu';
import arrowRight from '../assets/arrow-right.png'
import users from '../assets/following.png'


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
  )
}

export default Dashboard