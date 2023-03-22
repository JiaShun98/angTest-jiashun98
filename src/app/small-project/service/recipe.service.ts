import { Injectable,Input,Output,EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from '../shared/recipe.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe a',
     'This is simply a test !!',
     'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
     [new Ingredient('Meat',1), new Ingredient ('Coke', 1)]),

     new Recipe('A Test Recipe b',
    'This is simply a test!!!',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [new Ingredient('Veggie',1), new Ingredient ('Coke', 1)])
  ];
  constructor(private shoppingListService : ShoppingListService ) { }

  getRecipe(){
    return this.recipes.slice();
  }

  getRecipes(id : number){
    console.table(this.recipes[id]);
    return this.recipes[id];
  }

  addIngredientListToShoppingList(ingredient : Ingredient[]){
    this.shoppingListService.addIngredientListToShoppingList(ingredient);
  }

}
