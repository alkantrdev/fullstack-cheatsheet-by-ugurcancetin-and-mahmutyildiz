import { addIngredientsRoute } from './ingredients/addIngredientsRoute';
import { deleteIngredientRoute } from './ingredients/deleteIngredientRoute';
import { addMealRoute } from './meals/addMealRoute';
import { deleteMealRoute } from './meals/deleteMealRoute';
import { getMealsRoute } from './meals/getMealsRoute';

export const routes = [
    getMealsRoute,
    addMealRoute,
    deleteMealRoute,
    addIngredientsRoute,
    deleteIngredientRoute
];