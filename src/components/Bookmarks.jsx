import RecipeCard from './RecipeCard'

export default function Bookmarks({ bookmarks, toggleBookmark }) {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">My Bookmarks</h2>
      {bookmarks.length === 0 ? (
        <p className="text-xl text-gray-500">No bookmarked recipes yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bookmarks.map(recipe => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isBookmarked={true}
              onBookmark={toggleBookmark}
            />
          ))}
        </div>
      )}
    </div>
  )
}