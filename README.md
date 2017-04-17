
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

### Models
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
### Routes
We start with adding the router module to our  `app.module.ts`.
`import { Routes, RouterModule } from '@angular/router';` goes somewhere in the top of app.module. Followed by a constant defined in the same file, where we declare our routes. This constant is an array.

Constant:
```ts
const appRoutes: Routes = [
  { path: 'portfolio', component: PortfolioComponent}
]
```
Where the `path:'portfolio'` is the URL stub of portfolio and component is the component that will be loaded.

We also need to import the RouterModule inside our imports. Looks like this:
```ts
imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  RouterModule.forRoot(appRoutes),
  Angular2FontAwesomeModule
],
```
Note that we have to register our constant of routes inside the forRoot function for router module.

Then wherever we want out routed components to be displayed, we add `<router-outlet></router-outlet>`. Ng will then render the stuff there.

Now to hook the links up to the routes, we get rid of their `href` attribute, since href reloads the entire app again. Replace the href with `routerLink`. For eg:
```html
<a routerLink="/resume" class="top_link active_top_link" id="showResume">Resume</a>
<a [routerLink]="['/portfolio']" class="top_link" id="showProjects">Portfolio</a>
```
The first kid of routerLink is basic, while the second is the attribute type. The attribute type takes an array as an object while each object in that arrat is the URL stub we want to add. for example: `[routerLink]="['/portfolio','specific']"` will lead to `/portfolio/something`.

In that same markup, adding `routerLinkActive = 'active'` will add the 'active' class whenever that link is active. We can also add options to the routerLinkActive, stating whether it should match the link exactly as it is, or any substring will do. Default is any substring.
```html
<a routerLinkActive="active_top_link" routerLinkActiveOptions="{exact : true}"
[routerLink]="['/portfolio']" class="top_link"
id="showProjects">Portfolio</a>
```

##### Navigating routes programmatically.
All we do is add the router module to our component. We then pass it to the constructor and then in our method, call this.router.navigate. For exmple:
```ts
import { Router } from '@angular/router';
//....
constructor(private router: Router) { }
//...
onEventHappen(){
  this.router.navigate(['/path'])
}
```
##### Adding nested (children) routes
Nested routes are meant to be defined the following way in `app.module.ts` again.
```ts
{ path: 'portfolio', component: PortfolioComponent, children: [
  { path: 'circleframe', component: CircleframeComponent },
  { path: 'sharpenerinc', component: SharpenerincComponent }
]}
```
In the markup, the links need to be defined using the directives and arrays of URL slug.
For eg:
```html
<a [routerLink]="['/portfolio','circleframe']">CircleframeComponent Production</a>
<a [routerLink]="['/portfolio','sharpenerinc']">Sharpenerinc</a>
```

### Deployment
###### Deployment steps to keep in mind
- Build your app for production
- Consider Ahead of Time [AoT] Compilation
- Set the correct base element
- Make sure the server always returns the index.html file

Make sure, in your index.html you add `<base href="/">` if you're deploying your website on its own domain. If it is on a subdomain or a directory, then we add `<base href="/that_directory">`.

Finally, to build:
`ng build --prod --aot`

Which will create a `dist` directory that can be directly uploaded on the server.



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
