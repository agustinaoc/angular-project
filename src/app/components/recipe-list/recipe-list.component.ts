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
    { id: 1, name: 'Pizza', description: 'Delicious cheesy pizza' },
    { id: 2, name: 'Pasta', description: 'Creamy and spicy pasta' }
  ];
}
