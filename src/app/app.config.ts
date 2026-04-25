import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
// Внасяме функцията за HTTP клиента
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    // Добавяме я тук, за да работи ApiService
    provideHttpClient()
  ]
};