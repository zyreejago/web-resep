import { useParams } from "react-router-dom";
import { recipes } from "../data/recipes";
import RecipeCard from "./RecipeCard";

export default function RecipeList({ toggleBookmark, bookmarks }) {
  const { category } = useParams();
  const categoryRecipes = recipes[category] || [];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 capitalize">{category} Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            isBookmarked={bookmarks.some((b) => b.id === recipe.id)}
            onBookmark={toggleBookmark}
          />
        ))}
      </div>
    </div>
  );
}
