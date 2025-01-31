import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import Bookmarks from "./components/Bookmarks";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const toggleBookmark = (recipe) => {
    setBookmarks((prev) => {
      const exists = prev.find((b) => b.id === recipe.id);
      if (exists) {
        return prev.filter((b) => b.id !== recipe.id);
      }
      return [...prev, recipe];
    });
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/category/:category"
              element={
                <RecipeList
                  toggleBookmark={toggleBookmark}
                  bookmarks={bookmarks}
                />
              }
            />
            <Route
              path="/recipe/:id"
              element={
                <RecipeDetail
                  toggleBookmark={toggleBookmark}
                  bookmarks={bookmarks}
                />
              }
            />
            <Route
              path="/bookmarks"
              element={
                <Bookmarks
                  bookmarks={bookmarks}
                  toggleBookmark={toggleBookmark}
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
