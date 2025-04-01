import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  recipeId: number | null = null;
  recipe: any = null;

  recipes = [
    { id: 1, name: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish.', ingredients: ['Pasta', 'Eggs', 'Pancetta', 'Parmesan'] },
    { id: 2, name: 'Chicken Curry', description: 'A spicy and flavorful dish.', ingredients: ['Chicken', 'Curry Powder', 'Coconut Milk'] },
    { id: 3, name: 'Chocolate Cake', description: 'A rich and moist chocolate cake.', ingredients: ['Flour', 'Cocoa Powder', 'Eggs', 'Sugar', 'Butter'] },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.recipeId = Number(this.route.snapshot.paramMap.get('id'));

    this.recipe = this.recipes.find(r => r.id === this.recipeId);
  }
}
