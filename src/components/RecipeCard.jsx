import { BookmarkIcon } from '@heroicons/react/24/outline'
import { BookmarkIcon as BookmarkSolidIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

export default function RecipeCard({ recipe, isBookmarked, onBookmark }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={recipe.image} 
        alt={recipe.name} 
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold">{recipe.name}</h3>
          <button 
            onClick={() => onBookmark(recipe)}
            className="text-gray-500 hover:text-gray-700"
          >
            {isBookmarked ? (
              <BookmarkSolidIcon className="h-7 w-7 text-yellow-500" />
            ) : (
              <BookmarkIcon className="h-7 w-7" />
            )}
          </button>
        </div>
        <p className="text-base text-gray-500 capitalize mt-2">{recipe.category}</p>
        <Link 
          to={`/recipe/${recipe.id}`}
          className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"
        >
          View Recipe →
        </Link>
      </div>
    </div>
  )
}