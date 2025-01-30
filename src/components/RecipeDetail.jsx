import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { recipes } from '../data/recipes'
import { BookmarkIcon } from '@heroicons/react/24/outline'
import { BookmarkIcon as BookmarkSolidIcon } from '@heroicons/react/24/solid'
import { StarIcon } from '@heroicons/react/24/solid'

export default function RecipeDetail({ toggleBookmark, bookmarks }) {
  const { id } = useParams()
  const [feedback, setFeedback] = useState('')
  const [rating, setRating] = useState(0)
  const [feedbacks, setFeedbacks] = useState([])

  const recipe = Object.values(recipes)
    .flat()
    .find(r => r.id === parseInt(id))

  const isBookmarked = bookmarks.some(b => b.id === recipe?.id)

  const handleSubmitFeedback = (e) => {
    e.preventDefault()
    if (feedback.trim() && rating > 0) {
      setFeedbacks(prev => [...prev, { text: feedback, rating, date: new Date() }])
      setFeedback('')
      setRating(0)
    }
  }

  if (!recipe) return <div>Recipe not found</div>

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.name} 
          className="w-full h-96 object-cover"
        />
        <div className="p-8">
          <div className="flex justify-between items-start">
            <h1 className="text-4xl font-bold text-gray-900">{recipe.name}</h1>
            <button 
              onClick={() => toggleBookmark(recipe)}
              className="text-gray-500 hover:text-gray-700"
            >
              {isBookmarked ? (
                <BookmarkSolidIcon className="h-8 w-8 text-yellow-500" />
              ) : (
                <BookmarkIcon className="h-8 w-8" />
              )}
            </button>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
            <ul className="list-disc list-inside space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-lg text-gray-700">{ingredient}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
            <ol className="list-decimal list-inside space-y-4">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="text-lg text-gray-700">{step}</li>
              ))}
            </ol>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Feedback</h2>
            <form onSubmit={handleSubmitFeedback} className="space-y-6">
              <div>
                <div className="flex space-x-3 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="focus:outline-none"
                    >
                      <StarIcon 
                        className={`h-8 w-8 ${
                          star <= rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full p-4 border rounded-lg text-lg"
                  placeholder="Share your experience with this recipe..."
                  rows="4"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Submit Feedback
              </button>
            </form>

            <div className="mt-8 space-y-6">
              {feedbacks.map((item, index) => (
                <div key={index} className="border-b pb-6">
                  <div className="flex space-x-2 mb-3">
                    {[...Array(item.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-700">{item.text}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {new Date(item.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}