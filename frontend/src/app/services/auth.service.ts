import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl='http://localhost:3000';
  private token: string | null = null;
  private logouttimer:any;
  constructor(private http: HttpClient, private router: Router) {
    this.autoLogoutAfterTokenExpires();
  }
  login(email: string, password: string) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/auth/login`,{email,password});
  }
  saveToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
    this.autoLogoutAfterTokenExpires();
  }
  getToken(): string | null {
    return this.token || localStorage.getItem('token');
  }
  logout(){
    this.token = null;
    localStorage.removeItem('token');
    clearTimeout(this.logouttimer);
    this.router.navigate(['/login']);
  }
  isLoggedIn(): boolean {
    const token=this.getToken();
    if(!token) return false;
    try{
      const decoded:any=jwtDecode(token);
      const exp=decoded.exp;
      const now=Math.floor(Date.now()/1000);
      return exp>now;
    }
    catch(e){
      return false;
    }
  }
  private autoLogoutAfterTokenExpires() {
    const token=this.getToken();
    if(!token) return;
    try{
      const decoded:any=jwtDecode(token);
      const expiresAt=decoded.exp*1000;
      const delay=expiresAt-Date.now();
      if(delay>0){
        this.logouttimer=setTimeout(()=>{
          alert('Session expired. Please login again.');
          this.logout();
        },delay);
      }
      else{
        this.logout();
      }
    }
    catch(e){
      this.logout();
    }
  }
}