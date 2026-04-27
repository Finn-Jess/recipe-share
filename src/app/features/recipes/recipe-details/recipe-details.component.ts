import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RecipeService } from '../../../core/recipe.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Recipe, Comment } from '../../../core/models/recipe.model';
import { map } from 'rxjs/operators'; 

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe | null = null;
  error: string | null = null;
  isLoading = true;
  newCommentText = '';
  linkCopied = false;

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
        if (recipe) {
          this.recipe = {
            ...recipe,
            comments: recipe.comments || [],
          };
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading recipe:', err);
        this.error = 'Recipe not found or failed to load.';
        this.isLoading = false;
      }
    });
  }

  addComment() {
    if (!this.recipe || !this.recipe._id) {
      return;
    }

    const commentText = this.newCommentText.trim();
    if (!commentText) {
      return;
    }

    const comment: Comment = {
      username: 'Guest',
      text: commentText,
    };

    this.recipeService.addComment(this.recipe._id, comment);
    this.recipe.comments = [...(this.recipe.comments || []), comment];
    this.newCommentText = '';
  }

  copyLink() {
    if (!this.recipe) {
      return;
    }

    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      this.linkCopied = true;
      setTimeout(() => {
        this.linkCopied = false;
      }, 2000);
    }).catch(() => {
      this.linkCopied = false;
    });
  }
}