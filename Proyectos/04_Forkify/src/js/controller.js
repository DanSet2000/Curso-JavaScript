import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

// Llamado a la API con la Receta
const controlRecipes = async function(){
  try{
    const id = window.location.hash.slice(1);

    if(!id) return;
    recipeView.renderSpinner();

    // 0) Actualizar Resultados para Marcar Resultados de la Busqueda
    resultsView.update(model.getSearchResultsPage());

    // 1) Actualizando la vista de Bookmark
    bookmarksView.update(model.state.bookmarks);

    // 2) Cargando la Receta
    await model.loadRecipe(id);

    // 3) Renderizar la Receta en Pantalla 
    recipeView.render(model.state.recipe);

  } catch (err){
    recipeView.renderError();
    console.error(err);
  }
};

const controlSearchResults = async function() {
  try {
    resultsView.renderSpinner();

    // 1) Obtener consulta de la búsqueda
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Cargar Resultados de Busqueda
    await model.loadSearchResults(query);

    // 3) Renderizar los Resultados
    resultsView.render(model.getSearchResultsPage());

    // 4) Renderizar Botones Iniciales de Paginacion
    paginationView.render(model.state.search);
  } catch (error) {
    console.log(error);
  }
}

const controlPagination = function(goToPage){
  // 1) Renderizar Nuevos Resultados
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 2) Renderizar Nuevos Botones de Paginacion
  paginationView.render(model.state.search);
}

const controlServings = function(newServings){
  // Actualizar las porciones de la receta (in state)
  model.updateServings(newServings);

  // Actualizar la vista con las nuevas porciones
  recipeView.update(model.state.recipe);
}

const controlAddBookmark = function(){
  // 1) Agregar / Remover un Bookmark
  if (!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
  } else{
    model.deleteBookmark(model.state.recipe.id);
  }

  // 2) Actualizar la vista de la Receta
  recipeView.update(model.state.recipe);

  // 3) Renderizar el Bookmark
  bookmarksView.render(model.state.bookmarks)
}

const controlBookmarks = function(){
  bookmarksView.render(model.state.bookmarks);
}

const controlAddRecipe = async function(newRecipe){
  try {
    // Mostrar el Loading Spinner
    addRecipeView.renderSpinner();

    // Actualizar la data de la Nueva Receta
    await model.uploadRecipe(newRecipe);

    // Render Receta
    recipeView.render(model.state.recipe);

    // Mensaje de Exito
    addRecipeView.renderMessage();

    // Render Bookmark Vista
    bookmarksView.render(model.state.bookmarks);

    // Cambiar el ID en la URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // Close Form Window
    setTimeout(function(){
      addRecipeView.toggleWindow()
    }, MODAL_CLOSE_SEC * 1000);
  } catch (error) {
    console.error('💥', error)

    addRecipeView.renderError(error.message)
  }

}

const init = function(){
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
}

init();

