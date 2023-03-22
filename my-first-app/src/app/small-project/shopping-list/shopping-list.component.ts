import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingListService } from '../service/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients: Ingredient[] = [];
  private ingredientSubcription : Subscription;
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredient();

    this.shoppingListService.ingredientCreated.subscribe(
      (i : Ingredient[]) => {
        this.ingredients = i;
      }

    )
  }

  ngOnDestroy(){
    this.ingredientSubcription.unsubscribe();
  }

}
