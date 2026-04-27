import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RecipeService } from '../../../core/recipe.service';
import { Recipe } from '../../../core/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recipe-list.html',
  styleUrls: ['./recipe-list.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    // Абонираме се за промените в рецептите
    this.recipeService.recipes$.subscribe(data => {
      this.recipes = data;
    });
  }
}