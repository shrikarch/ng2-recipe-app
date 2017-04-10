import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('Name of the Recipe','description of the recipe','https://unsplash.it/500/300/?random'),
  new Recipe('Second Recipe','description Second recipe','https://unsplash.it/500/300/?random')
];

  constructor() { }

  ngOnInit() {
  }

}
