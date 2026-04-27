import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RecipeService } from '../../../core/recipe.service';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs/operators'; 

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: any = null;     // replace 'any' with your Recipe interface later
  error: string | null = null;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => {
        const id = params.get('id');
        if (!id) {
          throw new Error('No recipe ID provided');
        }
        return this.recipeService.getRecipeById(id);
      })
    ).subscribe({
      next: (recipe) => {
        this.recipe = recipe;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading recipe:', err);
        this.error = 'Recipe not found or failed to load.';
        this.isLoading = false;
      }
    });
  }
}