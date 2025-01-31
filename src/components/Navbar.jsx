import { useState } from "react";
import { Link } from "react-router-dom";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const categories = ["chinese", "japanese", "western", "indonesian", "korean"];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            Recipebooktic
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/category/${category}`}
                className="text-gray-600 hover:text-gray-900 capitalize text-base"
              >
                {category}
              </Link>
            ))}
            <Link to="/bookmarks" className="text-gray-600 hover:text-gray-900">
              <BookmarkIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4 px-2">
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/category/${category}`}
                  className="text-gray-600 hover:text-gray-900 capitalize text-base py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {category}
                </Link>
              ))}
              <Link
                to="/bookmarks"
                className="text-gray-600 hover:text-gray-900 py-2 flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <BookmarkIcon className="h-6 w-6 mr-2" />
                <span>Bookmarks</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
