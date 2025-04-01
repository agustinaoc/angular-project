import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes = [
    { id: 1, name: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish.', ingredients: ['Pasta', 'Eggs', 'Pancetta', 'Parmesan'] },
    { id: 2, name: 'Chicken Curry', description: 'A spicy and flavorful dish.', ingredients: ['Chicken', 'Curry Powder', 'Coconut Milk'] },
    { id: 3, name: 'Chocolate Cake', description: 'A rich and moist chocolate cake.', ingredients: ['Flour', 'Cocoa Powder', 'Eggs', 'Sugar', 'Butter'] },
  ];
}
