'use client';

import React from 'react';
import Image from 'next/image';
import Footer from './Footer';
import BookRecommendations from './BookRecommendations';
import ImageScroller from './ImageScroller';

interface DashboardProps {
  username: string;
}

const DashboardPage: React.FC<DashboardProps> = ({ username }) => {
  const images = [
    '/assets/book1.jpeg', '/assets/book2.jpeg', '/assets/book3.jpeg', '/assets/book4.jpeg', 
    '/assets/book5.jpeg', '/assets/book6.jpeg', '/assets/book7.jpeg', '/assets/book8.jpeg',
    '/assets/book9.jpeg', '/assets/book10.jpeg', '/assets/book11.jpeg', '/assets/book12.jpeg',
    '/assets/book13.jpeg'
  ];

  return (
    <div className="bg-green-50 w-full min-h-screen flex flex-col justify-between">
      <div className="text-center flex fixed justify-evenly top-0 w-full bg-green-200 shadow-md">
        <Image src="/assets/recommend.png" alt="logo" className="flex m-2" width={117} height={55} priority />
        <h1 className="md:text-2xl text-xs md:font-bold font-normal sm:m-2 mt-4 text-gray-700">Welcome, {username}! to Bookmate</h1>
      </div>
      <div className="flex lg:flex-row flex-col justify-evenly min-h-screen mt-20 p-5">
        <BookRecommendations />
        <div className=" flex items-center justify-center m-2">
          <ImageScroller images={images} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;

