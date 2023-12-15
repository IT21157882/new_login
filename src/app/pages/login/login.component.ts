import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj = {
    username: '',
    password: '',
    appId: '1'

  };

  constructor(private http: HttpClient, private router: Router) { }

  onLogin() {
    this.http.post('http://34.135.131.249:3002/account/login', this.loginObj).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem('token', res.authToken);
        
        alert('Login Success')
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        
        alert('Login Faild')
        console.error('Login failed', error);
      }
    );
  

}

}
