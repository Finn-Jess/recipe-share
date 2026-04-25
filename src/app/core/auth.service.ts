import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor() {
    // Проверяваме дали сме в браузъра, преди да пипаме localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        this.userSubject.next(JSON.parse(savedUser));
      }
    }
  }

  register(userData: any) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(userData));
    }
    this.userSubject.next(userData);
  }

  login(userData: any) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(userData));
    }
    this.userSubject.next(userData);
  }

  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
    }
    this.userSubject.next(null);
  }

  get isLoggedIn(): boolean {
    return !!this.userSubject.value;
  }
}