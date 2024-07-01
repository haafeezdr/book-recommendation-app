'use client'

import React, { useState } from 'react';
import Image from 'next/image';


interface LoginPageProps {
  onLogin: (username: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate the username and password (e.g., check against database)
    // If validation passes, call the onLogin function with the username
    onLogin(username);
  };

  return (
    <div className="bg-green-50 flex w-full h-screen ">
      <Image src="/assets/loginbook.jpeg" alt="logo" className="lg:block hidden w-[50%] " width={137} height={55} priority />
      <div className='flex flex-col justify-center items-center lg:w-[50%] w-full  p-10 rounded-sm'>
        <h2 className="text-[16px] text-[#389a54] font-bold leading-[140%] text-center md:text-[20px]">Login</h2>
        <Image src="/assets/recommend.png" alt="logo" className="absolute left-6 top-4 " width={137} height={55} priority />
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="flex flex-col">
            <input
              type="text"
              id="username"
              placeholder='Name'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='placeholder:text-gray-500 border-t-0 border-l-0 border-r-0 border-b-2 bg-green-50 text-gray-600 outline-none border-[#389a54] py-1 pr-24 mt-2' required
            />
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              id="password"
              placeholder='Email'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='placeholder:text-gray-500 border-t-0 border-l-0 border-r-0 border-b-2 text-gray-600 bg-green-50 outline-none border-[#389a54] py-1 pr-24 mt-2' required
            />
          </div>
          <button type="submit" className="bg-[#389a54] hover:bg-[#5cf788] text-white rounded-xl p-2 mt-2">Start</button>

        </form>
        </div>
    </div>
  );
};

export default LoginPage;