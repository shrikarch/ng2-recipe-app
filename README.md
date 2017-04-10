
Started by adding Bootstrap. As simple as `npm install --save bootstrap`
And then add it to `angular-cli.json` as a global stylesheet with a path originating from the index.html.

Once that is done, added the components using the CLI.
The directory structure is:

app
- app.component.ts
- header
- shopping-list
  - shopping-list-edit
- recipe-book
  - recipe-list
    - recipe-item
  - recipe-detail

Followed by that, we added each component to their repsective parent component's markup and then added Bootstrap navbar markup to the header component.

##### Models
Then we are adding a structure to the recipe using a model.
Model is a blueprint for an object we create.

We then add a data structure of our model and add a constructor to it
so that we can instantiate it using the new keyword while passing arguments to it

Constructor, as a reminder is a built in function each class has
that will be executed as soon as we create an instance of that class.
Inside that constructor we have to assign the arguments that we recieved to the properties of the object/class.

Example of the filled model:
```ts
export class Recipe{
  public name: string; //are publicly accessible
  public description: string;
  public imagePath: string;

  constructor(name: string, description: string, imagePath: string){
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
```
The other way of structuring model is:
```ts
export class Ingredient {
  constructor(public name: string,public amount: number){  }
}
//assigns the name to this.name automatically 
```

Once that is done, we import the model and we specify the datatype of our recipe array to this model we created. Hence, in recipe-list.component, we write:
```ts
import { Recipe } from '../recipe.model';
//...
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('Name of the Recipe','description of the recipe','https://unsplash.it/500/300/?random'),
  new Recipe('Second Recipe','description Second recipe','https://unsplash.it/500/300/?random')
];//datatype as recipe and calling a constructor.
};
```
Where we are using the constructor to create an object with its params as properties.

Once we create the model, we can now access this data, in our markup of this component.
```html
<a href="#" *ngFor="let recipe of recipes">
    <h4 class="">{{recipe.name}}</h4>
    <p class="">
      {{recipe.description}}
    </p>
    <img src="{{recipe.imagePath}}" alt="{{recipe.name}}" class="" style="max-height: 50px; ">
    <!-- OR -->
      <img [src]="recipe.imagePath" alt="{{recipe.name}}" class="" style="max-height: 50px; ">
</a>
```





---

##### Original content that was generated.
# Ng2RecipeGuide
This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
