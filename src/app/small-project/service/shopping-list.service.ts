import { Injectable,Input,Output,EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  ingredientCreated = new Subject<Ingredient[]>();

  constructor() { }

  getIngredient(){
    return this.ingredients.slice();
  }

  onAddIngredient(i : Ingredient){
    this.ingredients.push(i);
    this.ingredientCreated.next(this.ingredients.slice());
  }

  addIngredientListToShoppingList(ingredient : Ingredient[]){
    this.ingredients.push(...ingredient);
    this.ingredientCreated.next(this.ingredients.slice());
  }
}
