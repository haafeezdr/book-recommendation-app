"use client";import React, { useState } from 'react';

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
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Book Recommendations</h1>
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books"
          className="border p-2 mr-2 text-black"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {books.map((book, index) => (
          <div key={index} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>{book.description}</p>
            <a href={book.pdf_link} target="_blank" rel="noopener noreferrer">
              <img src={book.img_link} alt={book.title} className="w-full h-auto" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookRecommendations;