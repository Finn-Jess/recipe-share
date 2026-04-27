import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RecipeListComponent } from './features/recipes/recipe-list/recipe-list.component';
import { RecipeCreateComponent } from './features/recipes/recipe-create/recipe-create.component';
import { RecipeDetailsComponent } from './features/recipes/recipe-details/recipe-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'catalog', component: RecipeListComponent },
  { path: 'create', component: RecipeCreateComponent },
  { path: 'details/:id', component: RecipeDetailsComponent }, // :id е динамичен параметър
];