import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Recipe } from './models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [];
  private recipesSubject = new BehaviorSubject<Recipe[]>([]);
  recipes$ = this.recipesSubject.asObservable();

  constructor() {
    // Проверяваме за запазени рецепти в браузъра
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('recipes');
      if (saved) {
        this.recipes = JSON.parse(saved);
        this.recipesSubject.next(this.recipes);
      }
    }
  }

  addRecipe(recipeData: any) {
    const newRecipe: Recipe = {
      ...recipeData,
      _id: Math.random().toString(36).substr(2, 9), // Генерираме временно ID
      likes: [],
      comments: []
    };
    this.recipes.push(newRecipe);
    this.save();
  }

  getRecipes() {
    return this.recipes;
  }

  private save() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('recipes', JSON.stringify(this.recipes));
    }
    this.recipesSubject.next([...this.recipes]);
  }
}