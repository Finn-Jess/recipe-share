import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../../core/recipe.service'; // Пътят може да варира

@Component({
  selector: 'app-recipe-create',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './recipe-create.component.html'
})
export class RecipeCreateComponent {
  recipeForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private recipeService: RecipeService
  ) {
    this.recipeForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      imageUrl: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      ingredients: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.recipeForm.valid) {
      this.recipeService.addRecipe(this.recipeForm.value);
      this.router.navigate(['/catalog']);
    }
  }
}