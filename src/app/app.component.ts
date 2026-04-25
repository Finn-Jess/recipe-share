import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Пътят трябва да е точно такъв:
import { HeaderComponent } from './core/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent], // Тук вече няма да е червено
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'recipe-share';
}