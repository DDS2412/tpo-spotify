import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private CLIENT_ID = '';
  private CLIENT_SECRET = '';

  constructor(private router: Router) {}

  public setAccessToken(token: string) {
    localStorage.setItem('spotify_access_token', token);
  }

  public breakConnection() {
    localStorage.removeItem('spotify_access_token');
    this.router.navigate(['']);
  }

  public getClientID(){
    return this.CLIENT_ID;
  }

  public getClientSecret(){
    return this.CLIENT_SECRET;
  }

  public getAccessToken() {
    return localStorage.getItem('spotify_access_token');
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('spotify_access_token');
  }
}
