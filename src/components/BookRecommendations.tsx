"use client";
import React, { useState } from 'react';

interface Book {
  ISBN: string;
  author: string;
  description: string;
  img_link: string;
  pdf_link: string;
  publisher: string;
  title: string;
  year: string;
}

const BookRecommendations: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBooks = async (searchQuery: string) => {
    setLoading(true);
    setError(null);

    const url = `https://getbooksinfo.p.rapidapi.com/?s=${encodeURIComponent(searchQuery)}`;

    const headers = {
      'X-RapidAPI-Key': '8d97b379bbmsh9ed0806ab84c7f8p11ab63jsnc6fd64ebfbd3',
      'X-RapidAPI-Host': 'getbooksinfo.p.rapidapi.com',
    };

    try {
      const response = await fetch(url, { headers });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setBooks(data.results || []); // Ensure `books` is always an array
    } catch (error) {
      setError('Failed to fetch books. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchBooks(query);
  };

  return (
    <div className='w-full bg-green-50'>
      <div className=" flex flex-col gap-3">
        <h1 className="md:text-xl text-sm font-bold mb-2 text-green-950">Book Recommendations</h1>
        <p className="text-green-500 font-bold text-sm">Get related books based on your last read and also a link to download the book.</p>
        <form onSubmit={handleSearch} className="mb-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Input your last read book title"
            className="border p-2 mr-2 text-black lg:w-[30%] w-[100%] mb-2 rounded-md"
          />
          <button type="submit" className="bg-green-500 text-white lg:px-6 py-2 px-4  text-sm rounded-md">
            Search
          </button>
        </form>
        {loading && <p className='text-green-500 font-bold text-xl'>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {books.map((book, index) => (
            <div key={index} className="border border-gray-300 p-4 rounded ">
              <h2 className="text-xl font-semibold text-red-500 mb-2">{book.title}</h2>
              <p className="text-gray-500 mb-1">Author: {book.author}</p><span className="text-black mb-1"> {book.year}</span>
              <p className="text-gray-700 mb-1 text-xs">{book.description}</p>
              <button className='bg-gray-800 w-full p-3'>
                <a href={book.pdf_link} target="_blank" rel="noopener noreferrer">
                  <img src={book.img_link} alt={book.title} className="w-full h-auto text-blue-500" />
                </a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookRecommendations;