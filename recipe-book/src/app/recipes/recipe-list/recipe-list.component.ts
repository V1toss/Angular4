import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Test', 'http://vipest-okna.ru/prefix/414714.jpg'),
    new Recipe('A Test Recipe 2', 'Test 2', 'https://im0-tub-ru.yandex.net/i?id=eb01083d56c652e18c772db3b062ebeb&n=13')
  ];

  constructor() { }

  ngOnInit() {
  }

}
