import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-create',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './recipe-create.component.html',
  styleUrl: './recipe-create.scss'
})
export class RecipeCreateComponent {
  recipeForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.recipeForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      imageUrl: ['', [Validators.required, Validators.pattern(/^https?:\/\/.+/)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      ingredients: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.recipeForm.valid) {
      console.log('New Recipe Data:', this.recipeForm.value);
    
      this.router.navigate(['/catalog']);
    }
  }
}