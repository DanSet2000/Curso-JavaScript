import { async } from "regenerator-runtime";
import { API_URL, RES_PER_PAGE } from './config.js'
import { getJSON } from "./helpers.js";

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};

export const loadRecipe = async function(id){
  try{
    const data = await getJSON(`${API_URL}${id}`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    }

    if(state.bookmarks.some(bookmark => bookmark.id === id)){
      state.recipe.bookmarked = true;
    }else{
      state.recipe.bookmarked = false;
    }
    console.log(state.recipe)
  }catch(error){
    // Temp Error Handler
    console.error(`${error}!!!`);
    throw error;
  }
}

export const loadSearchResults = async function(query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`)

    state.search.results = data.data.recipes.map(recipe => {
      return{
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      };
    });

    state.search.page = 1;

  } catch (error) {
    console.error(`${error}!!!`);
    throw error;
  }
};

export const getSearchResultsPage = function(page = state.search.page){
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
}

export const updateServings = function(newServings){
  state.recipe.ingredients.forEach(ingredient =>{
    ingredient.quantity = (ingredient.quantity * newServings) / state.recipe.servings;
    // New Quantity = Old Quantity * newServings / OldServings 
  })

  state.recipe.servings = newServings;
}

const persistBookmarks = function(){
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
}

export const addBookmark = function(recipe){
  // Agregar Bookmark
  state.bookmarks.push(recipe);
  // Marcar receta actual como Bookmark
  if(recipe.id === state.recipe.id){
    state.recipe.bookmarked = true;
  }

  persistBookmarks();
}

export const deleteBookmark = function(id){
  // Eliminar Bookmark
  const index = state.bookmarks.findIndex(element => element.id === id);
  state.bookmarks.splice(index, 1)
  // Marcar receta actula como NOT Bookmarked
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  persistBookmarks();
}

const init = function(){
  const storage = localStorage.getItem('bookmarks');

  if (storage) state.bookmarks = JSON.parse(storage);
}

init();

const clearBookmarks = function(){
  localStorage.clear('bookmarks');
};
// clearBookmarks();

export const uploadRecipe = async function(newRecipe){

}