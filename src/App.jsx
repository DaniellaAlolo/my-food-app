import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [recipes, setRecipes] = useState([]);

  //function för att söka efter recept

  const fetchRecipes = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchKeyword
      );
      const responseData = await response.json();
      setRecipes(responseData.meals); // Hämta bara de första 5 slumpmässiga recepten
    } catch (error) {
      console.log("Fel vid hämtning av recept", error);
    }
    setIsLoading(false);
  };

  // funktion för att söka efter recept
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchRecipes();
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="container">
      <h1>My Food App2</h1>
      <SearchBar
        handleSubmit={handleSubmit}
        value={searchKeyword}
        onChange={(event) => setSearchKeyword(event.target.value)}
        isloading={isLoading}
      />

      <div className="recipes">
        {isLoading ? (
          <p>Loading...</p>
        ) : recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))
        ) : (
          <p>No recipes found</p>
        )}
      </div>
    </div>
  );
}

export default App;
