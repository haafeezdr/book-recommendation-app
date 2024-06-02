'use client'

import React from 'react'; 
import Image from 'next/image';
import Link from 'next/link';
import Footer from './Footer';
import BookRecommendations from './BookRecommendations';


interface DashboardProps {
    username: string; // Prop to receive username
  }
  const DashboardPage: React.FC<DashboardProps> = ({ username }) => {
  
    return (
      <div className="bg-white w-full h-full min-h-screen relative ">
        <div className="text-center flex fixed justify-evenly top-0 w-full bg-green-50 shadow-md">
          <Image src="/assets/logo1.png" alt="logo" className="flex m-2" width={137} height={55} priority />
          <h1 className="sm:text-4xl font-bold sm:m-2 mt-4 text-gray-700">Welcome, {username}!</h1>
        </div>
        <main>
        <BookRecommendations />
      </main>
        <Footer/>
      </div>
    );
  };
  
  export default DashboardPage;