import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private router: Router, private loginApi: LoginService) { 

  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      passwd: new FormControl('')
    });
  }

  login() {

    this.loginApi.postLogin({
      username: this.loginForm.get('email').value,
      password: this.loginForm.get('passwd').value})
      .subscribe(
			  response => {
          if (response.success) {
            this.router.navigate(['/product/list']);
          }
				  console.log(response.message);
			}, error => {
				console.log(error);
			});
  }

}
