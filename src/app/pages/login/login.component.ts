import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj = {
    username: '',
    password: ''
  };

  constructor(private http: HttpClient) { }

  onLogin(){

    this.http.post('http://34.135.131.249:3002/account/login', this.loginObj).subscribe((res: any) => {
      console.log(res);
    });

  }

}
