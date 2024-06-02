import React from 'react';
import Image from 'next/image';

const WelcomePage: React.FC = () => {
  return (
    <div className="bg-green-100 flex w-full h-screen justify-center items-center ">
        <div className='flex flex-col justify-center items-center bg-green-800 p-10 rounded-sm'>
        <Image src="/assets/logo1.png" alt="logo" className="flex justify-center items-center mb-4" width={137} height={55} priority />
            <p className="text-xl text-white text-center">Welcome to Jamb Cbt Exams Training</p>
        </div>
    </div>
  );
};

export default WelcomePage;