import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface LoginPageProps {
  onLogin: (username: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false); // Set initial state to false to show Signup first
  const [signupSuccess, setSignupSuccess] = useState(false); // State to track signup success
  const [errorMessage, setErrorMessage] = useState(''); // State to track errors

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem(username) || '{}');

    if (storedUser && storedUser.password === password) {
      setErrorMessage('Loading...'); // Show loading message

      // Simulate a 2-second delay before logging in
      setTimeout(() => {
        setErrorMessage(''); // Clear the error message
        onLogin(username); // Successfully logged in
      }, 2000);
    } else {
      setErrorMessage('Login failed. Please check your credentials.');
    }
  };

  const handleSignupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const storedUser = localStorage.getItem(username);

    if (storedUser) {
      setErrorMessage('User already exists. Please use a different email.');
    } else {
      // Store user details in local storage
      localStorage.setItem(username, JSON.stringify({ password }));
      setSignupSuccess(true); // Show success message
      setIsLogin(true); // Switch to login form
      setErrorMessage('');

      setUsername('');
      setPassword('');
    }
  };

  useEffect(() => {
    if (signupSuccess) {
      const timer = setTimeout(() => {
        setSignupSuccess(false); // Hide success message after 2 seconds
      }, 2000);

      return () => clearTimeout(timer); // Cleanup the timer on unmount or when signupSuccess changes
    }
  }, [signupSuccess]);

  return (
    <div className="bg-green-50 flex w-full h-screen">
      <Image src="/assets/loginbook.jpeg" alt="logo" className="lg:block hidden w-[50%]" width={137} height={55} priority />
      <div className='flex flex-col justify-center items-center w-full'>
        <div className='flex justify-center items-center'>
          <button 
            onClick={() => {
              setIsLogin(false);
              setSignupSuccess(false); // Clear success message when switching to signup
              setErrorMessage(''); // Clear any error messages
            }} 
            className={`bg-[#389a54] hover:bg-[#5cf788] text-white px-4 py-2 mt-2 ${!isLogin ? 'bg-[#5cf788]' : ''}`}
            type="button"
          >
            Signup
          </button>
          <button 
            onClick={() => {
              setIsLogin(true);
              setErrorMessage(''); // Clear any error messages
            }} 
            className={`bg-[#389a54] hover:bg-[#5cf788] text-white px-4 py-2 mt-2 ${isLogin ? 'bg-[#5cf788]' : ''}`}
            type="button"
          >
            Login
          </button>
        </div>

        {isLogin ? (
          <div className='flex flex-col justify-center items-center lg:w-[50%] w-full p-10 rounded-sm'>
            <h2 className="text-[16px] text-[#389a54] font-bold leading-[140%] text-center md:text-[20px]">
              Login
            </h2>
            <Image src="/assets/recommend.png" alt="logo" className="absolute left-6 top-4" width={137} height={55} priority />
            {signupSuccess && (
              <p className="text-green-600 text-center mb-4">
                Signup successful! Please log in.
              </p>
            )}
            {errorMessage && (
              <p className={`text-center mb-4 ${errorMessage === 'Loading...' ? 'text-blue-500' : 'text-red-500'}`}>
                {errorMessage}
              </p>
            )}
            <form onSubmit={handleLoginSubmit} className="flex flex-col gap-2">
              <div className="flex flex-col">
                <input
                  type="email"
                  id="login-username"
                  placeholder='Email'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className='placeholder:text-gray-500 border-t-0 border-l-0 border-r-0 border-b-2 bg-green-50 text-gray-600 outline-none border-[#389a54] py-1 pr-24 mt-2'
                  required
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="password"
                  id="login-password"
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='placeholder:text-gray-500 border-t-0 border-l-0 border-r-0 border-b-2 text-gray-600 bg-green-50 outline-none border-[#389a54] py-1 pr-24 mt-2'
                  required
                />
              </div>
              <button type="submit" className="bg-[#389a54] hover:bg-[#5cf788] text-white rounded-xl p-2 mt-2">
                Login
              </button>
            </form>
          </div>
        ) : (
          <div className='flex flex-col justify-center items-center lg:w-[50%] w-full p-10 rounded-sm'>
            <h2 className="text-[16px] text-[#389a54] font-bold leading-[140%] text-center md:text-[20px]">
              Signup
            </h2>
            <Image src="/assets/recommend.png" alt="logo" className="absolute left-6 top-4" width={137} height={55} priority />
            {errorMessage && (
              <p className="text-red-500 text-center mb-4">
                {errorMessage}
              </p>
            )}
            <form onSubmit={handleSignupSubmit} className="flex flex-col gap-2">
              <div className="flex flex-col">
                <input
                  type="email"
                  id="signup-username"
                  placeholder='Email'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className='placeholder:text-gray-500 border-t-0 border-l-0 border-r-0 border-b-2 bg-green-50 text-gray-600 outline-none border-[#389a54] py-1 pr-24 mt-2'
                  required
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="password"
                  id="signup-password"
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='placeholder:text-gray-500 border-t-0 border-l-0 border-r-0 border-b-2 text-gray-600 bg-green-50 outline-none border-[#389a54] py-1 pr-24 mt-2'
                  required
                />
              </div>
              <button type="submit" className="bg-[#389a54] hover:bg-[#5cf788] text-white rounded-xl p-2 mt-2">
                Signup
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
