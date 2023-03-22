import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { RecipeDetailComponent } from "./small-project/recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./small-project/recipes/recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./small-project/recipes/recipe-list/recipe-item/recipe-item.component";
import { RecipeStartComponent } from "./small-project/recipes/recipe-start/recipe-start.component";
import { RecipesComponent } from "./small-project/recipes/recipes.component";
import { ShoppingListComponent } from "./small-project/shopping-list/shopping-list.component";

const appRoutes : Routes = [
  { path: '', redirectTo:'/recipes', pathMatch: 'full' },
  { path: 'recipes' , component: RecipesComponent,
  children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent}
  ]},
  { path: 'shopping-list' , component: ShoppingListComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{


}
