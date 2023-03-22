import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './small-project/header/header.component';
import { RecipesComponent } from './small-project/recipes/recipes.component';
import { RecipeListComponent } from './small-project/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './small-project/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './small-project/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './small-project/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './small-project/shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirectiveDirective } from './small-project/shared/dropdown-directive.directive';
import { ShoppingListService } from './small-project/service/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './small-project/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './small-project/recipes/recipe-edit/recipe-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirectiveDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
