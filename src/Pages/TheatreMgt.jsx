import {React,useState} from "react";
import { Button, Input, Modal, Table } from "antd";
import theatreClass from '../assets/theatreclass.jpg'
import { LuStar } from "react-icons/lu";
import { BiChair } from "react-icons/bi";

const TheatreMgt = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data =[
    {
      name:'class 1',
      sits: 300,
    },
    {
      name:'class 1',
      sits: 300,
    },
    {
      name:'class 1',
      sits: 300,
    },
    {
      name:'class 1',
      sits: 300,
    },
    {
      name:'class 1',
      sits: 300,
    },
    {
      name:'class 1',
      sits: 300,
    },
  ]
    const inputClass = "bg-[#F6F6F6] hover:!bg-[#F6F6F6] focus:!bg-[#F6F6F6] border-none p-3";
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="bg-white rounded-md p-3">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-lg font-semibold">All Classes</h1>
          </div>
          <Button className="text-white bg-black rounded-full hover:!bg-black hover:!text-white outline-none flex items-center h-9" onClick={showModal}>
            Add Class +
          </Button>
          <Modal title="Add users" open={isModalOpen} footer={null} onCancel={handleCancel}>
            <p className="text-sm font-semibold mt-4">Class Name:</p>
            <Input type="text"
              placeholder="example: CINCO CLASS 1"
              className={inputClass}
            />
            <p className="text-sm font-semibold mt-4">Number of sits</p>
            <Input type="text"
              placeholder="1***"
              className={inputClass}
            />

            <div className="flex justify-end mt-4">
              <Button className="text-white bg-[#0a0e16] rounded-full hover:!bg-black px-7 py-5 outline-none">
                Submit
              </Button>
            </div>
          </Modal>
        </div>
        <div className="mt-2 grid grid-cols-3 items-center justify-between flex-wrap">
        {data.map((t, index) =>( 
          <div className="bg-[#f5f5f5] p-3 rounded-md w-80 mt-3" key={index}>
            <img src={theatreClass} alt="" />
            <p className="font-extrabold text-xl capitalize">{t.name}</p>
            <div className="flex justify-between py-3">
                <p>Ratings</p>
                <p className="flex">
                <LuStar/>
                <LuStar/>
                <LuStar/>
                <LuStar/>
                <LuStar/>
                </p>
            </div>
            <div className="flex justify-between">
                <p>Sits</p>
                <p className="flex items-center">{t.sits}<BiChair className="w-5"/></p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default TheatreMgt;
