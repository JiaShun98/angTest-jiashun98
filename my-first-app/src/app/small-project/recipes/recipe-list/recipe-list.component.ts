import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { RecipeService } from '../../service/recipe.service';
import { Recipe } from '../../shared/recipe.model';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] ;

  constructor(
    private recipeService : RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route});
  }

}
