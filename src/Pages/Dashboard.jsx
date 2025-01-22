import React from "react";

const DashBoard = () => {


  return (
    <div className="max-h-screen grid grid-cols-1 md:grid-cols-3 w-full gap-2 p-3 md:pt-0 pb-16 lg:pb-5">
      {/* Users Card */}
      <div className="w-full h-52 m-auto border border-red-100 justify-center flex items-center text-gray-900 bg-gray-500 hover:bg-black/80 hover:text-white">
       
      </div>

      {/* Locations Card */}
      <div className="w-full h-52 m-auto border border-red-100 justify-center flex items-center text-gray-900 bg-yellow-200 hover:bg-black/80 hover:text-white">
       
      </div>

      {/* Screens Card */}
      <div className="w-full h-52 m-auto border border-red-100 justify-center flex items-center text-gray-900 bg-blue-200 hover:bg-black/80 hover:text-white ">
       
      </div>

      {/* Ads Card */}
      <div className="w-full h-52 m-auto border border-red-100 justify-center flex items-center text-gray-900 bg-green-200 hover:bg-black/80 hover:text-white">
       
      </div>
    </div>
  );
};

export default DashBoard;
