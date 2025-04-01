import { bootstrapApplication } from '@angular/platform-browser';
import { RecipeListComponent } from './app/components/recipe-list/recipe-list.component';
import { appConfig } from './app/app.config';

bootstrapApplication(RecipeListComponent, appConfig)
  .catch(err => console.error(err));
