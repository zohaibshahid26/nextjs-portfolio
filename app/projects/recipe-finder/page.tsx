'use client'
import { useState } from 'react'

interface Recipe {
  id: number
  name: string
  image: string
  ingredients: string[]
  instructions: string[]
  prepTimeMinutes: number
  cookTimeMinutes: number
  servings: number
  difficulty: string
  cuisine: string
  caloriesPerServing: number
  tags: string[]
  rating: number
  reviewCount: number
  mealType: string[]
}

export default function RecipeFinder() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchRecipes = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${query}`
      )
      const data = await response.json()
      setRecipes(data.recipes)
    } catch (err) {
      setError('Failed to fetch recipes')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title'>Recipe Finder</h1>
        <div className='mt-6'>
          <div className='mb-4'>
            <label className='mb-2 block'>Search Recipes:</label>
            <input
              type='text'
              value={query}
              onChange={e => setQuery(e.target.value)}
              className='w-full rounded border p-2'
              placeholder='e.g. Margherita'
            />
          </div>
          <button
            onClick={fetchRecipes}
            className='rounded bg-blue-500 p-2 text-white'
          >
            Search
          </button>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p className='text-red-500'>{error}</p>}
        {recipes.length > 0 && (
          <div className='mt-6'>
            <h2 className='text-xl font-semibold'>Recipes</h2>
            <ul className='mt-4'>
              {recipes.map(recipe => (
                <li key={recipe.id} className='mb-4'>
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className='mb-2 w-full rounded'
                  />
                  <h3 className='text-lg font-semibold'>{recipe.name}</h3>
                  <p className='text-sm text-gray-600'>
                    Cuisine: {recipe.cuisine}
                  </p>
                  <p className='text-sm text-gray-600'>
                    Difficulty: {recipe.difficulty}
                  </p>
                  <p className='text-sm text-gray-600'>
                    Prep Time: {recipe.prepTimeMinutes} mins
                  </p>
                  <p className='text-sm text-gray-600'>
                    Cook Time: {recipe.cookTimeMinutes} mins
                  </p>
                  <p className='text-sm text-gray-600'>
                    Servings: {recipe.servings}
                  </p>
                  <p className='text-sm text-gray-600'>
                    Calories: {recipe.caloriesPerServing} kcal
                  </p>
                  <p className='text-sm text-gray-600'>
                    Rating: {recipe.rating} ({recipe.reviewCount} reviews)
                  </p>
                  <h4 className='mt-2 font-semibold'>Ingredients:</h4>
                  <ul className='list-disc pl-5'>
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                  <h4 className='mt-2 font-semibold'>Instructions:</h4>
                  <ol className='list-decimal pl-5'>
                    {recipe.instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ol>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
