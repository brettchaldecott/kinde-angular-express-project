import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authCheckUrl = '/api/isAuthenticated'; // Replace with your backend API URL
  private isLoggedIn = false;

  constructor(private http: HttpClient, private router: Router) {}

  // Method to check if user is authenticated by calling the remote API
  checkAuthentication(): Observable<boolean> {
    return this.http.get<{ authenticated: boolean }>(this.authCheckUrl).pipe(
      map(response => response.authenticated),
      tap(authenticated => {
        this.isLoggedIn = authenticated;
      }),
      catchError(error => {
        console.error('Authentication check failed', error);
        return of(false);
      })
    );
  }

  // Method to log out the user
  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  // Method to check if user is authenticated (local check)
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
