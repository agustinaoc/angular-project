import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadComponent: () => import('./components/recipe-list/recipe-list.component').then(m => m.RecipeListComponent) },
  { path: 'recipe/:id', loadComponent: () => import('./components/recipe-detail/recipe-detail.component').then(m => m.RecipeDetailComponent) },
  { path: 'add', loadComponent: () => import('./components/add-recipe/add-recipe.component').then(m => m.AddRecipeComponent) },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
  ],
};
