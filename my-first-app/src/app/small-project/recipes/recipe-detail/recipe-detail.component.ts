import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';
import { RecipeService } from '../../service/recipe.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail : Recipe;
  id : number;
  constructor(private recipeService : RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (params : Params) => {
        this.id = +params['id'];
        this.recipeDetail = this.recipeService.getRecipes(this.id);
      }
    )
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientListToShoppingList(this.recipeDetail.ingredient);
  }

  onNavigate(feature : string){
    this.router.navigate([feature], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
