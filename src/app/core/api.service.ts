import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl = 'http://localhost:3000/api/recipes';

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createRecipe(recipeData: any): Observable<any> {
    return this.http.post(this.apiUrl, recipeData);
  }

  getRecipeById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}