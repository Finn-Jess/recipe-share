import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RecipeList } from './features/recipes/recipe-list/recipe-list';
import { RecipeCreateComponent } from './features/recipes/recipe-create/recipe-create.component';
import { RecipeDetails } from './features/recipes/recipe-details/recipe-details';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'catalog', component: RecipeList },
  { path: 'create', component: RecipeCreateComponent },
  { path: 'details/:id', component: RecipeDetails }, // :id е динамичен параметър
];