import { Link } from 'react-router-dom'
import { BookmarkIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const categories = ['chinese', 'japanese', 'western', 'indonesian', 'korean']

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            Recipe Book
          </Link>
          <div className="flex items-center space-x-6">
            {categories.map(category => (
              <Link
                key={category}
                to={`/category/${category}`}
                className="text-gray-600 hover:text-gray-900 capitalize text-sm md:text-base"
              >
                {category}
              </Link>
            ))}
            <Link to="/bookmarks" className="text-gray-600 hover:text-gray-900">
              <BookmarkIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}