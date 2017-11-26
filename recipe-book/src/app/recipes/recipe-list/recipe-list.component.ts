import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Test', 'http://mealblog.ru/wp-content/uploads/2013/03/%D0%B1%D0%BB%D1%8E%D0%B4%D0%B0-%D0%B8%D0%B7-%D1%80%D1%8B%D0%B1%D1%8B.jpg'),
    new Recipe('A Test Recipe 2', 'Test 2', 'https://im0-tub-ru.yandex.net/i?id=eb01083d56c652e18c772db3b062ebeb&n=13')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
