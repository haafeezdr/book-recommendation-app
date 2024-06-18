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
      <div className="bg-green-50 w-full min-h-screen flex flex-col justify-between">
        <div className="text-center flex fixed justify-evenly top-0 w-full bg-green-200 shadow-md">
          <Image src="/assets/recommend.png" alt="logo" className="flex m-2" width={137} height={55} priority />
          <h1 className="sm:text-4xl font-bold sm:m-2 mt-4 text-gray-700">Welcome, {username}! to Bookmate</h1>
        </div>
        <BookRecommendations />
        <Footer/>
      </div>
    );
  };
  
  export default DashboardPage;