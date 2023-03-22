import { Component, Input, OnInit,ViewChild,ElementRef,Output,EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../service/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Input() ingredient : Ingredient;
  @ViewChild('amountInput', { static: false }) amountInput: ElementRef;
  constructor(private shoppingListService : ShoppingListService) { }

  onAddIngredient(nameInput: HTMLInputElement){
    this.shoppingListService.onAddIngredient(new Ingredient(nameInput.value, this.amountInput.nativeElement.value));
  }

  onDeleteIngredient(nameInput: HTMLInputElement){

  }

  onClearIngredient(nameInput: HTMLInputElement){

  }

  ngOnInit() {
  }

}
