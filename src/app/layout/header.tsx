// "use client";

// import { useState } from "react";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="bg-gray-800 text-white shadow-lg sticky top-0 z-50">
//       <div className="container mx-auto flex items-center justify-between py-4 px-6">
//         {/* Logo */}
//         <div className="text-xl font-bold">
//           <a href="/" className="hover:text-gray-300">
//             My Blog
//           </a>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-6">
//           <a
//             href="/"
//             className="hover:text-gray-300 transition duration-300"
//           >
//             Home
//           </a>
//           <a
//             href="/about"
//             className="hover:text-gray-300 transition duration-300"
//           >
//             About
//           </a>
//           <a
//             href="/posts"
//             className="hover:text-gray-300 transition duration-300"
//           >
//             Posts
//           </a>
//           <a
//             href="/contact"
//             className="hover:text-gray-300 transition duration-300"
//           >
//             Contact
//           </a>
//         </nav>

//         {/* Mobile Hamburger Menu */}
//         <div className="md:hidden">
//           <button
//             className="focus:outline-none"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <span className="block w-6 h-0.5 bg-white mb-1"></span>
//             <span className="block w-6 h-0.5 bg-white mb-1"></span>
//             <span className="block w-6 h-0.5 bg-white"></span>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden bg-gray-700">
//           <nav className="flex flex-col space-y-4 p-4">
//             <a
//               href="/"
//               className="hover:text-gray-300 transition duration-300"
//             >
//               Home
//             </a>
//             <a
//               href="/about"
//               className="hover:text-gray-300 transition duration-300"
//             >
//               About
//             </a>
//             <a
//               href="/posts"
//               className="hover:text-gray-300 transition duration-300"
//             >
//               Posts
//             </a>
//             <a
//               href="/contact"
//               className="hover:text-gray-300 transition duration-300"
//             >
//               Contact
//             </a>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;



"use client";

import { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark");
    };

    return (
        <header className="bg-gradient-to-r from-gray-800 via-blue-950 to-gray-800 text-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo */}
                <div className="text-2xl font-extrabold tracking-wide hover:scale-105 transform transition-all">
                    <a href="/" className="flex items-center space-x-2">
                        <span className="bg-white text-indigo-600 px-2 py-1 rounded-md">MB</span>
                        <span>My Blog</span>
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8 list-none">
                    
                        <Link href={`/`} className="hover:text-gray-200 transition duration-300 font-semibold text-lg">
                         <li>Home</li>
                         </Link>
                        <Link href={`/blog`} className="hover:text-gray-200 transition duration-300 font-semibold text-lg">
                         <li>Blog</li>
                         </Link>
                        <Link href={`/contact`} className="hover:text-gray-200 transition duration-300 font-semibold text-lg">
                         <li>Contact</li>
                         </Link>
                        
                </nav>


                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="hidden md:flex items-center justify-center w-10 h-10 bg-white text-indigo-600 rounded-full shadow-md hover:bg-gray-200 transition-all"
                >
                    {isDarkMode ? (
                        <SunIcon className="w-6 h-6" />
                    ) : (
                        <MoonIcon className="w-6 h-6" />
                    )}
                </button>

                {/* Mobile Hamburger Menu */}
                <div className="md:hidden">
                    <button
                        className="flex flex-col space-y-1 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="block w-8 h-1 bg-white rounded-full"></span>
                        <span className="block w-8 h-1 bg-white rounded-full"></span>
                        <span className="block w-8 h-1 bg-white rounded-full"></span>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-purple-800">
                    <nav className="flex flex-col space-y-4 p-4 text-lg">
                        {["Home", "About", "Posts", "Contact"].map((link) => (
                            <a
                                key={link}

                                href={`/${link.toLowerCase()}`}
                                className="hover:text-gray-300 transition duration-300 font-semibold"
                            >
                                {link}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;

