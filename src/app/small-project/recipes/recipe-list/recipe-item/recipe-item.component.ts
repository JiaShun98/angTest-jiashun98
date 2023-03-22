import { Component,OnInit,Input } from '@angular/core';
import { Recipe } from '../../../shared/recipe.model';
import { RecipeService } from 'src/app/small-project/service/recipe.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() rcp : Recipe;
  @Input() index : number;

  constructor(private recipeService : RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

}
