import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../../core/recipe.service';
import { Recipe } from '../../core/models/recipe.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomeComponent implements OnInit {
  recipes: Recipe[] = [];
  commentInputs: Record<string, string> = {};

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.recipes$.subscribe((data) => {
      this.recipes = data;
    });
  }

  addComment(recipeId: string) {
    const commentText = this.commentInputs[recipeId]?.trim();
    if (!commentText) {
      return;
    }

    this.recipeService.addComment(recipeId, {
      username: 'Guest',
      text: commentText,
    });

    this.commentInputs[recipeId] = '';
  }
}
